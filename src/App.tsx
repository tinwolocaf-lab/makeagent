import { useState } from "react";
import { COPY, LOCALES, type Locale } from "./content";
import { ChannelHero } from "./components/ChannelHero";

export function App() {
  const [locale, setLocale] = useState<Locale>("en");
  const copy = COPY[locale];

  return (
    <div lang={locale}>
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
        <a className="header-cta" href="#demo">{copy.headerCta}</a>
      </header>

      <main id="main-content">
      <ChannelHero copy={copy} />

      <section className="how" id="how">
        <p className="eyebrow">{copy.howEyebrow}</p>
        <h2>{copy.howTitle}</h2>
        <ol>
          {copy.steps.map((step, index) => (
            <li key={step}><b>{String(index + 1).padStart(2, "0")}</b><span>{step}</span></li>
          ))}
        </ol>
      </section>
      </main>
    </div>
  );
}
