import type { LandingCopy } from "../content";
import { ChannelCard } from "./ChannelCard";

export function ChannelHero({ copy }: { copy: LandingCopy }) {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h1>{copy.title.map((line) => <span key={line}>{line}</span>)}</h1>
        <p className="hero-lede">{copy.lede}</p>
        <a className="primary-cta" href="#demo">{copy.cta}</a>
      </div>

      <div className="conversation-grid" id="demo" aria-label={copy.examplesLabel}>
        {copy.conversations.map((conversation) => (
          <ChannelCard
            conversation={conversation}
            key={conversation.name}
            onlineLabel={copy.onlineLabel}
          />
        ))}
      </div>
    </section>
  );
}
