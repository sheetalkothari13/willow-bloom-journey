/**
 * Chapter 3 — "Taking Care of You"
 * General, reassuring information adapted from NHS and ACOG pregnancy guidance.
 * Educational only — never personalised medical advice.
 */

export type GuideCard = {
  id: string;
  emoji: string;
  title: string;
  teaser: string;
  points: string[];
};

export const momGuideIntro = {
  eyebrow: "Chapter Three",
  title: "Taking Care of You",
  subtitle: "A gentle little guide for this beautiful journey.",
  note: "Here are a few gentle things to keep in mind — not rules, just care.",
};

export const guideCards: GuideCard[] = [
  {
    id: "nutrition",
    emoji: "🥗",
    title: "Nutrition",
    teaser: "Eating well, without overthinking it.",
    points: [
      "A balanced mix of fruit, vegetables, wholegrains, protein and dairy supports you both.",
      "You don't need to eat for two — appetite naturally shifts as pregnancy goes on.",
      "Small, frequent meals can feel kinder on days when food is unappealing.",
      "Your care team can advise on foods to be careful with during pregnancy.",
    ],
  },
  {
    id: "vitamins",
    emoji: "💊",
    title: "Prenatal vitamins & medicines",
    teaser: "Folic acid, vitamin D, and asking before adding.",
    points: [
      "Folic acid and vitamin D are commonly recommended in pregnancy — your provider will advise the right amounts for you.",
      "Always check any new medicine, supplement or vitamin with your doctor or pharmacist first.",
      "Never stop a prescribed medicine on your own — speak with the doctor who prescribed it.",
    ],
  },
  {
    id: "hydration",
    emoji: "💧",
    title: "Hydration",
    teaser: "Water, quietly doing a lot of work.",
    points: [
      "Drinking regularly through the day helps with tiredness, headaches and constipation.",
      "Keep a bottle where you'll see it — sipping often beats big glasses now and then.",
      "Warm water, milk or diluted juice all count if plain water feels unappealing.",
    ],
  },
  {
    id: "rest",
    emoji: "😴",
    title: "Rest & sleep",
    teaser: "Naps are not a luxury right now.",
    points: [
      "Tiredness is very common, especially in the first and third trimesters.",
      "From the second half of pregnancy, sleeping on your side is generally advised — pillows help.",
      "A slow wind-down routine can make broken nights a little easier.",
    ],
  },
  {
    id: "movement",
    emoji: "🚶",
    title: "Movement & exercise",
    teaser: "Gentle, regular, and only what feels good.",
    points: [
      "Walking, swimming and prenatal yoga are popular gentle options.",
      "Staying active is usually encouraged when your healthcare provider has cleared it.",
      "Listen to your body — stop and rest if anything feels wrong, and ask your team if unsure.",
    ],
  },
  {
    id: "appointments",
    emoji: "🩺",
    title: "Prenatal appointments",
    teaser: "Your regular check-ins together.",
    points: [
      "Regular prenatal care is one of the kindest things you can do for both of you.",
      "Keep a little list of questions on your phone between visits.",
      "Note your appointment dates somewhere you'll see them.",
    ],
  },
  {
    id: "emotional",
    emoji: "🧘",
    title: "Emotional wellbeing",
    teaser: "All the feelings are allowed.",
    points: [
      "Joy, worry, excitement and overwhelm can all arrive in the same afternoon.",
      "Talking to people you trust genuinely helps.",
      "If low mood or anxiety lingers, please tell your care team — support exists and it works.",
    ],
  },
  {
    id: "check",
    emoji: "🚫",
    title: "Things to check with your doctor",
    teaser: "When in doubt, just ask.",
    points: [
      "Alcohol, tobacco and nicotine products, and recreational drugs are advised against in pregnancy.",
      "Check any medicine, herbal product or supplement before taking it.",
      "Contact your care team about bleeding, severe pain, high fever, or reduced baby movements — never feel it's too small to ask.",
    ],
  },
];

export const notSureIntro = {
  title: "Not sure about something?",
  subtitle: "Pick anything you've been wondering about.",
};

export const notSureCategories = [
  {
    id: "medicine",
    emoji: "💊",
    label: "Medicine",
    body: "Whether a medicine is suitable in pregnancy depends on the exact medicine, the dose and your own history. Your doctor or pharmacist can check it for you — and please don't stop anything you've been prescribed without speaking to them first.",
  },
  {
    id: "herbal",
    emoji: "🍵",
    label: "Herbal products",
    body: "Herbal teas, remedies and supplements vary a lot, and 'natural' doesn't automatically mean suitable in pregnancy. Bring the actual product or label to your care team and they'll advise.",
  },
  {
    id: "food",
    emoji: "🍣",
    label: "Food",
    body: "Some foods need extra care during pregnancy, and guidance can differ by country and by how something is prepared. Your midwife or doctor can tell you what applies to you.",
  },
  {
    id: "exercise",
    emoji: "🏃",
    label: "Exercise",
    body: "Most people are encouraged to stay gently active, but the right kind and amount depends on your health and how your pregnancy is going. Check with your provider before starting anything new.",
  },
  {
    id: "travel",
    emoji: "✈️",
    label: "Travel",
    body: "Travel is often fine, though timing, distance and destination all matter — and airlines have their own rules later in pregnancy. Talk it through with your care team before booking.",
  },
  {
    id: "skincare",
    emoji: "💄",
    label: "Skincare",
    body: "Some skincare ingredients and treatments are best paused during pregnancy. Show your product list to your doctor or pharmacist and they'll let you know what to swap.",
  },
];

export const guideSources = [
  { label: "NHS — Pregnancy health", href: "https://www.nhs.uk/pregnancy/keeping-well/" },
  { label: "ACOG — Pregnancy resources", href: "https://www.acog.org/womens-health/pregnancy" },
];

export const guideDisclaimer =
  "Made with love and general pregnancy information. This is not medical advice. Always follow the guidance of your doctor or pregnancy care team.";

export const guideTransition = {
  text: "There's a whole beautiful journey ahead...",
  cta: "See what's waiting for you ✨",
  targetId: "ahead",
};
