import type { LandingCopy } from "../content";
import { Logo } from "./Logo";

export function Footer({ copy }: { copy: LandingCopy }) {
  return (
    <footer className="site-footer">
      <a className="brand" href="#top" aria-label={copy.homeLabel}>
        <Logo label={copy.brand} />
      </a>
      <p>{copy.footerNote}</p>
      <a href="#top">{copy.backToTop}</a>
    </footer>
  );
}
