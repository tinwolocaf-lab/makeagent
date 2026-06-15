const conversations = [
  {
    channel: "WEB",
    name: "Product guide",
    question: "Can your team help us get started?",
    answer: "Yes. Share the approved information and the agent can guide visitors from there.",
  },
  {
    channel: "CHAT",
    name: "Customer care",
    question: "When are you available?",
    answer: "The support schedule says Monday to Friday, 09:00–18:00.",
  },
  {
    channel: "DM",
    name: "Sales assistant",
    question: "Can I speak with someone?",
    answer: "Of course. I can capture your request for the team.",
  },
];

export function App() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="AgentsFast home">
          <span className="brand-mark" aria-hidden="true">A</span>
          AgentsFast
        </a>
        <nav aria-label="Main navigation">
          <a href="#demo">Demo</a>
          <a href="#how">How it works</a>
        </nav>
        <a className="header-cta" href="#demo">See the product</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Customer conversations, handled</p>
          <h1>One agent for every customer question.</h1>
          <p className="hero-lede">
            Give one helpful agent the information your business has approved,
            then meet customers wherever they start the conversation.
          </p>
          <a className="primary-cta" href="#demo">Explore the landing demo</a>
        </div>

        <div className="conversation-grid" id="demo" aria-label="Example customer conversations">
          {conversations.map((conversation) => (
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
        <p className="eyebrow">A simple path</p>
        <h2>From approved information to a useful conversation.</h2>
        <ol>
          <li><b>01</b><span>Collect the public facts customers need.</span></li>
          <li><b>02</b><span>Shape the tone and test common questions.</span></li>
          <li><b>03</b><span>Place the experience where visitors can reach it.</span></li>
        </ol>
      </section>
    </main>
  );
}
