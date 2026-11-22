import { useEffect, useMemo, useState } from 'react';
import { getCustomerRecords, getSupplierRecords } from '../../services/customerService.js';
import './customer-data.css';

function valueFor(record, id) {
  return record.formValues?.[id] || '';
}

function recordType(record) {
  return record.formType?.toLowerCase().includes('supplier') ? 'supplier' : 'customer';
}

function recordName(record) {
  const isSupplier = recordType(record) === 'supplier';
  return record.companyName || valueFor(record, isSupplier ? 'suppliers-1' : 'customers-2') || 'Unnamed record';
}

function recordEmail(record) {
  return valueFor(record, recordType(record) === 'supplier' ? 'suppliers-2' : 'customers-3');
}

function submittedDate(record) {
  const date = record.submittedAt?.toDate?.() ?? new Date(record.submittedAtLocal);
  return Number.isNaN(date.getTime()) ? 'Date unavailable' : date.toLocaleString();
}

function friendlyError(error) {
  if (error.code === 'permission-denied') {
    return 'Firestore rules are blocking public reads. Deploy the updated firestore.rules to enable this page.';
  }
  return error.message || 'Could not load customer records.';
}

function CustomerRecord({ record, onOpen }) {
  const fields = Array.isArray(record.formFields) ? record.formFields : [];
  const name = recordName(record);
  const email = recordEmail(record);

  return (
    <article className="customer-card">
      <button type="button" className="customer-card-button" onClick={() => onOpen(record)}>
        <div>
          <h2>{name}</h2>
          <p>{email || 'No email provided'}</p>
          <span className="customer-field-count">{fields.length} form fields · click to view details</span>
        </div>
        <time>{submittedDate(record)}</time>
      </button>
    </article>
  );
}

function CustomerDetails({ record, onClose }) {
  const fields = Array.isArray(record.formFields) ? record.formFields : [];
  const isSupplier = recordType(record) === 'supplier';
  const name = recordName(record);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  return (
    <div className="customer-modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section className="customer-modal" role="dialog" aria-modal="true" aria-labelledby="customer-modal-title">
        <header className="customer-modal-header">
          <div>
            <p className="records-eyebrow">{isSupplier ? 'Supplier details' : 'Customer details'}</p>
            <h2 id="customer-modal-title">{name}</h2>
            <p className="records-muted">Submitted {submittedDate(record)}</p>
          </div>
          <button type="button" className="customer-modal-close" aria-label="Close customer details" onClick={onClose}>×</button>
        </header>
        <dl className="customer-fields">
          {fields.map((field) => {
            const value = record.formValues?.[field.id] ?? field.value ?? '';
            return (
              <div className="customer-field" key={field.id}>
                <dt>{field.name}</dt>
                <dd>{String(value).trim() || '—'}</dd>
              </div>
            );
          })}
        </dl>
      </section>
    </div>
  );
}

export default function CustomerRecordsPage() {
  const [customerRecords, setCustomerRecords] = useState([]);
  const [supplierRecords, setSupplierRecords] = useState([]);
  const [activeCollection, setActiveCollection] = useState('customer');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedRecord, setSelectedRecord] = useState(null);

  async function loadRecords() {
    setLoading(true);
    setError('');
    try {
      const [customers, suppliers] = await Promise.all([getCustomerRecords(), getSupplierRecords()]);
      setCustomerRecords(customers);
      setSupplierRecords(suppliers);
    } catch (loadError) {
      setError(friendlyError(loadError));
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { void loadRecords(); }, []);

  const activeRecords = activeCollection === 'customer' ? customerRecords : supplierRecords;
  const filteredRecords = useMemo(() => {
    const needle = search.trim().toLowerCase();
    if (!needle) return activeRecords;
    return activeRecords.filter((record) => {
      const values = Object.values(record.formValues || {}).join(' ');
      const fields = (record.formFields || []).map((field) => `${field.name} ${field.value}`).join(' ');
      return `${recordName(record)} ${recordEmail(record)} ${values} ${fields}`.toLowerCase().includes(needle);
    });
  }, [activeRecords, search]);

  const recordCount = filteredRecords.length;

  return (
    <main className="records-shell">
      <header className="records-header">
        <div>
          <p className="records-eyebrow">Ardentax UAE E-Invoicing</p>
          <h1>Customer Data</h1>
          <p className="records-muted">Submitted customer and supplier onboarding forms</p>
        </div>
        <div className="records-actions">
          <button type="button" onClick={() => void loadRecords()} disabled={loading}>Refresh</button>
        </div>
      </header>

      <nav className="records-tabs" aria-label="Customer and supplier records">
        <button type="button" className={activeCollection === 'customer' ? 'active' : ''} onClick={() => setActiveCollection('customer')}>
          Customers <span>{customerRecords.length}</span>
        </button>
        <button type="button" className={activeCollection === 'supplier' ? 'active' : ''} onClick={() => setActiveCollection('supplier')}>
          Suppliers <span>{supplierRecords.length}</span>
        </button>
      </nav>

      <section className="records-toolbar">
        <label htmlFor="records-search">Search {activeCollection} details</label>
        <input id="records-search" type="search" placeholder="Search name, email, TIN, or any entered field" value={search} onChange={(event) => setSearch(event.target.value)} />
        <span>{recordCount} {recordCount === 1 ? 'record' : 'records'}</span>
      </section>

      {error && <p className="records-error records-notice" role="alert">{error}</p>}
      {loading ? <p className="records-empty">Loading {activeCollection} records…</p> : filteredRecords.length ? (
        <div className="customer-list">
          {filteredRecords.map((record) => <CustomerRecord key={record.id} record={record} onOpen={setSelectedRecord} />)}
        </div>
      ) : (
        <p className="records-empty">{activeRecords.length ? `No ${activeCollection} records match your search.` : `No ${activeCollection} forms have been submitted yet.`}</p>
      )}
      {selectedRecord && <CustomerDetails record={selectedRecord} onClose={() => setSelectedRecord(null)} />}
    </main>
  );
}
