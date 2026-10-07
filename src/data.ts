export const PRACTICE = {
  name: "Dr. Maya Reynolds, PsyD",
  shortName: "Dr. Maya Reynolds",
  title: "Licensed Clinical Psychologist",
  address: "123th Street 45 W, Santa Monica, CA 90401",
  addressLine1: "123th Street 45 W",
  addressLine2: "Santa Monica, CA 90401",
  phone: "(310) 555-0142",
  email: "hello@drmayareynolds.com",
  license: "CA PSY 00000",
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Specialties", href: "#specialties" },
  { label: "Santa Monica Office", href: "#office" },
  { label: "Approach", href: "#approach" },
  { label: "FAQ", href: "#faq" },
];

export const EMPATHY_CARDS = [
  {
    number: "01",
    title: "Outwardly Functional, Inwardly Bracing",
    body: "Chronic worry, high internal pressure, and difficulty sleeping — even while everything looks fine from the outside.",
    points: ["Chronic worry", "High internal pressure", "Difficulty sleeping"],
  },
  {
    number: "02",
    title: "Stuck in Overthinking & Perfectionism",
    body: "Constantly striving, but feeling emotionally drained and disconnected from the life you've built.",
    points: ["Constant striving", "Emotionally drained", "Disconnected"],
  },
  {
    number: "03",
    title: "Lingering Impact of Past Events",
    body: "Single-incident or relational trauma that continues to affect your sense of safety, trust, and ease.",
    points: ["Single-incident trauma", "Relational trauma", "Sense of safety"],
  },
];

export type Specialty = {
  id: string;
  eyebrow: string;
  title: string;
  short: string;
  description: string;
  tags: string[];
  details: string[];
  icon: "waves" | "shield" | "flame";
};

export const SPECIALTIES: Specialty[] = [
  {
    id: "anxiety",
    eyebrow: "Anxiety & Panic",
    title: "Anxiety & Panic Therapy in Santa Monica",
    short: "Break the thought loops and teach your nervous system how to settle.",
    description:
      "Using Cognitive Behavioral Therapy (CBT) alongside mindfulness and body-based skills, we identify the thought loops fueling your anxiety and build practical tools to down-regulate your nervous system — in the moment, and over time.",
    tags: ["CBT", "Breaking thought loops", "Nervous system down-regulation"],
    details: [
      "Identify and reframe the thinking patterns that keep worry running",
      "Learn breathing and somatic techniques that calm panic in real time",
      "Gradually reclaim situations you've been avoiding",
      "Sleep better, focus more clearly, and feel less on edge",
    ],
    icon: "waves",
  },
  {
    id: "trauma",
    eyebrow: "Trauma & EMDR",
    title: "Trauma & EMDR Therapy in Santa Monica",
    short: "Safe, paced processing so the past stops living in your present.",
    description:
      "Whether you're carrying a single overwhelming event or the layered impact of complex relational trauma, we begin with stabilization and safety before moving into EMDR and somatic release — always at a pace your system can hold.",
    tags: ["Safe stabilization", "Single-incident & complex trauma", "Somatic release"],
    details: [
      "Build grounding and resourcing skills before any processing begins",
      "EMDR (Eye Movement Desensitization & Reprocessing) to reduce the charge of memories",
      "Address relational and attachment wounds with care",
      "Restore a felt sense of safety, trust, and choice in your body",
    ],
    icon: "shield",
  },
  {
    id: "burnout",
    eyebrow: "Burnout & Perfectionism",
    title: "Burnout & Perfectionism Counseling in California",
    short: "For high performers who are ready to stop running on empty.",
    description:
      "For entrepreneurs, creatives, and professionals who have built a life on pushing through. Together we untangle the roots of perfectionism, practice real boundaries, and design a way of living and working that is genuinely sustainable.",
    tags: ["High performers & entrepreneurs", "Boundary setting", "Sustainable living"],
    details: [
      "Understand where the pressure to over-function actually comes from",
      "Set and hold boundaries without guilt spiraling",
      "Reconnect with meaning, rest, and creativity",
      "Available in-person in Santa Monica or via telehealth anywhere in California",
    ],
    icon: "flame",
  },
];

export const CREDENTIALS = [
  "Licensed Psychologist",
  "EMDR Trained",
  "CBT Specialist",
  "Mindfulness & Somatic",
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Free 15-Minute Consult Call",
    body: "A relaxed phone or video call to make sure we're a good fit. Ask anything you'd like — there's zero pressure and no obligation.",
    tags: ["Good-fit check", "Ask questions", "Zero pressure"],
  },
  {
    step: "02",
    title: "Comprehensive Intake",
    body: "In our first full sessions, we map your goals, triggers, history, and what your nervous system needs to feel safe enough to do this work.",
    tags: ["Map your goals", "Understand triggers", "Nervous system needs"],
  },
  {
    step: "03",
    title: "Personalized, Paced Therapy",
    body: "An integrative plan blending EMDR, CBT, mindfulness, and somatic healing — adjusted as you grow, and never faster than feels right.",
    tags: ["Integrative EMDR", "CBT skills", "Somatic healing"],
  },
];

export const FAQS = [
  {
    q: "Do you offer in-person or online sessions?",
    a: "Both. I see clients in person at my Santa Monica office (123th Street 45 W, Santa Monica, CA 90401), and I offer secure, HIPAA-compliant telehealth sessions to adults located anywhere in California. Many clients blend the two — for example, in-person sessions for EMDR work and virtual sessions when travel or schedules make that easier.",
  },
  {
    q: "What is EMDR and who is it for?",
    a: "EMDR (Eye Movement Desensitization and Reprocessing) is a well-researched, structured therapy that helps the brain and body reprocess distressing memories so they lose their emotional charge. Rather than talking through every detail, EMDR uses bilateral stimulation (such as guided eye movements or tapping) while you briefly attend to a memory. It's effective for single-incident trauma (an accident, loss, medical event) as well as complex or relational trauma, and it pairs naturally with somatic work because it helps release what the body has been holding. We always begin with stabilization and grounding skills so the process feels safe and paced.",
  },
  {
    q: "How does the free 15-minute consultation work?",
    a: "You'll book a time that works for you, and we'll connect by phone or video. I'll ask a little about what's bringing you to therapy, you can ask me anything about my approach, fees, or logistics, and together we'll decide whether working together feels like a good fit. If I'm not the right match, I'll happily point you toward trusted colleagues. There is no pressure and no obligation to schedule further.",
  },
  {
    q: "What does a typical session look like?",
    a: "Sessions are 50 minutes and take place weekly or biweekly. Early on we focus on understanding your patterns and building tools you can use right away. As trust builds, we move into deeper work — EMDR, somatic processing, or untangling long-standing beliefs — always with room to check in about pace.",
  },
  {
    q: "Do you accept insurance?",
    a: "I am an out-of-network provider. I provide monthly superbills you can submit to your insurance for potential reimbursement, and I'm happy to walk you through how to check your out-of-network benefits during our consultation.",
  },
];
