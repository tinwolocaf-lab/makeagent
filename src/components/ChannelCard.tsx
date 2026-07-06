import type { ConversationCopy } from "../content";

export function ChannelCard({
  conversation,
  onlineLabel,
}: {
  conversation: ConversationCopy;
  onlineLabel: string;
}) {
  return (
    <article className="conversation-card">
      <div className="card-head">
        <span>{conversation.channel}</span>
        <strong>{conversation.name}</strong>
        <i aria-label={onlineLabel} />
      </div>
      <p className="bubble bubble-customer">{conversation.question}</p>
      <p className="bubble bubble-agent">{conversation.answer}</p>
    </article>
  );
}
