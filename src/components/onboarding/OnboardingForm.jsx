import { onboardingMarkup } from '../../legacy/documentParts.js';

export default function OnboardingForm() {
  return <div className="contents" dangerouslySetInnerHTML={{ __html: onboardingMarkup }} />;
}
