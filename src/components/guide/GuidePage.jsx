import { guideMarkup } from '../../legacy/documentParts.js';

export default function GuidePage() {
  return <div className="contents" dangerouslySetInnerHTML={{ __html: guideMarkup }} />;
}
