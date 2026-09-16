//
/**
 * Chapter 2 — "Your Pregnancy Journey"
 * Week-by-week content, gentle and non-clinical.
 * General information adapted from NHS "Week-by-week guide to pregnancy"
 * and ACOG "How your fetus grows during pregnancy". Not medical advice.
 * Edit any single week here without touching the UI.
 */

export type PregnancyWeek = {
  week: number;
  /** short poetic title for the week */
  title: string;
  /** trimester label */
  trimester: 1 | 2 | 3;
  /** size comparison */
  size: { label: string; note: string };
  /** baby's world — 2 to 4 short lines */
  baby: string[];
  /** mom's world — 2 to 4 short lines, always softly worded */
  mom: string[];
  /** 1–2 little facts */
  facts: string[];
  /** short emotional message */
  message: string;
};

export const currentWeek = 13;

export const journeySources = [
  {
    label: "NHS — Week-by-week guide to pregnancy",
    href: "https://www.nhs.uk/pregnancy/week-by-week/",
  },
  {
    label: "ACOG — Pregnancy resources",
    href: "https://www.acog.org/womens-health/pregnancy",
  },
];

export const journeyIntro = {
  eyebrow: "Chapter Two",
  title: "Your Journey, Week by Week",
  subtitle: "Growing together — a little story that unfolds one week at a time.",
  disclaimer:
    "Made with love and general pregnancy information. This is not medical advice. Always follow the guidance of your doctor or pregnancy care team.",
};

export const pregnancyWeeks: PregnancyWeek[] = [
  {
    week: 4,
    title: "A tiny beginning",
    trimester: 1,
    size: { label: "A poppy seed", note: "" },
    baby: ["Baby is forming and growing quickly."],
    mom: [],
    facts: [],
    message: "",
  },
  {
    week: 5,
    title: "A tiny beginning",
    trimester: 1,
    size: { label: "A sesame seed", note: "" },
    baby: ["Baby is forming and growing quickly."],
    mom: [],
    facts: [],
    message: "",
  },
  {
    week: 6,
    title: "A tiny beginning",
    trimester: 1,
    size: { label: "A single pea", note: "" },
    baby: [
      "Baby is around the size of a pea, curled up and growing quickly.",
      "The brain and nervous system are in their earliest stages of development.",
      "Tiny limb buds — the beginnings of arms and legs — are starting to appear.",
      "Early facial and ear structures are forming, and early heart development is underway.",
    ],
    mom: [
      "You may notice tiredness that arrives out of nowhere — rest is doing real work.",
      "Some people experience nausea or queasiness at any hour, not just mornings.",
      "Breasts may feel tender or fuller, and you might need the bathroom more often.",
      "A heightened sense of smell, changing food likes and dislikes, mood shifts, or mild bloating and cramping can happen too.",
    ],
    facts: [
      "Baby's heart is one of the very first things to begin working — long before anyone can feel a kick.",
      "At this stage baby is measured from crown to rump, because those little legs are still curled up.",
    ],
    message:
      "You are six weeks into something extraordinary. Nothing shows on the outside yet, and still — everything has already changed. Be gentle with yourself today.",
  },
  {
    week: 7,
    title: "Softly unfolding",
    trimester: 1,
    size: { label: "A blueberry", note: "" },
    baby: [
      "Baby has roughly doubled in size since last week.",
      "The brain is growing rapidly and arm and leg buds are lengthening.",
      "Early features of the face — eyes, nostrils, the beginnings of a mouth — are taking shape.",
    ],
    mom: [
      "Nausea and tiredness are common around now; every pregnancy is different.",
      "You may find you go off foods or smells you usually love.",
      "Little and often can feel easier than full meals.",
    ],
    facts: ["Baby's brain is growing at an astonishing pace in these early weeks."],
    message: "Slow mornings are allowed. Your body is doing quiet, enormous work.",
  },
  {
    week: 8,
    title: "Little movements begin",
    trimester: 1,
    size: { label: "A raspberry", note: "" },
    baby: [
      "Fingers and toes are forming, still webbed at the tips.",
      "Baby makes tiny spontaneous movements — far too small for you to feel.",
      "All the main organs have begun to develop.",
    ],
    mom: [
      "Some people notice their waistband feels a little different, even this early.",
      "Tiredness may still be strong. Naps count as productivity right now.",
    ],
    facts: ["Baby is already moving, though you won't feel it for several more weeks."],
    message: "Somewhere inside you, someone is stretching for the very first time.",
  },
  {
    week: 9,
    title: "A face of their own",
    trimester: 1,
    size: { label: "A single grape", note: "" },
    baby: [
      "Baby's face is becoming more defined — eyelids are forming over the eyes.",
      "Tiny muscles are developing, allowing gentle movement of the limbs.",
    ],
    mom: [
      "You may still feel queasy or extra tired; for many this eases in the coming weeks.",
      "Emotions can feel bigger than usual. That's very normal.",
    ],
    facts: ["Baby's eyelids will stay fused shut until around week 26."],
    message: "There is already a little face in there, becoming unmistakably theirs.",
  },
  {
    week: 10,
    title: "From seed to sprout",
    trimester: 1,
    size: { label: "A kumquat", note: "" },
    baby: [
      "Baby's vital organs are all in place and starting to work together.",
      "The webbing between fingers and toes has disappeared.",
      "Tiny nail beds begin to form.",
    ],
    mom: [
      "Your body is producing more blood to support baby — dizziness can happen sometimes.",
      "You may have your first scan or booking appointment around now.",
    ],
    facts: ["Baby is now officially called a fetus rather than an embryo."],
    message: "Ten weeks of loving someone you haven't met yet.",
  },
  {
    week: 11,
    title: "Growing longer",
    trimester: 1,
    size: { label: "A fig", note: "" },
    baby: [
      "Baby's head is still large compared to the body, but the body is catching up.",
      "Bones are beginning to harden and tiny tooth buds appear.",
    ],
    mom: [
      "Some people find nausea begins to soften around this point.",
      "Skin and hair may feel different — hormones are busy.",
    ],
    facts: ["Baby can already hiccup, though you won't feel it yet."],
    message: "Every ordinary day of yours is a milestone day for them.",
  },
  {
    week: 12,
    title: "The first big hello",
    trimester: 1,
    size: { label: "A lime", note: "" },
    baby: [
      "All of baby's organs, muscles and bones are formed and now simply need to grow.",
      "Baby can open and close their fingers and curl their toes.",
    ],
    mom: [
      "Many people have their dating scan around 12 weeks.",
      "Energy often begins to return in the coming weeks, though everyone is different.",
    ],
    facts: ["The first trimester is nearly complete — most of baby's building is done."],
    message: "The first chapter of growing is almost finished. Look at what you've carried.",
  },
  {
    week: 13,
    title: "Second trimester begins",
    trimester: 2,
    size: { label: "A peapod", note: "" },
    baby: [
      "Baby's fingerprints are forming — completely unique already.",
      "Vocal cords are beginning to develop.",
    ],
    mom: [
      "Many people find this trimester the most comfortable of the three.",
      "You may notice a little more appetite and energy.",
    ],
    facts: ["No one in the world will ever have baby's fingerprints again."],
    message: "A gentler stretch of road begins here. Breathe it in.",
  },
  {
    week: 14,
    title: "Softening in",
    trimester: 2,
    size: { label: "A lemon", note: "" },
    baby: [
      "Fine downy hair called lanugo begins to cover baby's skin.",
      "Baby can make facial expressions — frowning, squinting, grimacing.",
    ],
    mom: [
      "A small bump may start to show, though this varies enormously.",
      "Some people notice their skin changing tone in places.",
    ],
    facts: ["Lanugo keeps baby warm until a layer of fat develops later on."],
    message: "Somewhere in there, a tiny face is practising every expression it knows.",
  },
  {
    week: 15,
    title: "Listening in",
    trimester: 2,
    size: { label: "An apple", note: "" },
    baby: [
      "Baby's ears are moving into position and hearing begins to develop.",
      "Baby is moving a lot, though most people can't feel it yet.",
    ],
    mom: ["You may feel more like yourself again.", "Nasal stuffiness is a common surprise."],
    facts: ["Baby may soon begin to recognise the sound of your voice."],
    message: "Talk to them. Somewhere, they're already learning the sound of home.",
  },
  {
    week: 16,
    title: "First flutters",
    trimester: 2,
    size: { label: "An avocado", note: "" },
    baby: [
      "Baby's limbs are well formed and joints are moving.",
      "The nervous system keeps maturing.",
    ],
    mom: [
      "Some people feel the first flutters between 16 and 24 weeks — earlier for some, later for others.",
      "It can feel like bubbles or a butterfly rather than a kick.",
    ],
    facts: ["Those first flutters have a lovely old name: quickening."],
    message: "The first flutter is a secret only the two of you will share.",
  },
  {
    week: 17,
    title: "Getting stronger",
    trimester: 2,
    size: { label: "A pear", note: "" },
    baby: [
      "Baby is putting on a little fat.",
      "The skeleton is hardening from soft cartilage into bone.",
    ],
    mom: [
      "You may notice mild aches as ligaments stretch.",
      "Sleeping on your side often feels more comfortable now.",
    ],
    facts: ["Baby's grip is developing — those tiny hands are already practising."],
    message: "Stronger every week. Both of you.",
  },
  {
    week: 18,
    title: "A world of sound",
    trimester: 2,
    size: { label: "A pepper", note: "" },
    baby: [
      "Baby may respond to loud noises from outside.",
      "Yawning and stretching become regular habits.",
    ],
    mom: [
      "An anomaly scan is often offered between 18 and 21 weeks.",
      "Some people feel a little breathless as things shift and make room.",
    ],
    facts: ["Baby's ears now hear the steady, comforting sound of your heartbeat."],
    message: "Your heartbeat is their favourite lullaby, and it plays all day long.",
  },
  {
    week: 19,
    title: "Softly wrapped",
    trimester: 2,
    size: { label: "A mango", note: "" },
    baby: [
      "A creamy coating called vernix protects baby's skin.",
      "Senses are developing quickly.",
    ],
    mom: [
      "Leg cramps and vivid dreams are both common now.",
      "Every pregnancy is different — trust your own pace.",
    ],
    facts: ["Vernix works a little like a natural moisturiser in the womb."],
    message: "Nature packs them in so carefully. So do you.",
  },
  {
    week: 20,
    title: "Halfway there",
    trimester: 2,
    size: { label: "A banana", note: "" },
    baby: [
      "Baby is now measured head to heel — those legs have straightened out.",
      "Baby has periods of sleeping and waking.",
    ],
    mom: [
      "The halfway mark. Many people feel movement clearly around this time.",
      "Your bump may be growing more noticeably.",
    ],
    facts: ["Baby now has a sleep cycle — and it rarely matches yours."],
    message: "Halfway. Half a year of quietly becoming somebody's whole world.",
  },
  {
    week: 21,
    title: "Little kicks",
    trimester: 2,
    size: { label: "A carrot", note: "" },
    baby: [
      "Movements are stronger and easier to feel.",
      "Baby swallows small amounts of amniotic fluid.",
    ],
    mom: [
      "You may start noticing patterns in when baby is active.",
      "Appetite often picks up around now.",
    ],
    facts: ["Flavours from what you eat can reach the amniotic fluid — baby is tasting already."],
    message: "Their first taste of the world comes from you.",
  },
  {
    week: 22,
    title: "Becoming familiar",
    trimester: 2,
    size: { label: "A papaya", note: "" },
    baby: [
      "Baby's features look much more like a newborn now.",
      "Eyebrows and eyelashes are forming.",
    ],
    mom: [
      "Skin may feel stretched or itchy; mention anything intense to your care team.",
      "Backache is common.",
    ],
    facts: ["Baby's grip is strong enough to hold on to the umbilical cord."],
    message: "Little eyebrows. Little lashes. Someone specific is on the way.",
  },
  {
    week: 23,
    title: "Filling out",
    trimester: 2,
    size: { label: "A grapefruit", note: "" },
    baby: [
      "Baby's skin is still wrinkled as fat catches up.",
      "Lungs are developing in preparation for air.",
    ],
    mom: [
      "Swollen ankles can appear; put your feet up when you can.",
      "Braxton Hicks tightenings may begin.",
    ],
    facts: ["Baby practises breathing movements long before there's any air to breathe."],
    message: "Rehearsing for a life they can't imagine yet, in the safest place there is.",
  },
  {
    week: 24,
    title: "A milestone week",
    trimester: 2,
    size: { label: "An ear of corn", note: "" },
    baby: ["Baby's inner ear is fully developed, helping with balance.", "Taste buds are forming."],
    mom: [
      "Your care team may talk about this week as an important milestone.",
      "Rest whenever your body asks.",
    ],
    facts: ["Baby now knows which way is up."],
    message: "Every week you carry them is a gift they'll never remember and always feel.",
  },
  {
    week: 25,
    title: "Curls and colours",
    trimester: 2,
    size: { label: "A zucchini", note: "" },
    baby: [
      "Hair is growing and beginning to show colour and texture.",
      "Baby responds to your voice and touch.",
    ],
    mom: [
      "Heartburn is common; smaller meals may help.",
      "Sleep can get trickier — pillows are your friend.",
    ],
    facts: ["Baby may startle at a sudden loud sound and settle when you speak."],
    message: "Press your hand to your bump. Somebody presses back.",
  },
  {
    week: 26,
    title: "Eyes open",
    trimester: 2,
    size: { label: "A green onion", note: "" },
    baby: [
      "Baby's eyes begin to open for the first time.",
      "Lungs continue their steady development.",
    ],
    mom: [
      "Movements may feel bigger and more purposeful.",
      "Some people notice more tiredness returning.",
    ],
    facts: ["Baby can sense bright light shining on your bump."],
    message: "First light, first sight. Even here, the world reaches in gently.",
  },
  {
    week: 27,
    title: "End of the middle",
    trimester: 2,
    size: { label: "A cauliflower", note: "" },
    baby: [
      "Baby's brain is very active.",
      "Regular sleeping and waking rhythms continue to settle.",
    ],
    mom: ["The second trimester is drawing to a close.", "Gentle movement often eases aches."],
    facts: ["Baby may now hiccup in a rhythm you can actually feel."],
    message: "Two thirds of the way. You've already given them so much.",
  },
  {
    week: 28,
    title: "Third trimester",
    trimester: 3,
    size: { label: "An eggplant", note: "" },
    baby: ["Baby can blink and has developing eyelashes.", "Weight gain speeds up from here."],
    mom: [
      "Appointments usually become more frequent now.",
      "Keeping a sense of baby's usual movements is helpful.",
    ],
    facts: ["Baby may begin to dream — rapid eye movement sleep starts around this time."],
    message: "The last stretch begins. Soon, hands instead of flutters.",
  },
  {
    week: 29,
    title: "Stronger every day",
    trimester: 3,
    size: { label: "A butternut squash", note: "" },
    baby: ["Muscles and lungs keep maturing.", "Bones are absorbing plenty of calcium."],
    mom: [
      "You may feel more breathless as space gets cosy.",
      "Small, frequent meals often feel better.",
    ],
    facts: ["Baby's kicks now have real power behind them."],
    message: "Those kicks are hellos. Answer them.",
  },
  {
    week: 30,
    title: "Cosy and close",
    trimester: 3,
    size: { label: "A cabbage", note: "" },
    baby: [
      "Baby's brain is developing its characteristic grooves and folds.",
      "Soft lanugo begins to disappear.",
    ],
    mom: [
      "Sleep can be interrupted; rest in the daytime if you can.",
      "Mood shifts are common — be kind to yourself.",
    ],
    facts: ["Baby's brain is beginning to look the way it will at birth."],
    message: "Ten weeks or so. Somewhere, a whole life is packing its bags.",
  },
  {
    week: 31,
    title: "Turning and tucking",
    trimester: 3,
    size: { label: "A coconut", note: "" },
    baby: ["Baby can turn their head from side to side.", "All five senses are working."],
    mom: [
      "Braxton Hicks may become more noticeable.",
      "Ask your care team about anything that feels unusual.",
    ],
    facts: ["Baby can now recognise and prefer familiar voices."],
    message: "They already know you. Isn't that something?",
  },
  {
    week: 32,
    title: "Nearly newborn",
    trimester: 3,
    size: { label: "A jicama", note: "" },
    baby: [
      "Baby usually settles into a head-down position around now.",
      "Fingernails reach the fingertips.",
    ],
    mom: [
      "Heartburn and back ache are common companions.",
      "Support pillows can make nights easier.",
    ],
    facts: ["Baby is practising sucking and swallowing, ready for feeding."],
    message: "Getting into position for the biggest arrival of your life.",
  },
  {
    week: 33,
    title: "Softly rounding",
    trimester: 3,
    size: { label: "A pineapple", note: "" },
    baby: ["Baby's skin is smoothing out as fat builds up.", "The immune system is developing."],
    mom: [
      "Swelling in hands and feet is common; mention sudden swelling to your care team.",
      "Rest is not laziness.",
    ],
    facts: ["Baby is now gaining weight faster than at any other time."],
    message: "Rounder, softer, closer. Almost.",
  },
  {
    week: 34,
    title: "Almost ready",
    trimester: 3,
    size: { label: "A cantaloupe", note: "" },
    baby: [
      "Lungs are nearly mature.",
      "Baby's bones are hardening, apart from the soft skull plates.",
    ],
    mom: [
      "You may feel pressure lower down as baby settles.",
      "Take breaks often; short walks can help.",
    ],
    facts: ["The skull stays soft and flexible to make the journey out easier."],
    message: "Your body knows exactly what it's doing. So does theirs.",
  },
  {
    week: 35,
    title: "Snug",
    trimester: 3,
    size: { label: "A honeydew melon", note: "" },
    baby: [
      "Space is tight, so movements feel more like rolls and stretches.",
      "Baby's kidneys are fully developed.",
    ],
    mom: ["Frequent bathroom trips return.", "Packing a hospital bag can feel grounding."],
    facts: ["Even with less room, baby should still move regularly every day."],
    message: "Not long now. Let yourself feel it all.",
  },
  {
    week: 36,
    title: "Getting into place",
    trimester: 3,
    size: { label: "A romaine lettuce", note: "" },
    baby: ["Most of the lanugo and vernix has gone.", "Baby is gaining around 200g a week."],
    mom: [
      "Baby may drop lower, easing breathing but adding pelvic pressure.",
      "Appointments are usually weekly soon.",
    ],
    facts: ["Baby swallows amniotic fluid, which helps the digestive system get ready."],
    message: "Everything you need to know, you'll learn together.",
  },
  {
    week: 37,
    title: "Full term soon",
    trimester: 3,
    size: { label: "A bunch of Swiss chard", note: "" },
    baby: [
      "Baby is practising breathing, sucking and gripping.",
      "The brain and lungs keep maturing right until birth.",
    ],
    mom: ["You may notice a burst of nesting energy.", "Know the signs of labour and who to call."],
    facts: ["Babies born at 39–40 weeks have had the most time for brain and lung growth."],
    message: "Any day now becomes some day soon. Rest while you can.",
  },
  {
    week: 38,
    title: "Waiting gently",
    trimester: 3,
    size: { label: "A leek", note: "" },
    baby: [
      "Baby's grip is firm and their organs are ready.",
      "A little more fat settles under the skin.",
    ],
    mom: [
      "Sleep may be light; nap without guilt.",
      "Every twinge feels significant — that's normal.",
    ],
    facts: ["Baby's first poo, meconium, is already forming."],
    message: "The last quiet days before everything is wonderfully loud.",
  },
  {
    week: 39,
    title: "So very close",
    trimester: 3,
    size: { label: "A watermelon", note: "" },
    baby: [
      "Baby is considered full term.",
      "The chest becomes more prominent and the skin is smooth.",
    ],
    mom: ["Contractions may start and stop for a while.", "Keep your care team's number close."],
    facts: ["Babies are born with about 300 bones — adults have 206."],
    message: "The last few pages of this chapter. What a story you've written.",
  },
  {
    week: 40,
    title: "Hello, little one",
    trimester: 3,
    size: { label: "A small pumpkin", note: "" },
    baby: [
      "Baby is ready to meet you.",
      "Only about 5 in 100 babies arrive exactly on their due date.",
    ],
    mom: ["Your due date is an estimate, not a deadline.", "Trust your team and trust yourself."],
    facts: ["Newborns can recognise their mother's voice from the very first moments."],
    message:
      "After all these weeks of carrying, whispering and wondering — hello, little one. You were loved long before you arrived.",
  },
];

export const weekByNumber = new Map(pregnancyWeeks.map((w) => [w.week, w]));
