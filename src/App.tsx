import { useState } from "react";
import { COPY, LOCALES, type Locale } from "./content";
import { ChannelHero } from "./components/ChannelHero";
import { Journey } from "./components/Journey";

export function App() {
  const [locale, setLocale] = useState<Locale>("en");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const copy = COPY[locale];

  return (
    <div data-theme={theme} lang={locale}>
      <a className="skip-link" href="#main-content">{copy.skipLabel}</a>
      <header className="site-header">
        <a className="brand" href="#top" aria-label={`${copy.brand} home`}>
          <span className="brand-mark" aria-hidden="true">A</span>
          {copy.brand}
        </a>
        <nav aria-label={copy.navLabel}>
          <a href="#demo">{copy.navDemo}</a>
          <a href="#how">{copy.navHow}</a>
        </nav>
        <div className="locale-switcher" aria-label={copy.languageLabel}>
          {LOCALES.map((item) => (
            <button
              aria-label={item === "en" ? "English" : "한국어"}
              aria-pressed={item === locale}
              key={item}
              lang={item}
              onClick={() => setLocale(item)}
              type="button"
            >
              {item.toUpperCase()}
            </button>
          ))}
        </div>
        <button
          aria-label={copy.themeLabel}
          className="theme-toggle"
          onClick={() => setTheme((current) => current === "light" ? "dark" : "light")}
          type="button"
        >
          <span aria-hidden="true">{theme === "light" ? "◐" : "◑"}</span>
        </button>
        <a className="header-cta" href="#demo">{copy.headerCta}</a>
      </header>

      <main id="main-content">
      <ChannelHero copy={copy} />

      <Journey copy={copy} />
      </main>
    </div>
  );
}
