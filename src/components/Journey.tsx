import type { LandingCopy } from "../content";

export function Journey({ copy }: { copy: LandingCopy }) {
  return (
    <section className="journey" id="how">
      <div className="journey-heading">
        <div>
          <p className="eyebrow">{copy.howEyebrow}</p>
          <h2>{copy.howTitle}</h2>
        </div>
        <p>{copy.journeyNote}</p>
      </div>

      <div className="journey-layout">
        <ol className="journey-steps">
          {copy.steps.map((step, index) => (
            <li key={step}>
              <b>{String(index + 1).padStart(2, "0")}</b>
              <span>{step}</span>
            </li>
          ))}
        </ol>

        <aside className="journey-preview" aria-label={copy.previewLabel}>
          <div className="preview-bar">
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <small>{copy.previewLabel}</small>
          </div>
          <div className="preview-body">
            <p className="preview-prompt">{copy.previewPrompt}</p>
            <p className="preview-answer">{copy.previewAnswer}</p>
            <span className="preview-source">{copy.previewSource}</span>
          </div>
        </aside>
      </div>
    </section>
  );
}
