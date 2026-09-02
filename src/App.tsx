import { Component, useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type Theme = "light" | "dark";
type Billing = "monthly" | "annual";

const BACKEND_MESSAGE = "The backend must be connected before this part of the application can open.";

class PreviewErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null; resetKey: number }> {
  state = { error: null as Error | null, resetKey: 0 };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  reset = () => this.setState(state => ({ error: null, resetKey: state.resetKey + 1 }));

  render() {
    if (this.state.error) {
      return <main className="error-boundary" role="alert">
        <section className="error-panel">
          <Brand />
          <span className="error-label">Public application preview</span>
          <h1>Backend connection required.</h1>
          <p>This repository contains the real landing-page frontend, but the proprietary application services are intentionally not included. Connect the backend to use this action.</p>
          <div className="error-details"><b>{this.state.error.name}</b><code>{this.state.error.message}</code></div>
          <button className="button button-dark" onClick={this.reset}>Return to the landing page</button>
        </section>
      </main>;
    }
    return <div key={this.state.resetKey}>{this.props.children}</div>;
  }
}

function BackendFailure({ action }: { action: string | null }) {
  if (!action) return null;
  const error = new Error(`${action}: ${BACKEND_MESSAGE}`);
  error.name = "BackendConnectionError";
  throw error;
}

const channels = [
  { id: "whatsapp", label: "Brightsmile Dental", status: "typing…", placeholder: "Message", exchanges: [
    ["Anything free this Saturday morning?", "10:30 and 15:00 are open. Shall I take the 10:30 for you?", "Booked · Sat 10:30"],
    ["Is whitening covered by insurance?", "Most plans cover 60%. Send a photo of your card and I’ll check.", ""],
    ["Where can I park?", "Two levels under the building — free for the first two hours.", "Answered from your FAQ"],
  ] },
  { id: "telegram", label: "Nordic Supply", status: "online", placeholder: "Message", exchanges: [
    ["Where is order 4120?", "Out for delivery — it should reach you before 18:00 today.", "Tracking sent"],
    ["Can I change the delivery address?", "Updated to 12 Yeoksam-ro. Same courier, same day.", "Order updated · 12:41"],
    ["The zip on my jacket broke.", "Sorry about that. Return label sent — a new one ships tomorrow.", "Return opened · #8842"],
  ] },
  { id: "discord", label: "# 👋 introductions", status: "26+ new messages", placeholder: "Message #support", exchanges: [
    ["My API key stopped working after the update.", "Keys rotated in v3. I’ve issued a new one — check your email.", "Ticket #4821 · resolved"],
    ["Build fails with ‘module not found’ on Windows.", "Known in 3.2.1. Upgrade to 3.2.2 or pin the loader path.", "Answered from your changelog"],
    ["Is there a self-hosted plan for our guild?", "Yes — Scale includes it. Want me to open a sales thread?", "Handed to a human"],
  ] },
  { id: "widget", label: "Make Agent Fast", status: "Online", placeholder: "Ask anything…", exchanges: [
    ["What’s included in the Pro plan?", "3,000 credits, live voice and every channel — $35 a month.", "Answered from your pricing page"],
    ["Can it answer in several languages?", "Yes — pick up to four languages and it replies in each one.", ""],
    ["How long does setup take?", "Paste your URL, we read the site, you approve. Ten minutes.", "Lead captured"],
  ] },
  { id: "kakao", label: "Hangang Realty", status: "Online", placeholder: "Message", exchanges: [
    ["Is the Mapo apartment still available?", "It is. Viewings Friday 14:00 or Saturday 11:00 — which suits?", "Viewing booked · Fri 14:00"],
    ["What’s the deposit on the officetel?", "50 million won deposit, 900,000 a month, fees included.", ""],
    ["Anything near a subway station?", "Three units five minutes from Hongdae. Sending photos now.", "3 listings sent"],
  ] },
  { id: "instagram", label: "studio.lumen", status: "Active now", placeholder: "Message…", exchanges: [
    ["How much for a one-hour studio session?", "$120 an hour, lighting included. Want this week’s openings?", "Lead captured"],
    ["Do you ship prints internationally?", "We do — tracked, 5–7 days worldwide. Shall I quote yours?", ""],
    ["Can I move Friday’s shoot?", "Moved to Tuesday 14:00. Your deposit carries over.", "Rescheduled · Tue 14:00"],
  ] },
  { id: "messenger", label: "Table Nine", status: "Active now", placeholder: "Aa", exchanges: [
    ["Any table for four tonight?", "19:45 is free. Want me to hold it under your name?", "Table held · 19:45"],
    ["Do you have vegan courses?", "A full three-course vegan menu — I’ll note it on your booking.", ""],
    ["Are you open on the holiday Monday?", "Yes, 10:00–18:00. The kitchen closes an hour earlier that day.", "Answered from your hours"],
  ] },
] as const;

const roles = [
  {
    id: "general", label: "General", icon: "◇", title: "General assistant",
    description: "Answers from your approved knowledge, captures customer requests, and hands the conversation to you the moment someone asks for a person.",
    threads: [["WEB", "Jamie P.", "What services do you offer?", "6 messages", "10:41 AM"], ["WEB", "Alex R.", "Where can I find your policy?", "4 messages", "10:32 AM"], ["TELEGRAM", "Taylor M.", "Can someone contact me?", "3 messages", "10:21 AM"]],
    visitor: "What services do you offer?", answer: "We help teams turn approved company knowledge into a customer-facing agent.", action: "Start a general trial",
  },
  {
    id: "sales", label: "Sales", icon: "↗", title: "Sales assistant",
    description: "Qualifies interest, answers product questions, and captures a clear request for the team to follow up.",
    threads: [["WEB", "Alex R.", "Which plan fits a small team?", "8 messages", "10:43 AM"], ["WHATSAPP", "Taylor M.", "Can we use our own content?", "5 messages", "10:29 AM"], ["WEB", "Jamie P.", "Could someone show me around?", "3 messages", "10:12 AM"]],
    visitor: "Which plan fits a small team?", answer: "Launch is the simplest place to begin with one customer-facing agent.", action: "Start a sales trial",
  },
  {
    id: "service", label: "Service", icon: "◉", title: "Service assistant",
    description: "Resolves routine questions, keeps the answer grounded, and makes a human handoff easy when judgment is needed.",
    threads: [["WEB", "Taylor M.", "Can I change my delivery day?", "7 messages", "10:38 AM"], ["KAKAO", "Jamie P.", "I need help with an order", "4 messages", "10:24 AM"], ["VOICE", "Alex R.", "Could I speak with a person?", "2 messages", "10:08 AM"]],
    visitor: "Can I change my delivery day?", answer: "I can collect the details and hand this to the service team with context.", action: "Start a service trial",
  },
  {
    id: "booking", label: "Booking", icon: "▦", title: "Booking assistant",
    description: "Answers availability questions, offers useful time slots, and keeps the booking conversation moving.",
    threads: [["WEB", "Alex R.", "Anything free on Friday?", "5 messages", "10:35 AM"], ["TELEGRAM", "Jamie P.", "Can I book for two people?", "3 messages", "10:20 AM"], ["VOICE", "Taylor M.", "What times are open?", "2 messages", "10:04 AM"]],
    visitor: "Anything free on Friday?", answer: "There are openings at 10:30, 15:00, and 16:30. Which one works?", action: "Start a booking trial",
  },
] as const;

const plans = [
  { name: "Launch", monthly: 15, annual: 12, annualTotal: 144, why: "Ship a working embed agent this week.", features: ["≈ 6,250 grounded answers a month", "1 customer-facing agent", "About 1000 AI credits each month", "Text chat, voice messages, and a basic widget", "Embed on the website you already have"], cta: "Start 7-day trial", note: "No card · cancel anytime before day 7.", featured: false },
  { name: "Operate", monthly: 35, annual: 28, annualTotal: 336, why: "Live voice, a fuller widget, and messaging channels once customers are actually talking.", features: ["≈ 18,750 grounded answers a month", "Live voice — customers can talk, not just type", "About 3000 AI credits · up to 3 agents", "Custom widget label, presets, and 2 languages", "Messaging channels and a removable badge"], cta: "Start 7-day trial", note: "No card · cancel anytime before day 7.", featured: true },
  { name: "Scale", monthly: 79, annual: 63, annualTotal: 758, why: "Every customization, team access, and your own provider keys for a multi-agent operation.", features: ["≈ 50,000 grounded answers a month", "Unlimited customer-facing agents (fair use)", "Every widget control and all 4 languages", "Team roles and your own API keys", "Live voice 90 minutes · multiple clones"], cta: "Plan a Scale rollout", note: "Talk to us — we set it up with you.", featured: false },
] as const;

const faqs = [
  ["Is this just another chatbot?", "No. A chatbot recites; this agent does the job you assign — sales, customer service, booking, or general help. It answers only from the knowledge you approve and takes only the actions you switch on."],
  ["How fast can we go live?", "Paste your website URL and the product drafts an agent from your pages. Talk to the draft, choose what it may do, and approve it when it sounds like you."],
  ["Where does the agent work?", "On your website as a chat widget, and in the messaging apps your customers already use — Telegram, WhatsApp, Messenger, Instagram, Discord, and KakaoTalk."],
  ["What is the difference between Launch, Operate, and Scale?", "Launch begins with one agent. Operate adds live voice and messaging channels. Scale adds unlimited agents, team roles, and your own provider keys."],
  ["Is the trial actually free?", "Yes. Launch and Operate start with seven days and no card. This public frontend only demonstrates that flow; its backend is intentionally disconnected."],
  ["What happens when the agent does not know?", "It does not invent an answer. It can capture the request and hand the conversation to a person with the context it already has."],
  ["What happens when we hit the credit limit?", "The agent pauses instead of surprising you with a bill, and the owner receives threshold alerts."],
  ["Is customer data safe?", "Answers stay inside the knowledge you approve. Owners can export or erase captured customer data in the full product."],
  ["How do you prove the agent helped?", "With raw counts against a baseline: questions, grounded answers, captured requests, and handoffs."],
] as const;

function Brand() {
  return <span className="brand"><img src="/icon.svg" alt="" /><strong>Make Agent <em>Fast</em></strong></span>;
}

function ChannelMock({ channel }: { channel: typeof channels[number] }) {
  return (
    <article className={`channel-mock channel-${channel.id}`} data-channel={channel.id}>
      <header><i className="back">‹</i><span className="channel-avatar">{channel.id === "discord" ? "#" : channel.label.charAt(0)}</span><span><b>{channel.label}</b><small>{channel.status}</small></span><i>⌕</i><i>⋮</i></header>
      <div className="mock-pattern" />
      <div className="mock-chat">{channel.exchanges.map(([ask, reply, meta], index) => <div className="mock-exchange" key={ask}><p className="mock-ask">{ask}<time>12:{41 + index}</time></p><p className="mock-reply">{reply}<time>12:{41 + index}</time></p>{meta && <span className="mock-meta">● {meta}</span>}</div>)}</div>
      <footer><span>＋</span><span>{channel.placeholder}</span><span>{channel.id === "widget" ? "↑" : "◉"}</span></footer>
    </article>
  );
}

function AppHeader({ theme, onTheme, onBackend }: { theme: Theme; onTheme: () => void; onBackend: (label: string) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [locale, setLocale] = useState("EN");
  return (
    <header className="topbar"><div className="topbar-inner">
      <a href="#top" aria-label="Make Agent Fast home"><Brand /></a>
      <button className="mobile-menu" aria-expanded={menuOpen} aria-label="Toggle menu" onClick={() => setMenuOpen(v => !v)}><span /><span /><span /></button>
      <nav className={menuOpen ? "is-open" : ""} aria-label="Menu">
        <div className="nav-links">
          <a href="#roles" onClick={() => setMenuOpen(false)}>Agent roles</a>
          <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
          <button className="nav-link" onClick={() => { setMenuOpen(false); onBackend("Security"); }}>Security</button>
        </div>
        <div className="nav-actions">
          <button className="login-link" onClick={() => { setMenuOpen(false); onBackend("Log in"); }}>Log in</button>
          <button className="round-control" aria-label="Toggle light or dark theme" aria-pressed={theme === "dark"} onClick={onTheme}>{theme === "light" ? "☼" : "☾"}</button>
          <label className="locale-control"><span className="sr-only">Language</span><select aria-label="Language" value={locale} onChange={e => setLocale(e.target.value)}><option>EN</option><option>KO</option><option>UZ</option></select></label>
        </div>
        <button className="button button-dark" onClick={() => { setMenuOpen(false); onBackend("Start free trial"); }}>Start free trial</button>
      </nav>
    </div></header>
  );
}

function Hero({ onBackend }: { onBackend: (label: string) => void }) {
  const root = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const element = root.current;
      if (!element) return;
      const rect = element.getBoundingClientRect();
      const travel = rect.height - window.innerHeight;
      setProgress(travel > 0 ? Math.min(1, Math.max(0, -rect.top / travel)) : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const converge = Math.min(1, Math.max(0, (progress - .42) / .34));
  const copyExit = Math.min(1, Math.max(0, (progress - .42) / .2));
  const showcase = Math.min(1, Math.max(0, (progress - .62) / .2));
  const formReveal = Math.min(1, Math.max(0, (progress - .78) / .18));
  const vars = { "--c": converge, "--f": copyExit, "--x": showcase, "--t3": formReveal } as CSSProperties;

  return (
    <section className="hero" id="top" aria-labelledby="hero-title" ref={root} style={vars}>
      <div className="hero-sticky">
        <div className="hero-cards" aria-hidden="true">{channels.map(channel => <ChannelMock channel={channel} key={channel.id} />)}</div>
        <div className="hero-vignette" />
        <div className="hero-copy">
          <h1 id="hero-title"><span>ONE AGENT.</span><span>EVERY CHANNEL.</span><span>TALKS WITH YOUR CUSTOMERS.</span></h1>
          <p>Make Agent Fast builds your customer service<br />agent in minutes — no code.</p>
          <button className="button button-dark hero-button" onClick={() => onBackend("Build your agent")}><b>Build your agent</b><small>No account needed →</small></button>
        </div>
        <div className="hero-showcase" aria-hidden={showcase < .45} style={{ pointerEvents: showcase > .7 ? "auto" : "none" }}>
          <div className="showcase-canvas">
            <div className="showcase-rings" />
            <div className="source-panel">
              <header><b>Knowledge</b><span>Answers stay inside these</span></header>
              <div><span>◎</span><p><b>northstarcoffee.com</b><small>12 pages</small></p><em>URL</em></div>
              <div><span>▤</span><p><b>Menu &amp; pricing.pdf</b><small>1.2 MB</small></p><em>File</em></div>
              <div><span>T</span><p><b>Support FAQ</b><small>24 answers</small></p><em>Text</em></div>
              <button className="add-source" onClick={() => onBackend("Add source")}>＋ Add source</button>
              <button className="reel-cta" onClick={() => onBackend("Create your agent now")}>Create your agent now&nbsp;&nbsp; →</button>
            </div>
          </div>
          <h2>EVERY CONVERSATION</h2>
          <form className="showcase-form" onSubmit={event => { event.preventDefault(); onBackend("Build your agent"); }}>
            <label className="sr-only" htmlFor="website-url">Your website URL</label>
            <input id="website-url" type="url" placeholder="https://your-website.com" />
            <button className="button button-violet" type="submit">Build your agent&nbsp; →</button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Voice({ onBackend }: { onBackend: (label: string) => void }) {
  return <section className="section voice-section" id="voice"><h2>Answers by text and voice.</h2><div className="voice-card"><div className="voice-orb"><span /><span /><span /><span /><span /></div><div><b>Voice notes on every plan</b><p>Live calls on Operate and Scale</p><small>The mic on the widget is the real product — not a video.</small></div></div><button className="button button-light voice-button" onClick={() => onBackend("Try voice")}>⌕&nbsp;&nbsp; Try voice</button></section>;
}

function RoleSection({ onBackend }: { onBackend: (label: string) => void }) {
  const [active, setActive] = useState(0); const role = roles[active];
  return <section className="section roles-section" id="roles"><h2>One platform. Four jobs.</h2><div className="role-tabs" role="tablist" aria-label="Choose an agent role">{roles.map((item, index) => <button key={item.id} role="tab" aria-selected={index === active} onClick={() => setActive(index)}><span>{item.icon}</span>{item.label}</button>)}</div><div className="role-stage" role="tabpanel" aria-label={role.label} key={role.id}><aside><h3>{role.title}</h3><p>{role.description}</p><ol><li className="active"><i>1</i>Ask</li><li><i>2</i>Answer</li><li><i>3</i>Capture</li></ol></aside><div className="product-window"><header><Brand /><span className="published"><i />Published</span></header><div className="product-grid"><div className="thread-list"><h4>Conversations</h4>{role.threads.map((thread, index) => <article className={index === 0 ? "selected" : ""} key={thread[1]}><div><span>{thread[0]}</span><b>{thread[1]}</b></div><p>{thread[2]}</p><small>{thread[3]} <time>{thread[4]}</time></small></article>)}</div><div className="thread-detail"><h4>Conversation</h4><div className="thread-person"><span>WEB</span><b>{role.threads[0][1]}</b></div><small>Visitor</small><p className="visitor-message">{role.visitor}</p><small>Agent</small><p className="agent-message">{role.answer}</p><button className="button button-dark" onClick={() => onBackend(role.action)}>{role.action}</button></div></div></div></div></section>;
}

function Trust({ onBackend }: { onBackend: (label: string) => void }) {
  const items = [["♢", "Security controls", "See how access and data are protected."], ["♧", "Human boundaries", "Agents know what they cannot confirm."], ["♙", "Data deletion", "Export or erase captured customer data."]] as const;
  return <section className="trust-strip">{items.map(item => <button key={item[1]} onClick={() => onBackend(item[1])}><i>{item[0]}</i><span><b>{item[1]}</b><small>{item[2]}</small></span><em>›</em></button>)}</section>;
}

function Pricing({ onBackend }: { onBackend: (label: string) => void }) {
  const [billing, setBilling] = useState<Billing>("annual");
  return <section className="section pricing-section" id="pricing"><h2>Start small. Expand after it proves useful.</h2><div className="billing-switch" role="radiogroup" aria-label="Billing period"><button role="radio" aria-checked={billing === "monthly"} onClick={() => setBilling("monthly")}>Monthly</button><button role="radio" aria-checked={billing === "annual"} onClick={() => setBilling("annual")}>Annually <small>Save 20%</small></button></div><div className="plan-grid">{plans.map(plan => <article className={plan.featured ? "plan featured" : "plan"} key={plan.name}>{plan.featured && <span className="popular">Most companies choose Operate</span>}<h3>{plan.name}</h3><div className="price"><b>${billing === "annual" ? plan.annual : plan.monthly}</b><span>/month</span></div><small>{billing === "annual" ? `$${plan.annualTotal}/year · billed annually · Save 20%` : "Billed monthly"}</small><p>{plan.why}</p><ul>{plan.features.map(feature => <li key={feature}><i>✓</i>{feature}</li>)}</ul><button className={plan.featured ? "button button-violet" : "button button-outline"} onClick={() => onBackend(plan.cta)}>{plan.cta}</button><small>{plan.note}</small></article>)}</div><button className="text-action" onClick={() => onBackend("See what credits buy")}>See what credits buy&nbsp; →</button></section>;
}

function FAQ() {
  const [open, setOpen] = useState(0);
  return <section className="section faq-section" id="faq"><h2>Before you start.</h2><div className="faq-list">{faqs.map(([question, answer], index) => <article key={question}><button aria-expanded={open === index} onClick={() => setOpen(open === index ? -1 : index)}>{question}<span>{open === index ? "×" : "+"}</span></button><div className={open === index ? "faq-answer is-open" : "faq-answer"}><p>{answer}</p></div></article>)}</div></section>;
}

function Footer({ onBackend }: { onBackend: (label: string) => void }) {
  const product = ["How it works", "Agent roles", "Pricing", "FAQ", "Security"]; const explore = ["Integrations", "Use cases", "Comparisons", "Partners", "Docs", "Changelog", "Blog"];
  return <><section className="closing"><div><h2>Start with one customer journey.</h2><p>Choose one role, one channel, and one result to measure.</p></div><div><button className="button button-dark" onClick={() => onBackend("Start free trial")}>Start free trial</button><button className="button button-light" onClick={() => onBackend("Try the agent")}>Try the agent</button></div></section><footer className="footer"><div><Brand /><p>Make Agent Fast — customer-facing AI agents for companies.</p></div><div><nav>{product.map(item => <button key={item} onClick={() => item === "Agent roles" ? location.hash = "roles" : item === "Pricing" ? location.hash = "pricing" : item === "FAQ" ? location.hash = "faq" : onBackend(item)}>{item}</button>)}</nav><nav>{explore.map(item => <button key={item} onClick={() => onBackend(item)}>{item}</button>)}</nav></div><div className="legal"><nav>{["Log in", "Privacy", "Terms", "DPA"].map(item => <button key={item} onClick={() => onBackend(item)}>{item}</button>)}</nav><p>© 2026 Make Agent Fast</p></div></footer></>;
}

function LandingPage() {
  const [theme, setTheme] = useState<Theme>("light"); const [backendAction, setBackendAction] = useState<string | null>(null); const [welcome, setWelcome] = useState(true);
  const backend = (label: string) => setBackendAction(label);
  return <div className="app" data-theme={theme}><BackendFailure action={backendAction} /><AppHeader theme={theme} onTheme={() => setTheme(t => t === "light" ? "dark" : "light")} onBackend={backend} /><main><Hero onBackend={backend} /><Voice onBackend={backend} /><RoleSection onBackend={backend} /><Trust onBackend={backend} /><Pricing onBackend={backend} /><FAQ /><Footer onBackend={backend} /></main>{welcome && <div className="welcome-bubble"><button aria-label="Dismiss greeting" onClick={() => setWelcome(false)}>×</button><p>Hey 👋 Ask me anything about<br />MakeAgent Fast.</p></div>}<button className="chat-launcher" aria-label="Try the agent" onClick={() => backend("Try the agent")}><span className="chat-icon" /></button></div>;
}

export function App() {
  return <PreviewErrorBoundary><LandingPage /></PreviewErrorBoundary>;
}
