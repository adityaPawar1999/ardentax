import { collection, doc, getDocs, orderBy, query, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '../firebase.js';

function safeDocumentName(companyName) {
  const name = String(companyName ?? '').trim();
  if (!name) throw new Error('Enter the legal company name before saving this form.');
  // Firestore document IDs cannot contain a slash. Preserve the company name
  // otherwise so it remains recognizable in the Firebase console.
  return name.replaceAll('/', '-');
}

export async function saveCustomerRecord({ formRole, fields, values }) {
  const isSupplier = fields.some((field) => field.id.startsWith('suppliers-'));
  const collectionName = isSupplier ? 'supplier' : 'customer';
  const companyName = safeDocumentName(
    values[isSupplier ? 'suppliers-1' : 'customers-2'],
  );
  const formFields = fields.map((field) => ({
    id: field.id,
    name: field.name,
    status: field.status,
    value: String(values[field.id] ?? '').trim(),
  }));
  const formValues = Object.fromEntries(formFields.map((field) => [field.id, field.value]));

  return setDoc(doc(collection(db, collectionName), companyName), {
    companyName,
    formType: formRole,
    formFields,
    formValues,
    submittedAt: serverTimestamp(),
    submittedAtLocal: new Date().toISOString(),
  });
}

async function getRecords(collectionName) {
  const recordsQuery = query(collection(db, collectionName), orderBy('submittedAt', 'desc'));
  const snapshot = await getDocs(recordsQuery);
  return snapshot.docs.map((record) => ({ id: record.id, ...record.data() }));
}

export const getCustomerRecords = () => getRecords('customer');
export const getSupplierRecords = () => getRecords('supplier');
