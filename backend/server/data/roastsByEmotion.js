const languages = ['English', 'Telugu', 'Hindi', 'Tamil', 'Kannada', 'Malayalam'];
const emotions = ['happy', 'sad', 'angry', 'neutral', 'sleepy', 'confused', 'surprised'];

const languageLines = {
  English: [
    'your selfie has main character dreams but side character execution',
    'your aura is buffering like campus WiFi during results day',
    'this is giving low battery confidence with full volume captions',
    'hero entry was planned, output came as NPC energy',
    'dark mode future unlocked, common sense still on trial'
  ],
  Telugu: [
    'macha nee aura hero entry anukundi kani output side character',
    'nee selfie campus WiFi la buffering chestundi',
    'low battery confidence tho full volume caption pettesav',
    'mass entry plan chesav kani NPC energy deliver ayyindi',
    'dark mode future undi kani common sense trial lo undi'
  ],
  Hindi: [
    'bhai aura hero entry socha tha par output side character nikla',
    'tera selfie campus WiFi jaisa buffering kar raha hai',
    'low battery confidence ke saath full volume caption',
    'entry hero wali thi par energy NPC wali aa gayi',
    'dark mode future hai par common sense trial pe hai'
  ],
  Tamil: [
    'machan aura hero entry nu nenachu but output side character',
    'un selfie campus WiFi madhiri buffering panrathu',
    'low battery confidence oda full volume caption',
    'mass entry plan pannina but NPC energy vandhuduchu',
    'dark mode future irukku but common sense trial la irukku'
  ],
  Kannada: [
    'guru aura hero entry antha thought but output side character',
    'ninna selfie campus WiFi tara buffering agtha ide',
    'low battery confidence jothe full volume caption',
    'mass entry plan madidya but NPC energy bandide',
    'dark mode future ide but common sense trial alli ide'
  ],
  Malayalam: [
    'machane aura hero entry vicharichu but output side character',
    'ninte selfie campus WiFi pole buffering aanu',
    'low battery confidence koode full volume caption',
    'mass entry plan cheythu but NPC energy vannu',
    'dark mode future undu but common sense trial il aanu'
  ]
};

const emotionHooks = {
  happy: ['smile loading bonus', 'festival mode', 'extra cheerful damage'],
  sad: ['exam hall face', 'rainy playlist aura', 'seen zone recovery'],
  angry: ['keyboard warrior glare', 'traffic signal patience', 'group project rage'],
  neutral: ['default settings face', 'passport photo mood', 'NPC lobby energy'],
  sleepy: ['sleep mode', 'alarm defeated aura', 'low battery face'],
  confused: ['maths board expression', 'GPS recalculating aura', 'buffering thoughts'],
  surprised: ['plot twist face', 'notification panic', 'camera flash betrayal']
};

const intensityClosers = {
  soft: ['still kind of cute', 'but respectfully', 'with mild damage', 'bestie edition', 'low heat only'],
  medium: ['aura score asking questions', 'meme page material ready', 'confidence needs a software update', 'side quest energy confirmed', 'vibes need charging'],
  savage: ['alarm kuda resign chesindi', 'hero entry output zero', 'NPC energy certified', 'dark mode future confirmed', 'roast card wrote itself']
};

const titleCase = (value) => value.charAt(0).toUpperCase() + value.slice(1);

const makeRoasts = (language, emotion, intensity) => {
  const lines = languageLines[language];
  const hooks = emotionHooks[emotion];
  const closers = intensityClosers[intensity];

  return lines.map((line, index) => {
    const hook = hooks[index % hooks.length];
    const closer = closers[index % closers.length];
    return `${line}, ${hook}, ${closer}.`;
  });
};

export const roastsByEmotion = Object.fromEntries(
  languages.map((language) => [
    language,
    Object.fromEntries(
      emotions.map((emotion) => [
        emotion,
        {
          soft: makeRoasts(language, emotion, 'soft'),
          medium: makeRoasts(language, emotion, 'medium'),
          savage: makeRoasts(language, emotion, 'savage')
        }
      ])
    )
  ])
);

export const supportedLanguages = languages;
export const supportedEmotions = emotions;
export const supportedIntensities = ['soft', 'medium', 'savage'];
export const displayIntensity = (intensity) => titleCase(intensity);
