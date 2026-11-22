import { toastMarkup } from '../../legacy/documentParts.js';

export default function Toast() {
  return <div dangerouslySetInnerHTML={{ __html: toastMarkup }} />;
}
