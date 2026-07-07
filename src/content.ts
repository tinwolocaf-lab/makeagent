export const LOCALES = ["en", "ko"] as const;
export type Locale = (typeof LOCALES)[number];

export type ConversationCopy = {
  channel: string;
  name: string;
  question: string;
  answer: string;
};

export type LandingCopy = {
  brand: string;
  navDemo: string;
  navHow: string;
  navLabel: string;
  headerCta: string;
  languageLabel: string;
  onlineLabel: string;
  skipLabel: string;
  eyebrow: string;
  title: readonly [string, string, string];
  lede: string;
  cta: string;
  examplesLabel: string;
  howEyebrow: string;
  howTitle: string;
  steps: readonly string[];
  conversations: readonly ConversationCopy[];
};

export const COPY: Record<Locale, LandingCopy> = {
  en: {
    brand: "Make Agent Fast",
    navDemo: "Demo",
    navHow: "How it works",
    navLabel: "Main navigation",
    headerCta: "See the product",
    languageLabel: "Interface language",
    onlineLabel: "Online",
    skipLabel: "Skip to main content",
    eyebrow: "Customer conversations, handled",
    title: ["One agent.", "Every channel.", "Ready for customers."],
    lede:
      "Give one helpful agent the information your business has approved, then meet customers wherever they start the conversation.",
    cta: "Explore the landing demo",
    examplesLabel: "Example customer conversations",
    howEyebrow: "A simple path",
    howTitle: "From approved information to a useful conversation.",
    steps: [
      "Collect the public facts customers need.",
      "Shape the tone and test common questions.",
      "Place the experience where visitors can reach it.",
    ],
    conversations: [
      {
        channel: "WEB",
        name: "Product guide",
        question: "Can your team help us get started?",
        answer:
          "Yes. Share the approved information and the agent can guide visitors from there.",
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
    ],
  },
  ko: {
    brand: "Make Agent Fast",
    navDemo: "데모",
    navHow: "이용 방법",
    navLabel: "주요 탐색",
    headerCta: "제품 보기",
    languageLabel: "인터페이스 언어",
    onlineLabel: "온라인",
    skipLabel: "본문으로 건너뛰기",
    eyebrow: "고객 대화를 더 빠르게",
    title: ["하나의 에이전트.", "모든 채널.", "고객을 위한 준비."],
    lede:
      "회사가 승인한 정보를 하나의 유용한 에이전트에 제공하고, 고객이 대화를 시작하는 모든 곳에서 만나 보세요.",
    cta: "랜딩 데모 살펴보기",
    examplesLabel: "고객 대화 예시",
    howEyebrow: "간단한 과정",
    howTitle: "승인된 정보에서 유용한 대화까지.",
    steps: [
      "고객에게 필요한 공개 정보를 모읍니다.",
      "말투를 정하고 자주 묻는 질문을 시험합니다.",
      "방문자가 찾기 쉬운 곳에 경험을 배치합니다.",
    ],
    conversations: [
      {
        channel: "웹",
        name: "제품 안내",
        question: "시작하는 것을 도와줄 수 있나요?",
        answer: "네. 승인된 정보를 바탕으로 방문자를 안내할 수 있습니다.",
      },
      {
        channel: "채팅",
        name: "고객 지원",
        question: "언제 이용할 수 있나요?",
        answer: "지원 시간은 월요일부터 금요일, 09:00–18:00입니다.",
      },
      {
        channel: "DM",
        name: "영업 안내",
        question: "담당자와 이야기할 수 있나요?",
        answer: "물론입니다. 팀에 전달할 요청을 남길 수 있습니다.",
      },
    ],
  },
};
