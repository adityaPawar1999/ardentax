export default function OnboardingForm() {
  return (
    <div id="formPage" className="space-y-5">
    
          
          <section id="formRolePicker" className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 max-w-3xl mx-auto text-center space-y-6">
            <div className="space-y-1.5">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">Step 1 of 2</span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#1B365D]">Choose Your Form Type</h2>
              <p className="text-sm text-slate-500">
                Select whether you are filling details as a <strong>Customer</strong> or a <strong>Supplier</strong>. You can save, edit, and download your completed form in Excel, Word, or PDF format.
              </p>
            </div>
    
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <button id="btnPickCustomer" type="button"
                className="card-hover p-5 rounded-xl border-2 border-slate-200 hover:border-[#1B365D] bg-white flex flex-col justify-between gap-3">
                <div className="space-y-2">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 font-bold text-base">
                    C
                  </div>
                  <h3 className="text-base font-bold text-[#1B365D]">I am a Customer (Buyer)</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Fill your company or individual buyer details (22 fields: 8 Mandatory, 9 Conditional, 5 Optional) for Ardentax e-invoicing.
                  </p>
                </div>
                <span className="text-xs font-semibold text-[#1B365D]">Open Customer Form &rarr;</span>
              </button>
    
              <button id="btnPickSupplier" type="button"
                className="card-hover p-5 rounded-xl border-2 border-slate-200 hover:border-[#1B365D] bg-white flex flex-col justify-between gap-3">
                <div className="space-y-2">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 text-blue-700 font-bold text-base">
                    S
                  </div>
                  <h3 className="text-base font-bold text-[#1B365D]">I am a Supplier (Seller)</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Fill your supplier registration, TRN, address, and bank details (19 fields: 9 Mandatory, 7 Conditional, 3 Optional).
                  </p>
                </div>
                <span className="text-xs font-semibold text-[#1B365D]">Open Supplier Form &rarr;</span>
              </button>
            </div>
    
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
              <span>Need the Accounting Software integration checklist instead?</span>
              <button id="btnFormAccPdf" type="button"
                className="px-3.5 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-blue-800 hover:bg-blue-100 font-semibold transition">
                Download 3. Accounting Software List (PDF)
              </button>
            </div>
          </section>
    
          
          <section id="formEditor" className="hidden space-y-4">
            <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span id="formRoleBadge" className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-800"></span>
                  <span id="formMandatoryProgress" className="text-xs font-semibold text-emerald-700"></span>
                </div>
                <h2 id="formEditorTitle" className="text-lg font-bold text-[#1B365D] mt-1"></h2>
                <p className="text-xs text-slate-500">Choose from dropdowns or type your own value. Fields marked Mandatory are required.</p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <button id="btnFillSample" type="button"
                  className="px-3 py-1.5 rounded-lg border border-blue-200 bg-blue-50 text-blue-800 hover:bg-blue-100 text-xs font-medium transition">
                  Fill Example
                </button>
                <button id="btnClearForm" type="button"
                  className="px-3 py-1.5 rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 text-xs font-medium transition">
                  Clear
                </button>
                <button id="btnChangeRole" type="button"
                  className="px-3 py-1.5 rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 text-xs font-medium transition">
                  &larr; Change Type
                </button>
              </div>
            </div>
    
            <div id="formValidationBanner" className="hidden bg-red-50 border border-red-200 text-red-800 rounded-xl px-4 py-3 text-xs font-medium">
            </div>
    
            <form id="onboardingForm" className="space-y-5">
              <div id="formFieldsContainer" className="space-y-5"></div>
    
              <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs text-slate-500">
                  After saving, you can review, edit, or download your form in <strong>Excel (.xlsx)</strong>, <strong>Word (.doc)</strong>, or <strong>PDF (.pdf)</strong>.
                </p>
                <button id="btnSaveForm" type="submit"
                  className="px-5 py-2.5 rounded-lg bg-[#1B365D] hover:bg-[#142947] text-white text-sm font-semibold shadow-sm transition">
                  Save Form &amp; Continue to Download
                </button>
              </div>
            </form>
          </section>
    
          
          <section id="formSavedView" className="hidden space-y-4">
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wide text-emerald-700">Saved Successfully</div>
                <h2 id="savedFormTitle" className="text-lg font-bold text-emerald-950 mt-0.5"></h2>
                <p id="savedFormMeta" className="text-xs text-emerald-800 mt-0.5"></p>
              </div>
    
              <div className="flex flex-wrap items-center gap-2">
                <button id="btnEditSavedForm" type="button"
                  className="px-3.5 py-2 rounded-lg bg-white border border-slate-300 text-slate-800 hover:bg-slate-50 text-xs font-semibold transition">
                  Edit Form
                </button>
                <button id="btnDownloadFormExcel" type="button"
                  className="px-3.5 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold shadow-sm transition">
                  Download Excel (.xlsx)
                </button>
                <button id="btnDownloadArdentaxExcel" type="button"
                  className="px-3.5 py-2 rounded-lg bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold shadow-sm transition">
                  Download Ardentax Import Excel (.xlsx)
                </button>
                <button id="btnDownloadFormWord" type="button"
                  className="px-3.5 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold shadow-sm transition">
                  Download Word (.doc)
                </button>
                <button id="btnDownloadFormPdf" type="button"
                  className="px-3.5 py-2 rounded-lg bg-red-700 hover:bg-red-800 text-white text-xs font-semibold shadow-sm transition">
                  Download PDF (.pdf)
                </button>
                <button id="btnNewForm" type="button"
                  className="px-3 py-2 rounded-lg border border-slate-300 bg-white text-slate-600 hover:bg-slate-50 text-xs font-medium transition">
                  Switch Type
                </button>
              </div>
            </div>
    
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-4 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                <span className="text-xs font-bold text-[#1B365D]">Saved Form Summary</span>
                <span id="savedFilledCount" className="text-xs text-slate-500"></span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-[11px] uppercase tracking-wider text-slate-600">
                      <th className="py-2.5 px-3 font-semibold w-12">No.</th>
                      <th className="py-2.5 px-3 font-semibold min-w-[200px]">Field Name</th>
                      <th className="py-2.5 px-3 font-semibold w-28">Status</th>
                      <th className="py-2.5 px-3 font-semibold min-w-[240px]">Entered Value</th>
                      <th className="py-2.5 px-3 font-semibold w-28">PINT-AE</th>
                    </tr>
                  </thead>
                  <tbody id="savedTableBody" className="divide-y divide-slate-100 text-xs text-slate-700">
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
  );
}
