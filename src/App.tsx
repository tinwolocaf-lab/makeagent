import { useState } from "react";
import { COPY, LOCALES, type Locale } from "./content";

export function App() {
  const [locale, setLocale] = useState<Locale>("en");
  const copy = COPY[locale];

  return (
    <main lang={locale}>
      <header className="site-header">
        <a className="brand" href="#top" aria-label={`${copy.brand} home`}>
          <span className="brand-mark" aria-hidden="true">A</span>
          {copy.brand}
        </a>
        <nav aria-label="Main navigation">
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

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1>{copy.title.map((line) => <span key={line}>{line}</span>)}</h1>
          <p className="hero-lede">{copy.lede}</p>
          <a className="primary-cta" href="#demo">{copy.cta}</a>
        </div>

        <div className="conversation-grid" id="demo" aria-label={copy.examplesLabel}>
          {copy.conversations.map((conversation) => (
            <article className="conversation-card" key={conversation.name}>
              <div className="card-head">
                <span>{conversation.channel}</span>
                <strong>{conversation.name}</strong>
                <i aria-label="Online" />
              </div>
              <p className="bubble bubble-customer">{conversation.question}</p>
              <p className="bubble bubble-agent">{conversation.answer}</p>
            </article>
          ))}
        </div>
      </section>

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
  );
}
