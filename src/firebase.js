import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCI80gSl34yBEstieMp3YaroVA4-tpXh44',
  authDomain: 'ardentax.firebaseapp.com',
  projectId: 'ardentax',
  storageBucket: 'ardentax.firebasestorage.app',
  messagingSenderId: '898557108603',
  appId: '1:898557108603:web:2ea3d18d89c8ab0b37ddde',
  measurementId: 'G-DDJXP5ZWJ7',
};

export const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Analytics is browser-only and may be unavailable in some environments.
export const analyticsPromise = isSupported()
  .then((supported) => (supported ? getAnalytics(app) : null))
  .catch(() => null);
