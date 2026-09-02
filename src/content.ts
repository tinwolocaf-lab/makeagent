export const LOCALES = ["en", "ko", "uz"] as const;
export type Locale = (typeof LOCALES)[number];

export const LANGUAGE_NAMES: Record<Locale, string> = {
  en: "English",
  ko: "한국어",
  uz: "O‘zbekcha",
};

export type ConversationCopy = {
  channel: string;
  name: string;
  question: string;
  answer: string;
};

export type PreviewCopy = {
  prompt: string;
  answer: string;
  source: string;
};

export type RoleCopy = {
  name: string;
  kicker: string;
  title: string;
  description: string;
  tasks: readonly string[];
};

export type FAQCopy = {
  question: string;
  answer: string;
};

export type LandingCopy = {
  brand: string;
  navDemo: string;
  navHow: string;
  navFaq: string;
  navLabel: string;
  headerCta: string;
  languageLabel: string;
  themeLabel: string;
  openMenuLabel: string;
  closeMenuLabel: string;
  onlineLabel: string;
  skipLabel: string;
  eyebrow: string;
  title: readonly [string, string, string];
  lede: string;
  cta: string;
  examplesLabel: string;
  howEyebrow: string;
  howTitle: string;
  journeyNote: string;
  previewLabel: string;
  previews: readonly PreviewCopy[];
  rolesEyebrow: string;
  rolesTitle: string;
  rolesNote: string;
  rolesLabel: string;
  roles: readonly RoleCopy[];
  faqEyebrow: string;
  faqTitle: string;
  faqs: readonly FAQCopy[];
  footerNote: string;
  backToTop: string;
  steps: readonly string[];
  conversations: readonly ConversationCopy[];
};

export const COPY: Record<Locale, LandingCopy> = {
  en: {
    brand: "Make Agent Fast",
    navDemo: "Demo",
    navHow: "How it works",
    navFaq: "FAQ",
    navLabel: "Main navigation",
    headerCta: "See the product",
    languageLabel: "Interface language",
    themeLabel: "Change color theme",
    openMenuLabel: "Open navigation",
    closeMenuLabel: "Close navigation",
    onlineLabel: "Online",
    skipLabel: "Skip to main content",
    eyebrow: "Customer service, made simpler",
    title: ["ONE AGENT.", "EVERY CHANNEL.", "TALKS WITH YOUR CUSTOMERS."],
    lede: "Make Agent Fast builds your customer service agent in minutes — no code.",
    cta: "Explore the product",
    examplesLabel: "Example customer conversations",
    howEyebrow: "A simple path",
    howTitle: "From approved information to a useful conversation.",
    journeyNote: "A focused three-step path keeps the experience understandable from the first source to the final answer.",
    previewLabel: "Answer preview",
    previews: [
      {
        prompt: "What should I prepare before we begin?",
        answer: "Start with the public information your customers ask for most often.",
        source: "Collect · Approved information",
      },
      {
        prompt: "Can the answers sound like our team?",
        answer: "Yes. Test the phrasing and adjust the tone before sharing the experience.",
        source: "Shape · Voice preview",
      },
      {
        prompt: "Where will visitors find it?",
        answer: "Place a clear entry point on the customer-facing surface you choose.",
        source: "Place · Landing preview",
      },
    ],
    rolesEyebrow: "Built around the work",
    rolesTitle: "One clear experience, shaped for the conversation.",
    rolesNote: "Switch between a few common roles to see how the same landing experience can emphasize different customer needs.",
    rolesLabel: "Example agent roles",
    roles: [
      {
        name: "Support",
        kicker: "Clear and reassuring",
        title: "Help customers find the next useful answer.",
        description: "Organize approved guidance so common questions begin with a consistent response.",
        tasks: ["Explain public policies", "Point to useful guides", "Prepare a handoff summary"],
      },
      {
        name: "Sales",
        kicker: "Focused and helpful",
        title: "Turn early questions into a better introduction.",
        description: "Present the right public product context without overwhelming a first-time visitor.",
        tasks: ["Clarify available options", "Answer common fit questions", "Capture the next request"],
      },
      {
        name: "Operations",
        kicker: "Direct and organized",
        title: "Keep routine information easy to reach.",
        description: "Bring frequently requested public details into a single, approachable conversation.",
        tasks: ["Share working hours", "Explain basic processes", "Guide visitors to resources"],
      },
    ],
    faqEyebrow: "Good to know",
    faqTitle: "A focused preview, with clear boundaries.",
    faqs: [
      {
        question: "What does this public page include?",
        answer: "A working, frontend-only presentation of the Make Agent Fast landing experience and its local interface states.",
      },
      {
        question: "Does this demo connect to a live service?",
        answer: "No. Its examples, role tabs, language controls, and theme controls all run locally in the browser.",
      },
      {
        question: "Is the complete product available here?",
        answer: "No. The production platform and its proprietary systems are maintained separately.",
      },
    ],
    footerNote: "A public landing-page excerpt of Make Agent Fast.",
    backToTop: "Back to top",
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
      {
        channel: "EMAIL",
        name: "Inbox guide",
        question: "Where can I find the setup guide?",
        answer: "I can point you to the right public guide and summarize the first steps.",
      },
      {
        channel: "SOCIAL",
        name: "Community helper",
        question: "Is this available for small teams?",
        answer: "Yes. The same focused experience can begin with a compact knowledge set.",
      },
    ],
  },
  ko: {
    brand: "Make Agent Fast",
    navDemo: "데모",
    navHow: "이용 방법",
    navFaq: "자주 묻는 질문",
    navLabel: "주요 탐색",
    headerCta: "제품 보기",
    languageLabel: "인터페이스 언어",
    themeLabel: "색상 테마 변경",
    openMenuLabel: "탐색 메뉴 열기",
    closeMenuLabel: "탐색 메뉴 닫기",
    onlineLabel: "온라인",
    skipLabel: "본문으로 건너뛰기",
    eyebrow: "더 간결해진 고객 서비스",
    title: ["하나의 에이전트.", "모든 채널.", "고객과 대화합니다."],
    lede: "Make Agent Fast는 코딩 없이 몇 분 만에 고객 서비스 에이전트를 구성합니다.",
    cta: "제품 살펴보기",
    examplesLabel: "고객 대화 예시",
    howEyebrow: "간단한 과정",
    howTitle: "승인된 정보에서 유용한 대화까지.",
    journeyNote: "간결한 세 단계 과정으로 첫 자료부터 최종 답변까지 쉽게 이해할 수 있습니다.",
    previewLabel: "답변 미리보기",
    previews: [
      {
        prompt: "시작하기 전에 무엇을 준비해야 하나요?",
        answer: "고객이 가장 자주 묻는 공개 정보부터 준비해 주세요.",
        source: "수집 · 승인된 정보",
      },
      {
        prompt: "우리 팀처럼 답변하게 할 수 있나요?",
        answer: "네. 경험을 공개하기 전에 표현을 시험하고 말투를 조정할 수 있습니다.",
        source: "구성 · 말투 미리보기",
      },
      {
        prompt: "방문자는 어디에서 찾을 수 있나요?",
        answer: "선택한 고객 접점에 찾기 쉬운 진입점을 배치하세요.",
        source: "배치 · 랜딩 미리보기",
      },
    ],
    rolesEyebrow: "업무에 맞춘 구성",
    rolesTitle: "하나의 명확한 경험, 대화에 맞춘 역할.",
    rolesNote: "몇 가지 일반적인 역할을 전환하며 같은 랜딩 경험이 서로 다른 고객 요구를 어떻게 강조하는지 확인해 보세요.",
    rolesLabel: "에이전트 역할 예시",
    roles: [
      {
        name: "고객 지원",
        kicker: "명확하고 안심되는 안내",
        title: "고객이 다음으로 필요한 답을 찾도록 돕습니다.",
        description: "승인된 안내를 정리하여 자주 묻는 질문에 일관된 답변을 제공합니다.",
        tasks: ["공개 정책 설명", "유용한 안내서 연결", "담당자 전달 요약 준비"],
      },
      {
        name: "영업",
        kicker: "집중적이고 유용한 안내",
        title: "첫 질문을 더 나은 소개로 이어갑니다.",
        description: "처음 방문한 사람에게 부담을 주지 않으면서 필요한 공개 제품 정보를 보여 줍니다.",
        tasks: ["이용 가능한 선택지 설명", "적합성 관련 질문 답변", "다음 요청 접수"],
      },
      {
        name: "운영",
        kicker: "직접적이고 체계적인 안내",
        title: "일상적인 정보를 쉽게 찾게 합니다.",
        description: "자주 요청되는 공개 정보를 하나의 친근한 대화로 정리합니다.",
        tasks: ["운영 시간 안내", "기본 절차 설명", "관련 자료로 안내"],
      },
    ],
    faqEyebrow: "알아두면 좋은 점",
    faqTitle: "범위가 명확한 집중된 미리보기.",
    faqs: [
      {
        question: "이 공개 페이지에는 무엇이 포함되어 있나요?",
        answer: "Make Agent Fast 랜딩 경험과 로컬 인터페이스 상태를 보여 주는 실제 프런트엔드 전용 코드가 포함되어 있습니다.",
      },
      {
        question: "이 데모는 실제 서비스에 연결되나요?",
        answer: "아니요. 대화 예시, 역할 탭, 언어 및 테마 설정은 모두 브라우저 안에서만 작동합니다.",
      },
      {
        question: "전체 제품이 여기에 공개되어 있나요?",
        answer: "아니요. 프로덕션 플랫폼과 독점 시스템은 별도로 관리됩니다.",
      },
    ],
    footerNote: "Make Agent Fast의 공개 랜딩 페이지 일부입니다.",
    backToTop: "맨 위로",
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
      {
        channel: "이메일",
        name: "받은편지함 안내",
        question: "설정 안내서는 어디에서 찾을 수 있나요?",
        answer: "알맞은 공개 안내서를 찾고 첫 단계를 요약해 드릴 수 있습니다.",
      },
      {
        channel: "소셜",
        name: "커뮤니티 도우미",
        question: "소규모 팀도 사용할 수 있나요?",
        answer: "네. 간결한 지식 모음으로 같은 경험을 시작할 수 있습니다.",
      },
    ],
  },
  uz: {
    brand: "Make Agent Fast",
    navDemo: "Demo",
    navHow: "Qanday ishlaydi",
    navFaq: "Savol-javob",
    navLabel: "Asosiy navigatsiya",
    headerCta: "Mahsulotni ko‘rish",
    languageLabel: "Interfeys tili",
    themeLabel: "Rang mavzusini o‘zgartirish",
    openMenuLabel: "Navigatsiyani ochish",
    closeMenuLabel: "Navigatsiyani yopish",
    onlineLabel: "Onlayn",
    skipLabel: "Asosiy qismga o‘tish",
    eyebrow: "Mijozlarga xizmat ko‘rsatish — yanada sodda",
    title: ["BITTA AGENT.", "BARCHA KANALLAR.", "MIJOZLARINGIZ BILAN SUHBATLASHADI."],
    lede: "Make Agent Fast bir necha daqiqada, kod yozmasdan mijozlarga xizmat ko‘rsatish agentini yaratadi.",
    cta: "Mahsulotni ko‘rish",
    examplesLabel: "Mijozlar bilan suhbat namunalari",
    howEyebrow: "Oddiy jarayon",
    howTitle: "Tasdiqlangan ma’lumotdan foydali suhbatgacha.",
    journeyNote: "Uch bosqichli aniq yo‘l birinchi manbadan yakuniy javobgacha bo‘lgan jarayonni tushunarli qiladi.",
    previewLabel: "Javob namunasi",
    previews: [
      {
        prompt: "Boshlashdan oldin nimalarni tayyorlashim kerak?",
        answer: "Avval mijozlaringiz eng ko‘p so‘raydigan ochiq ma’lumotlarni to‘plang.",
        source: "To‘plash · Tasdiqlangan ma’lumot",
      },
      {
        prompt: "Javoblar jamoamiz uslubida bo‘lishi mumkinmi?",
        answer: "Ha. Tajribani ulashishdan oldin matnni sinab, ohangni moslashingiz mumkin.",
        source: "Shakllantirish · Ohang namunasi",
      },
      {
        prompt: "Tashrif buyuruvchilar uni qayerdan topadi?",
        answer: "Tanlagan mijozlar kanalida ko‘rinadigan kirish nuqtasini joylashtiring.",
        source: "Joylashtirish · Landing namunasi",
      },
    ],
    rolesEyebrow: "Ish jarayoniga mos",
    rolesTitle: "Bitta aniq tajriba — har bir suhbatga mos rol.",
    rolesNote: "Bir nechta odatiy rolni almashtirib, ayni landing tajribasi mijozlarning turli ehtiyojlarini qanday ajratib ko‘rsatishini ko‘ring.",
    rolesLabel: "Agent rollari namunalari",
    roles: [
      {
        name: "Yordam",
        kicker: "Aniq va xotirjam",
        title: "Mijozga keyingi foydali javobni topishga yordam bering.",
        description: "Tasdiqlangan qo‘llanmalarni tartiblab, ko‘p beriladigan savollarga izchil javob bering.",
        tasks: ["Ochiq qoidalarni tushuntirish", "Foydali qo‘llanmaga yo‘naltirish", "Mutaxassis uchun xulosa tayyorlash"],
      },
      {
        name: "Savdo",
        kicker: "Maqsadli va foydali",
        title: "Dastlabki savollarni yaxshiroq tanishuvga aylantiring.",
        description: "Yangi tashrif buyuruvchini ortiqcha ma’lumot bilan chalg‘itmasdan, kerakli ochiq mahsulot ma’lumotini ko‘rsating.",
        tasks: ["Mavjud variantlarni tushuntirish", "Moslik savollariga javob berish", "Keyingi so‘rovni yozib olish"],
      },
      {
        name: "Jarayonlar",
        kicker: "To‘g‘ridan-to‘g‘ri va tartibli",
        title: "Kundalik ma’lumotlarni oson topiladigan qiling.",
        description: "Ko‘p so‘raladigan ochiq ma’lumotlarni bitta qulay suhbatga jamlang.",
        tasks: ["Ish vaqtini ko‘rsatish", "Asosiy jarayonlarni tushuntirish", "Kerakli manbaga yo‘naltirish"],
      },
    ],
    faqEyebrow: "Bilish foydali",
    faqTitle: "Chegaralari aniq, yo‘naltirilgan namuna.",
    faqs: [
      {
        question: "Ushbu ochiq sahifada nimalar bor?",
        answer: "Make Agent Fast landing tajribasi va uning lokal interfeys holatlarini ko‘rsatadigan haqiqiy, faqat frontenddan iborat kod mavjud.",
      },
      {
        question: "Bu demo haqiqiy xizmatga ulanadimi?",
        answer: "Yo‘q. Suhbat namunalari, rol tugmalari, til va mavzu sozlamalari faqat brauzer ichida ishlaydi.",
      },
      {
        question: "To‘liq mahsulot shu yerda ochiqmi?",
        answer: "Yo‘q. Ishlab turgan platforma va uning mualliflikka tegishli tizimlari alohida saqlanadi.",
      },
    ],
    footerNote: "Make Agent Fast ochiq landing sahifasining bir qismi.",
    backToTop: "Yuqoriga qaytish",
    steps: [
      "Mijozlarga kerak bo‘ladigan ochiq ma’lumotlarni to‘plang.",
      "Ohangni belgilang va ko‘p beriladigan savollarni sinang.",
      "Tashrif buyuruvchilar oson topadigan joyga tajribani joylashtiring.",
    ],
    conversations: [
      {
        channel: "VEB",
        name: "Mahsulot yordamchisi",
        question: "Boshlashimizga yordam bera olasizmi?",
        answer: "Ha. Tasdiqlangan ma’lumotlarni ulashing, agent tashrif buyuruvchilarni yo‘naltiradi.",
      },
      {
        channel: "CHAT",
        name: "Mijozlarga yordam",
        question: "Qachon ishlaysiz?",
        answer: "Yordam vaqti dushanbadan jumagacha, 09:00–18:00.",
      },
      {
        channel: "DM",
        name: "Savdo yordamchisi",
        question: "Mutaxassis bilan gaplashsam bo‘ladimi?",
        answer: "Albatta. Jamoaga yetkazish uchun so‘rovingizni yozib olaman.",
      },
      {
        channel: "EMAIL",
        name: "Pochta yordamchisi",
        question: "Sozlash qo‘llanmasini qayerdan topsam bo‘ladi?",
        answer: "Kerakli ochiq qo‘llanmani topib, dastlabki qadamlarni qisqacha aytib beraman.",
      },
      {
        channel: "IJTIMOIY",
        name: "Hamjamiyat yordamchisi",
        question: "Bu kichik jamoalar uchun ham mosmi?",
        answer: "Ha. Xuddi shu ixcham tajribani kichik ma’lumotlar to‘plamidan boshlash mumkin.",
      },
    ],
  },
};
