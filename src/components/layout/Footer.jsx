export default function Footer() {
  return (
    <footer className="bg-white rounded-xl border border-slate-200 p-4 text-xs text-slate-600 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
            <span className="font-semibold text-slate-700">Official Sources:</span>
            <a href="https://docs.peppol.eu/poac/ae/pint-ae/trn-invoice/rule/PINT-UBL-validation-preprocessed/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Peppol PINT-AE Shared Rules</a>
            <a href="https://docs.peppol.eu/poac/ae/v1.0.1/pint-ae/trn-invoice/rule/PINT-jurisdiction-aligned-rules/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Peppol PINT-AE UAE Rules</a>
            <a href="https://mof.gov.ae/wp-content/uploads/2026/10/UAE-Electronic-Invoice-Mandatory-Field-Requirements.pdf#page=7" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline">MoF Mandatory Fields PDF (V1.1)</a>
            <a href="https://mof.gov.ae/wp-content/uploads/2026/10/UAE-Electronic-Invoicing-Guidelines_En.pdf#page=1" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline">MoF Guidelines PDF (V2.0)</a>
            <a href="https://mof.gov.ae/wp-content/uploads/2025/02/UAE-eInvoicing-Public-Consultation-document.pdf#page=12" target="_blank" rel="noopener noreferrer" className="text-amber-800 hover:underline">MoF Data Dictionary PDF</a>
          </div>
          <button id="btnApiDocsFooter" type="button" className="text-[#1B365D] font-semibold hover:underline inline-flex items-center gap-1">
            <span>&#128274;</span>
            <span>Ardentax API Docs (Password Protected)</span>
          </button>
        </footer>
  );
}
