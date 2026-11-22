import { detailModalMarkup, passwordModalMarkup } from '../../legacy/documentParts.js';

export default function Overlays() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: detailModalMarkup }} />
      <div dangerouslySetInnerHTML={{ __html: passwordModalMarkup }} />
    </>
  );
}
