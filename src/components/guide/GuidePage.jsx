export default function GuidePage() {
  return (
    <div id="guidePage" className="hidden space-y-5">
    
          
          <section className="grid grid-cols-2 lg:grid-cols-5 gap-3" aria-label="Summary metrics">
            <button id="kpiAll" type="button" data-kpi-status="all"
              className="text-left bg-white rounded-xl border border-slate-200 p-3.5 hover:border-blue-300 transition shadow-sm">
              <div className="text-xs font-medium text-slate-500">Total Fields</div>
              <div id="countTotal" className="text-2xl font-bold text-[#1B365D] mt-0.5">94</div>
              <div className="text-[11px] text-slate-400 mt-0.5">All 3 sections</div>
            </button>
    
            <button id="kpiMandatory" type="button" data-kpi-status="Mandatory"
              className="text-left bg-white rounded-xl border border-slate-200 p-3.5 hover:border-emerald-300 transition shadow-sm">
              <div className="text-xs font-medium text-emerald-700">Mandatory</div>
              <div id="countMandatory" className="text-2xl font-bold text-emerald-700 mt-0.5">46</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Always required</div>
            </button>
    
            <button id="kpiConditional" type="button" data-kpi-status="Conditional"
              className="text-left bg-white rounded-xl border border-slate-200 p-3.5 hover:border-amber-300 transition shadow-sm">
              <div className="text-xs font-medium text-amber-700">Conditional</div>
              <div id="countConditional" className="text-2xl font-bold text-amber-700 mt-0.5">27</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Needed in specific cases</div>
            </button>
    
            <button id="kpiOptional" type="button" data-kpi-status="Optional"
              className="text-left bg-white rounded-xl border border-slate-200 p-3.5 hover:border-slate-400 transition shadow-sm">
              <div className="text-xs font-medium text-slate-600">Optional</div>
              <div id="countOptional" className="text-2xl font-bold text-slate-700 mt-0.5">21</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Good to have</div>
            </button>
    
            <div className="col-span-2 lg:col-span-1 bg-white rounded-xl border border-slate-200 p-3.5 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500">Client Ready</span>
                <span id="readyPercent" className="text-xs font-semibold text-blue-700">0%</span>
              </div>
              <div id="countReady" className="text-xl font-bold text-slate-800 mt-0.5">0 / 94</div>
              <div className="w-full bg-slate-100 rounded-full h-1.5 mt-1.5 overflow-hidden">
                <div id="readyBar" className="bg-blue-600 h-1.5 rounded-full transition-all" style={{ width: "0%" }}></div>
              </div>
            </div>
          </section>
    
          
          <section className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3">
              <div id="moduleTabs" className="flex flex-wrap gap-1.5" role="tablist" aria-label="Module filter">
                <button type="button" data-module="all"
                  className="module-tab px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition bg-[#1B365D] text-white">
                  All Fields (94)
                </button>
                <button type="button" data-module="customers"
                  className="module-tab px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition bg-slate-100 text-slate-700 hover:bg-slate-200">
                  1. Customers (22)
                </button>
                <button type="button" data-module="suppliers"
                  className="module-tab px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition bg-slate-100 text-slate-700 hover:bg-slate-200">
                  2. Suppliers (19)
                </button>
                <button type="button" data-module="integration"
                  className="module-tab px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition bg-slate-100 text-slate-700 hover:bg-slate-200">
                  3. Accounting Software (53)
                </button>
              </div>
    
              <div className="flex flex-wrap items-center gap-2">
                <button id="btnOpenFormBanner" type="button"
                  className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition">
                  + Fill Customer / Supplier Form
                </button>
                <div className="inline-flex rounded-lg border border-slate-200 p-0.5 bg-slate-50">
                  <button id="btnViewCards" type="button"
                    className="px-3 py-1 rounded-md text-xs font-medium bg-white text-[#1B365D] shadow-sm transition">
                    Cards View
                  </button>
                  <button id="btnViewTable" type="button"
                    className="px-3 py-1 rounded-md text-xs font-medium text-slate-600 hover:text-slate-900 transition">
                    Table View
                  </button>
                </div>
              </div>
            </div>
    
            
            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <div className="relative flex-1">
                <input id="searchInput" type="text"
                  placeholder="Search field name, code (IBT-001), rule (IBR-002), or example (ABC Trading)..."
                  className="w-full pl-3.5 pr-9 py-2 rounded-lg border border-slate-300 bg-white text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                <button id="btnClearSearch" type="button" aria-label="Clear search"
                  className="hidden absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-sm font-bold px-1">
                  &times;
                </button>
              </div>
    
              <div id="statusFilters" className="flex flex-wrap items-center gap-1.5">
                <button type="button" data-status="all"
                  className="status-pill px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-white transition">
                  All Statuses
                </button>
                <button type="button" data-status="Mandatory"
                  className="status-pill px-3 py-1.5 rounded-lg text-xs font-medium bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 transition">
                  Mandatory
                </button>
                <button type="button" data-status="Conditional"
                  className="status-pill px-3 py-1.5 rounded-lg text-xs font-medium bg-amber-50 text-amber-800 border border-amber-200 hover:bg-amber-100 transition">
                  Conditional
                </button>
                <button type="button" data-status="Optional"
                  className="status-pill px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200 transition">
                  Optional
                </button>
                <button id="btnResetFilters" type="button"
                  className="px-2.5 py-1.5 rounded-lg text-xs font-medium text-blue-700 hover:bg-blue-50 transition">
                  Reset
                </button>
              </div>
            </div>
    
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 pt-1">
              <span id="resultCount">Showing 94 of 94 fields</span>
              <span>Reference examples: <strong className="text-slate-700">ABC Trading LLC</strong> (Seller) &amp; <strong className="text-slate-700">XYZ International LLC</strong> (Buyer)</span>
            </div>
          </section>
    
          
          <section id="cardsContainer" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4" aria-label="Fields cards list">
          </section>
    
          
          <section id="tableContainer" className="hidden bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden" aria-label="Fields table">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-[11px] uppercase tracking-wider text-slate-600">
                    <th className="py-3 px-3 font-semibold w-12">No.</th>
                    <th className="py-3 px-3 font-semibold min-w-[200px]">Field Name</th>
                    <th className="py-3 px-3 font-semibold w-28">Status</th>
                    <th className="py-3 px-3 font-semibold min-w-[240px]">When Needed (Condition)</th>
                    <th className="py-3 px-3 font-semibold min-w-[170px]">Example</th>
                    <th className="py-3 px-3 font-semibold min-w-[210px]">Official Links</th>
                    <th className="py-3 px-3 font-semibold w-36">Client Status</th>
                  </tr>
                </thead>
                <tbody id="tableBody" className="divide-y divide-slate-100 text-xs text-slate-700">
                </tbody>
              </table>
            </div>
          </section>
    
          
          <section id="emptyState" className="hidden bg-white rounded-xl border border-slate-200 p-10 text-center">
            <p className="text-base font-semibold text-slate-700">No matching fields found</p>
            <p className="text-sm text-slate-500 mt-1">Try a different keyword or click Reset to view all 94 fields.</p>
            <button id="btnEmptyReset" type="button"
              className="mt-4 px-4 py-2 rounded-lg bg-[#1B365D] text-white text-sm font-medium hover:bg-[#142947] transition">
              Show All Fields
            </button>
          </section>
        </div>
  );
}
