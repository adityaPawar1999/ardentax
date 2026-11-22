import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/layout/Header.jsx';
import MainContent from './components/layout/MainContent.jsx';
import Overlays from './components/overlays/Overlays.jsx';
import Toast from './components/overlays/Toast.jsx';
import { legacyScript } from './legacy/documentParts.js';
import * as XLSX from 'xlsx';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import './firebase.js';
import { saveCustomerRecord } from './services/customerService.js';

export default function App() {
  useEffect(() => {
    // Keep the original guide's complete interactive behavior while React owns
    // the page structure and Tailwind provides the styling.
    window.XLSX = XLSX;
    window.jspdf = { jsPDF };
    window.saveCustomerRecord = saveCustomerRecord;

    if (!document.querySelector('[data-ardentax-guide-script]')) {
      const script = document.createElement('script');
      script.dataset.ardentaxGuideScript = 'true';
      // Keep the legacy page behavior available while letting route changes
      // (including browser Back/Forward) switch the active view.
      script.textContent = legacyScript.replace(
        'function setAppMode(mode) {',
        'function setAppMode(mode) { window.setArdentaxMode = setAppMode; window.setArdentaxFormRole = (role) => { state.formRole = role; state.formStep = role ? "edit" : "pick"; renderFormPage(); };'
      );
      document.body.appendChild(script);
      const path = window.location.pathname;
      window.setArdentaxMode?.(path === '/guide' ? 'guide' : 'form');
      window.setArdentaxFormRole?.(
        path === '/form/customer' ? 'customers' : path === '/form/supplier' ? 'suppliers' : null
      );
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <MainContent />
        <Overlays />
        <Toast />
      </div>
    </BrowserRouter>
  );
}
