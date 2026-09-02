import type { LandingCopy } from "../content";

export function FAQ({ copy }: { copy: LandingCopy }) {
  return (
    <section className="faq" id="faq">
      <div>
        <p className="eyebrow">{copy.faqEyebrow}</p>
        <h2>{copy.faqTitle}</h2>
      </div>
      <div className="faq-list">
        {copy.faqs.map((item) => (
          <details key={item.question}>
            <summary>{item.question}<span aria-hidden="true">+</span></summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
