import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { mainClassName } from '../../legacy/documentParts.js';
import GuidePage from '../guide/GuidePage.jsx';
import OnboardingForm from '../onboarding/OnboardingForm.jsx';
import CustomerDataPage from '../customerData/CustomerDataPage.jsx';

function SyncAppMode({ mode, role = null }) {
  useEffect(() => {
    window.setArdentaxMode?.(mode);
    window.setArdentaxFormRole?.(role);
  }, [mode, role]);

  return null;
}

export default function MainContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const isCustomerData = location.pathname === '/customer-data';

  useEffect(() => {
    // The legacy form banner remains in the guide markup. Route its action
    // through React Router so it creates a browser history entry as well.
    const handleBannerNavigation = (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      if (target.closest('#btnOpenFormBanner, #btnChangeRole, #btnNewForm')) {
        navigate('/form');
      } else if (target.closest('#btnPickCustomer')) {
        navigate('/form/customer');
      } else if (target.closest('#btnPickSupplier')) {
        navigate('/form/supplier');
      }
    };

    document.addEventListener('click', handleBannerNavigation, true);
    return () => document.removeEventListener('click', handleBannerNavigation, true);
  }, [navigate]);

  return (
    <>
      <div className={isCustomerData ? 'hidden' : ''}>
        <main className={mainClassName}>
          {/* Keep both views mounted because the guide's existing form and field
              logic updates elements in both views. React Router controls which
              one is visible and records each navigation in browser history. */}
          <GuidePage />
          <OnboardingForm />
        </main>
      </div>
      {isCustomerData && <CustomerDataPage />}
      <Routes>
        <Route path="/form" element={<SyncAppMode mode="form" />} />
        <Route path="/form/customer" element={<SyncAppMode mode="form" role="customers" />} />
        <Route path="/form/supplier" element={<SyncAppMode mode="form" role="suppliers" />} />
        <Route path="/guide" element={<SyncAppMode mode="guide" />} />
        <Route path="/customer-data" element={<SyncAppMode mode="form" />} />
        <Route path="/" element={<Navigate to="/form" replace />} />
        <Route path="*" element={<Navigate to="/form" replace />} />
      </Routes>
    </>
  );
}
