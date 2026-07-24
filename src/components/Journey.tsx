import { useState } from "react";
import type { LandingCopy } from "../content";

export function Journey({ copy }: { copy: LandingCopy }) {
  const [activeStep, setActiveStep] = useState(0);
  const preview = copy.previews[activeStep];

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
            <li className={index === activeStep ? "is-active" : undefined} key={step}>
              <button onClick={() => setActiveStep(index)} type="button">
                <b>{String(index + 1).padStart(2, "0")}</b>
                <span>{step}</span>
              </button>
            </li>
          ))}
        </ol>

        <aside className="journey-preview" aria-label={copy.previewLabel}>
          <div className="preview-bar">
            <div aria-hidden="true" className="window-dots">
              <span />
              <span />
              <span />
            </div>
            <div aria-hidden="true" className="journey-progress">
              {copy.steps.map((step, index) => (
                <span className={index === activeStep ? "is-active" : undefined} key={step} />
              ))}
            </div>
            <small>{copy.previewLabel}</small>
          </div>
          <div className="preview-body" key={preview.prompt}>
            <p className="preview-prompt">{preview.prompt}</p>
            <p className="preview-answer">{preview.answer}</p>
            <span className="preview-source">{preview.source}</span>
          </div>
        </aside>
      </div>
    </section>
  );
}
