import sourceHtml from '../../ARDENTAX UAE E-INVOICING ONBOARDING FORMS & FIELDS GUIDE.html?raw';

const source = new DOMParser().parseFromString(sourceHtml, 'text/html');

function outer(selector) {
  const element = source.querySelector(selector);
  if (!element) throw new Error(`Missing source HTML section: ${selector}`);
  return element.outerHTML;
}

export const headerMarkup = outer('body > header');
const mainElement = source.querySelector('body > main');
export const mainClassName = mainElement.className;
export const guideMarkup = outer('body > main > #guidePage');
export const onboardingMarkup = outer('body > main > #formPage');
export const detailModalMarkup = outer('#detailModal');
export const passwordModalMarkup = outer('#passwordModal');
export const toastMarkup = outer('#toast');

const inlineScript = [...source.querySelectorAll('script:not([src])')].at(-1);
if (!inlineScript) throw new Error('Could not find the original guide script.');
export const legacyScript = inlineScript.textContent;
