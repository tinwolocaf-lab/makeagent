import { useState } from "react";
import { COPY, type Locale } from "./content";
import { ChannelHero } from "./components/ChannelHero";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Journey } from "./components/Journey";
import { RoleSwitcher } from "./components/RoleSwitcher";

export function App() {
  const [locale, setLocale] = useState<Locale>("en");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const copy = COPY[locale];

  return (
    <div data-theme={theme} lang={locale}>
      <a className="skip-link" href="#main-content">{copy.skipLabel}</a>
      <Header
        copy={copy}
        locale={locale}
        onLocaleChange={setLocale}
        onThemeChange={() => setTheme((current) => current === "light" ? "dark" : "light")}
        theme={theme}
      />

      <main id="main-content">
      <ChannelHero copy={copy} />

      <Journey copy={copy} />
      <RoleSwitcher copy={copy} />
      <FAQ copy={copy} />
      </main>
      <Footer copy={copy} />
    </div>
  );
}
