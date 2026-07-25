import { useState } from "react";
import {
  LANGUAGE_NAMES,
  LOCALES,
  type LandingCopy,
  type Locale,
} from "../content";

type HeaderProps = {
  copy: LandingCopy;
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
  onThemeChange: () => void;
  theme: "light" | "dark";
};

export function Header({
  copy,
  locale,
  onLocaleChange,
  onThemeChange,
  theme,
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label={`${copy.brand} home`}>
        <span className="brand-mark" aria-hidden="true">A</span>
        {copy.brand}
      </a>

      <button
        aria-expanded={menuOpen}
        aria-label={menuOpen ? copy.closeMenuLabel : copy.openMenuLabel}
        className="menu-toggle"
        onClick={() => setMenuOpen((open) => !open)}
        type="button"
      >
        <span aria-hidden="true">{menuOpen ? "×" : "="}</span>
      </button>

      <div className={`header-controls${menuOpen ? " is-open" : ""}`}>
        <nav aria-label={copy.navLabel}>
          <a href="#demo" onClick={() => setMenuOpen(false)}>{copy.navDemo}</a>
          <a href="#how" onClick={() => setMenuOpen(false)}>{copy.navHow}</a>
        </nav>
        <div className="locale-switcher" aria-label={copy.languageLabel}>
          {LOCALES.map((item) => (
            <button
              aria-label={LANGUAGE_NAMES[item]}
              aria-pressed={item === locale}
              key={item}
              lang={item}
              onClick={() => {
                onLocaleChange(item);
                setMenuOpen(false);
              }}
              type="button"
            >
              {item.toUpperCase()}
            </button>
          ))}
        </div>
        <button
          aria-label={copy.themeLabel}
          className="theme-toggle"
          onClick={onThemeChange}
          type="button"
        >
          <span aria-hidden="true">{theme === "light" ? "◐" : "◑"}</span>
        </button>
        <a className="header-cta" href="#demo" onClick={() => setMenuOpen(false)}>
          {copy.headerCta}
        </a>
      </div>
    </header>
  );
}
