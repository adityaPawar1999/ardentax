import { Link, NavLink } from 'react-router-dom';

const modeButtonClass = ({ isActive }) =>
  `px-3 py-1.5 rounded-md text-xs font-semibold transition ${
    isActive
      ? 'bg-white text-[#1B365D] shadow-sm'
      : 'text-slate-600 hover:text-slate-900'
  }`;

export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#1B365D] text-white font-bold text-sm flex items-center justify-center tracking-tight shadow-sm">
            AT
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-bold text-[#1B365D] leading-tight">
              Ardentax UAE E-Invoicing — Fields Guide
            </h1>
            <p className="text-xs text-slate-500">
              UAE E-Invoicing Onboarding Form &amp; Fields Reference
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <nav aria-label="Main navigation" className="inline-flex rounded-lg border border-slate-200 p-0.5 bg-slate-100">
            <NavLink id="btnModeForm" to="/form" className={modeButtonClass}>
              Fill Onboarding Form
            </NavLink>
            <NavLink id="btnModeGuide" to="/guide" className={modeButtonClass}>
              Fields Guide (94)
            </NavLink>
          </nav>

          <NavLink to="/customer-data" className={({ isActive }) => `px-3 py-1.5 rounded-lg border text-xs font-medium transition ${isActive ? 'border-blue-200 bg-blue-50 text-blue-800' : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'}`}>
            Dashboard
          </NavLink>
          <Link to="/form" className="px-3 py-1.5 rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 text-xs font-semibold transition">
            Switch Type
          </Link>

          <button id="btnDownloadAccPdf" type="button" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-blue-200 bg-blue-50 text-blue-800 hover:bg-blue-100 text-xs font-semibold transition">
            Accounting Software PDF
          </button>
          <button id="btnExportCsv" type="button" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 text-xs font-medium transition">
            Export CSV
          </button>
          <button id="btnApiDocsHeader" type="button" className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#1B365D] hover:bg-[#142947] text-white text-xs font-medium shadow-sm transition">
            <span id="apiLockIconHeader" aria-hidden="true">🔒</span>
            Ardentax API Docs
          </button>
        </div>
      </div>
    </header>
  );
}
