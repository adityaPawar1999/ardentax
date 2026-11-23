export default function Overlays() {
  return (
    <>
      <div id="detailModal" className="hidden fixed inset-0 z-40 modal-backdrop flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="detailTitle">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-200 flex items-start justify-between gap-4 bg-slate-50">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span id="detailModuleBadge" className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-200 text-slate-700"></span>
                  <span id="detailStatusBadge" className="text-[11px] font-semibold px-2 py-0.5 rounded"></span>
                  <span id="detailPintCode" className="text-[11px] font-mono px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700"></span>
                </div>
                <h2 id="detailTitle" className="text-lg font-bold text-[#1B365D]"></h2>
              </div>
              <button id="btnCloseDetail" type="button" aria-label="Close details"
                className="w-8 h-8 rounded-lg text-slate-500 hover:bg-slate-200 flex items-center justify-center text-xl leading-none">
                &times;
              </button>
            </div>
      
            <div className="p-5 overflow-y-auto space-y-4 text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200">
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1">When Is It Needed?</div>
                  <p id="detailCondition" className="text-slate-800 leading-relaxed"></p>
                </div>
                <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200">
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1">Description</div>
                  <p id="detailMeaning" className="text-slate-800 leading-relaxed"></p>
                </div>
              </div>
      
              <div className="bg-blue-50 rounded-xl p-3.5 border border-blue-200 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <div className="text-xs font-semibold text-blue-800">Example</div>
                  <div id="detailExample" className="text-sm font-semibold text-blue-950 mt-0.5"></div>
                </div>
                <button id="btnCopyExample" type="button"
                  className="px-3 py-1.5 rounded-lg bg-white border border-blue-300 text-blue-800 hover:bg-blue-100 text-xs font-medium transition">
                  Copy Example
                </button>
              </div>
      
              <div id="detailDropdownSection" className="hidden bg-white rounded-xl p-3.5 border border-slate-200 space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-600">Approved Dropdown Options</span>
                  <span id="detailDropdownCount" className="text-[11px] text-slate-400"></span>
                </div>
                <select id="detailDropdownSelect" className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                </select>
              </div>
      
              <div className="space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Official Reference Links (Direct Access)</div>
                <div id="detailLinksGrid" className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                </div>
              </div>
      
              <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <label htmlFor="detailReadinessSelect" className="text-xs font-medium text-slate-600">Client Status:</label>
                  <select id="detailReadinessSelect" className="rounded-lg border border-slate-300 px-2.5 py-1.5 text-xs bg-white text-slate-800">
                    <option value="">Not Set</option>
                    <option value="Ready">Ready</option>
                    <option value="Needs Setup">Needs Setup</option>
                    <option value="Missing">Missing</option>
                    <option value="Not Needed">Not Needed</option>
                  </select>
                </div>
                <button id="btnApiDocsDetail" type="button"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#1B365D] hover:bg-[#142947] text-white text-xs font-medium transition">
                  <span>&#128274;</span>
                  <span>Open Ardentax API Docs</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      <div id="passwordModal" className="hidden fixed inset-0 z-50 modal-backdrop flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="pwModalTitle">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 max-w-md w-full overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-2">
                <span className="text-lg" aria-hidden="true">&#128274;</span>
                <h2 id="pwModalTitle" className="text-base font-bold text-[#1B365D]">Ardentax API Docs Access</h2>
              </div>
              <button id="btnClosePw" type="button" aria-label="Close password window"
                className="w-8 h-8 rounded-lg text-slate-500 hover:bg-slate-200 flex items-center justify-center text-xl leading-none">
                &times;
              </button>
            </div>
      
            <form id="pwForm" className="p-5 space-y-4">
              <p className="text-sm text-slate-600 leading-relaxed">
                The <strong>Ardentax API Docs</strong> link is password protected. Enter the password below to open the documentation page.
              </p>
              <div>
                <label htmlFor="pwInput" className="block text-xs font-semibold text-slate-700 mb-1">Password</label>
                <div className="relative">
                  <input id="pwInput" type="password" autoComplete="off" placeholder="Enter password"
                    className="w-full pl-3.5 pr-16 py-2 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                  <button id="btnTogglePw" type="button"
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-500 hover:text-slate-800 px-1.5 py-0.5">
                    Show
                  </button>
                </div>
                <p id="pwError" className="hidden text-xs font-medium text-red-600 mt-1.5">
                  Incorrect password. Please try again.
                </p>
              </div>
              <div className="flex items-center justify-end gap-2 pt-1">
                <button id="btnCancelPw" type="button"
                  className="px-3.5 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-medium transition">
                  Cancel
                </button>
                <button id="btnUnlockPw" type="submit"
                  className="px-4 py-2 rounded-lg bg-[#1B365D] hover:bg-[#142947] text-white text-xs font-semibold transition">
                  Unlock &amp; Open Docs
                </button>
              </div>
            </form>
      
            <div id="pwUnlockedView" className="hidden p-5 space-y-4">
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3.5 text-sm text-emerald-900">
                <div className="font-semibold">Access Unlocked</div>
                <p className="text-xs text-emerald-800 mt-0.5">
                  Click the button below to open the Ardentax API Docs in a new tab.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <button id="btnLockAgain" type="button"
                  className="px-3 py-2 rounded-lg border border-slate-300 text-slate-600 hover:bg-slate-50 text-xs font-medium transition">
                  Lock Again
                </button>
                <a id="apiDocsDirectLink" href="https://docs.ae.Ardentaxit.tax/docs" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#1B365D] hover:bg-[#142947] text-white text-xs font-semibold transition">
                  <span>Open Ardentax API Docs</span>
                  <span aria-hidden="true">&#8599;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
