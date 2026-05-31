const languages = ['English', 'Telugu', 'Hindi', 'Tamil', 'Kannada', 'Malayalam'];
const emotions = ['happy', 'sad', 'angry', 'neutral', 'sleepy', 'confused', 'surprised'];

const memeCaptions = {
  English: {
    happy: [
      'Me after laughing for 2 seconds and remembering my whole life is still pending 😞',
      'When the photo looks cute but the personality is still in beta 😞',
      'Me when I smile like everything is fine and my bank balance says audition rejected 😞',
      'When I post a happy story and immediately go back to overthinking 😞',
      'Me acting cheerful after doing absolutely one productive thing 😞'
    ],
    sad: [
      'Me when the playlist understands me better than my friends 😞',
      'When I waste a good outfit on a boring day 😞',
      'Me after saying "it is fine" and making it my whole personality 😞',
      'When one small inconvenience turns into a season finale 😞',
      'Me when the mirror gives honest feedback without warning 😞'
    ],
    angry: [
      'Me when someone says "calm down" and unlocks the boss level 😞',
      'When I type a savage reply and delete it because I still need peace 😞',
      'Me watching people test my patience like it has unlimited warranty 😞',
      'When group project members breathe near the deadline 😞',
      'Me when the traffic signal changes after judging my whole aura 😞'
    ],
    neutral: [
      'Me when I open the front camera by accident 😞',
      'When life asks for main character energy and I submit passport photo mood 😞',
      'Me after attending the meeting with zero thoughts and full confidence 😞',
      'When my face says "nothing happened" but my aura filed a complaint 😞',
      'Me when I remember I have responsibilities with no skip button 😞'
    ],
    sleepy: [
      'Me when the alarm rings like it personally funded my education 😞',
      'When I sleep for 8 hours and still wake up with trailer energy 😞',
      'Me after one nap that solved nothing but changed the timeline 😞',
      'When my body is awake but my soul is still charging 😞',
      'Me when caffeine enters the chat and leaves me on read 😞'
    ],
    confused: [
      'Me when I read the question twice and it becomes a personal attack 😞',
      'When everyone understands the plan and I am still on the loading screen 😞',
      'Me pretending to process information while my brain plays ads 😞',
      'When the explanation needs its own explanation 😞',
      'Me when GPS says "recalculating" and so does my life 😞'
    ],
    surprised: [
      'Me when the plot twist arrives before my emotional budget 😞',
      'When someone compliments me and I forget how humans respond 😞',
      'Me opening the bill after ordering like a millionaire 😞',
      'When the camera flash exposes more than the photo 😞',
      'Me when plans actually happen after I mentally cancelled them 😞'
    ]
  },
  Telugu: {
    happy: [
      'Rendu seconds navvi, life motham inka pending lo undani gurthu vachinappudu 😞',
      'Photo cute ga undi kani personality inka beta version lo unnappudu 😞',
      'Anni bagunnattu smile istunna, bank balance matram reject chestunnappudu 😞',
      'Happy story petti ventane malli overthinking ki vellinappudu 😞',
      'Okka pani chesi motham day utsaham ga act chestunnappudu 😞'
    ],
    sad: [
      'Playlist friends kanna ekkuva nannu ardham chesinappudu 😞',
      'Manchi dress ni boring roju meeda waste chesinappudu 😞',
      '"Parledu" ani cheppi danne personality ga marchukunnappudu 😞',
      'Chinna problem kuda season finale la anipinchinappudu 😞',
      'Mirror warning lekunda honest feedback ichinappudu 😞'
    ],
    angry: [
      '"Calm avvu" annagane boss level unlock ainappudu 😞',
      'Savage reply type chesi peace kosam delete chesinappudu 😞',
      'Na patience ki unlimited warranty undani andaru test chesinappudu 😞',
      'Deadline daggariki ragane group project vallu active ainappudu 😞',
      'Traffic signal kuda na aura ni judge chesinappudu 😞'
    ],
    neutral: [
      'Mundu camera porapatuna open ainappudu 😞',
      'Life hero energy adigithe nenu passport photo mood ichinappudu 😞',
      'Thoughts zero, confidence full ani meeting ki vellinappudu 😞',
      'Face "emi jaragaledu" antundi kani aura already complaint pettinappudu 😞',
      'Responsibilities ki skip button ledani gurthu vachinappudu 😞'
    ],
    sleepy: [
      'Alarm na chaduvuki sponsor la ring ainappudu 😞',
      'Eight hours nidra poyina trailer energy tho lechinappudu 😞',
      'Oka nap emi solve cheyyakunda timeline marchesinappudu 😞',
      'Body lechindi kani soul inka charging lo unnappudu 😞',
      'Caffeine chat loki vachi nannu seen lo vadilesinappudu 😞'
    ],
    confused: [
      'Question rendu sarlu chadivithe personal attack la anipinchinappudu 😞',
      'Andariki plan ardham ayyindi, nenu matram loading screen lo unnappudu 😞',
      'Brain ads play chestunte information ardham aindi ani act chesinappudu 😞',
      'Explanation ki kuda inko explanation kavalsinappudu 😞',
      'GPS recalculating antunte life kuda same ani anipinchinappudu 😞'
    ],
    surprised: [
      'Plot twist na emotional budget kanna mundhe vachinappudu 😞',
      'Evaraina compliment isthe normal ga respond avvadam marchipoyinappudu 😞',
      'Millionaire la order chesi bill open chesinappudu 😞',
      'Camera flash photo kanna ekkuva nijam bayatapettinappudu 😞',
      'Mind lo cancel chesina plans nijangane jariginappudu 😞'
    ]
  },
  Hindi: {
    happy: [
      'Me 2 seconds hasne ke baad yaad aaya life abhi bhi pending hai 😞',
      'When photo cute hai par personality abhi beta version mein hai 😞',
      'Me jab smile karu jaise sab fine hai aur bank balance reject kar de 😞',
      'Happy story daal ke next second overthinking pe wapas 😞',
      'Ek productive kaam karke full cheerful acting karte hue 😞'
    ],
    sad: [
      'Me when playlist friends se zyada samajh leti hai 😞',
      'When good outfit boring day pe waste ho gaya 😞',
      'Me after saying "it is fine" and making it my personality 😞',
      'When chhoti si problem season finale ban jaati hai 😞',
      'Me when mirror bina warning ke honest feedback de deta hai 😞'
    ],
    angry: [
      'Me when someone says "calm down" and boss level unlock ho jaata hai 😞',
      'Savage reply type karke peace ke liye delete karte hue 😞',
      'Me watching people test my patience like unlimited warranty hai 😞',
      'When group project members deadline ke paas breathe karte hain 😞',
      'Traffic signal bhi meri aura judge kar ke change hota hai 😞'
    ],
    neutral: [
      'Me when front camera galti se open ho jaata hai 😞',
      'Life main character energy maange aur main passport photo mood submit karu 😞',
      'Meeting attend with zero thoughts and full confidence 😞',
      'Face says nothing happened but aura complaint file kar chuka hai 😞',
      'Me when responsibilities yaad aati hain aur skip button nahi hota 😞'
    ],
    sleepy: [
      'Me when alarm rings like usne meri education sponsor ki hai 😞',
      '8 hours sone ke baad bhi trailer energy ke saath uthna 😞',
      'One nap that solved nothing but timeline change kar diya 😞',
      'Body awake hai par soul abhi charging mein hai 😞',
      'Caffeine chat mein aake mujhe seen pe chhod gaya 😞'
    ],
    confused: [
      'Question do baar padha aur personal attack lagne laga 😞',
      'Everyone understands the plan and I am still loading 😞',
      'Brain ads play kar raha hai aur main processing act kar raha hu 😞',
      'When explanation ko bhi explanation chahiye 😞',
      'GPS says recalculating and life says same bro 😞'
    ],
    surprised: [
      'Plot twist emotional budget se pehle aa gaya 😞',
      'Someone compliments me and I forget human response 😞',
      'Bill open after ordering like a millionaire 😞',
      'Camera flash photo se zyada expose kar deta hai 😞',
      'Plans actually happen after I mentally cancelled them 😞'
    ]
  },
  Tamil: {
    happy: [
      'Me 2 seconds sirichitu life still pending nu nyabagam vandha 😞',
      'Photo cute ah irukku but personality innum beta version la irukkum bodhu 😞',
      'Everything fine madhiri smile pannuren, bank balance reject pannum bodhu 😞',
      'Happy story potutu next second overthinking ku return aana 😞',
      'Oru productive thing pannitu full cheerful ah act pannum bodhu 😞'
    ],
    sad: [
      'Playlist friends vida better ah understand pannum bodhu 😞',
      'Good outfit boring day la waste aana bodhu 😞',
      '"It is fine" nu sollitu adha personality aakum bodhu 😞',
      'Small inconvenience season finale aagum bodhu 😞',
      'Mirror warning illama honest feedback kudukkum bodhu 😞'
    ],
    angry: [
      '"Calm down" nu sonna boss level unlock aagum bodhu 😞',
      'Savage reply type pannitu peace kaaga delete pannum bodhu 😞',
      'People patience ah unlimited warranty madhiri test pannum bodhu 😞',
      'Group project members deadline pakkam active aagum bodhu 😞',
      'Traffic signal kuda aura judge panni change aagum bodhu 😞'
    ],
    neutral: [
      'Front camera accident ah open aana bodhu 😞',
      'Life main character energy kekkum, naan passport photo mood submit pannum bodhu 😞',
      'Zero thoughts full confidence oda meeting attend pannum bodhu 😞',
      'Face nothing happened nu soludhu but aura complaint file panniduchu 😞',
      'Responsibilities ku skip button illa nu nyabagam vandha 😞'
    ],
    sleepy: [
      'Alarm en education sponsor madhiri ring pannum bodhu 😞',
      '8 hours thoongiyum trailer energy oda ezhundha 😞',
      'One nap nothing solve pannala but timeline change panniduchu 😞',
      'Body awake but soul charging la irukkum bodhu 😞',
      'Caffeine chat la vandhu seen la vittudum bodhu 😞'
    ],
    confused: [
      'Question rendu thadava padicha personal attack madhiri irukkum bodhu 😞',
      'Everyone plan understand pannanga, naan loading screen la irukken 😞',
      'Brain ads play pannum, naan processing act pannum bodhu 😞',
      'Explanation ku explanation venum bodhu 😞',
      'GPS recalculating nu soludhu, life um same nu soludhu 😞'
    ],
    surprised: [
      'Plot twist emotional budget ku munnaadi vandha 😞',
      'Compliment vandha human response marandha 😞',
      'Millionaire madhiri order pannitu bill open pannum bodhu 😞',
      'Camera flash photo vida adhigama expose pannum bodhu 😞',
      'Mentally cancel pannina plans real ah happen aana 😞'
    ]
  },
  Kannada: {
    happy: [
      'Me 2 seconds nagi life still pending antha nenapadaga 😞',
      'Photo cute ide but personality innum beta version alli ide 😞',
      'Everything fine antha smile madtini, bank balance reject madidaga 😞',
      'Happy story haki next second overthinking ge return adaga 😞',
      'Ondu productive kelasa madi full cheerful acting madidaga 😞'
    ],
    sad: [
      'Playlist friends ginta better understand madidaga 😞',
      'Good outfit boring day mele waste adaga 😞',
      '"It is fine" antha heli adanne personality madidaga 😞',
      'Small problem season finale agidaga 😞',
      'Mirror warning illade honest feedback kotdaga 😞'
    ],
    angry: [
      '"Calm down" andre boss level unlock adaga 😞',
      'Savage reply type madi peace koskara delete madidaga 😞',
      'People patience ge unlimited warranty ide antha test madidaga 😞',
      'Group project members deadline hattira active adaga 😞',
      'Traffic signal kuda aura judge madi change adaga 😞'
    ],
    neutral: [
      'Front camera accident open adaga 😞',
      'Life main character energy kelidaga nanu passport photo mood submit madidaga 😞',
      'Zero thoughts full confidence jothe meeting attend madidaga 😞',
      'Face nothing happened antha heltide but aura complaint file madide 😞',
      'Responsibilities ge skip button illa antha nenapadaga 😞'
    ],
    sleepy: [
      'Alarm nanna education sponsor madida hage ring adaga 😞',
      '8 hours sleep aadru trailer energy jothe eddaga 😞',
      'One nap enu solve madilla but timeline change madidaga 😞',
      'Body awake but soul charging alli iddaga 😞',
      'Caffeine chat ge bandu seen alli bittaga 😞'
    ],
    confused: [
      'Question eradu sala odidare personal attack anisutte 😞',
      'Everyone plan understand madidru, nanu loading screen alli iddaga 😞',
      'Brain ads play madtide, nanu processing act madidaga 😞',
      'Explanation ge explanation beku adaga 😞',
      'GPS recalculating antha heltide, life kuda same antha feel adaga 😞'
    ],
    surprised: [
      'Plot twist emotional budget ginta munche bandaga 😞',
      'Compliment bandaga human response marethaga 😞',
      'Millionaire hage order madi bill open madidaga 😞',
      'Camera flash photo ginta jasthi expose madidaga 😞',
      'Mentally cancel madida plans real agi happen adaga 😞'
    ]
  },
  Malayalam: {
    happy: [
      'Me 2 seconds chirichittu life still pending aanu ennu orma vannappol 😞',
      'Photo cute aanu but personality still beta version aanu 😞',
      'Everything fine pole smile cheyyum, bank balance reject cheyyumbol 😞',
      'Happy story ittittu next second overthinking ilekku return cheyyumbol 😞',
      'Oru productive thing cheythu full cheerful acting cheyyumbol 😞'
    ],
    sad: [
      'Playlist friends nekkal better understand cheyyumbol 😞',
      'Good outfit boring day il waste aayappol 😞',
      '"It is fine" paranju athine personality aakkumbol 😞',
      'Small problem season finale aakumbol 😞',
      'Mirror warning illathe honest feedback tharumbol 😞'
    ],
    angry: [
      '"Calm down" paranjal boss level unlock aakumbol 😞',
      'Savage reply type cheythu peace vendi delete cheyyumbol 😞',
      'People patience unlimited warranty pole test cheyyumbol 😞',
      'Group project members deadline aduthu active aakumbol 😞',
      'Traffic signal polum aura judge cheythu change aakumbol 😞'
    ],
    neutral: [
      'Front camera accident open aayappol 😞',
      'Life main character energy chodikkum, njan passport photo mood submit cheyyumbol 😞',
      'Zero thoughts full confidence ode meeting attend cheyyumbol 😞',
      'Face nothing happened parayunnu but aura complaint file cheythu 😞',
      'Responsibilities nu skip button illa ennu orma vannappol 😞'
    ],
    sleepy: [
      'Alarm ente education sponsor cheytha pole ring cheyyumbol 😞',
      '8 hours urangiyittum trailer energy ode ezhunnelkkumbol 😞',
      'One nap onnum solve cheythilla but timeline change cheythu 😞',
      'Body awake but soul charging il aanu 😞',
      'Caffeine chat il vannu seen il vittappol 😞'
    ],
    confused: [
      'Question randu pravashyam vayichal personal attack pole thonnumbol 😞',
      'Everyone plan understand cheythu, njan loading screen il aanu 😞',
      'Brain ads play cheyyunnu, njan processing act cheyyumbol 😞',
      'Explanation nu explanation venam enna stage il 😞',
      'GPS recalculating parayum, life um same parayumbol 😞'
    ],
    surprised: [
      'Plot twist emotional budget ine munpe vannappol 😞',
      'Compliment kittumbol human response marannappol 😞',
      'Millionaire pole order cheythu bill open cheyyumbol 😞',
      'Camera flash photo nekkal kooduthal expose cheyyumbol 😞',
      'Mentally cancel cheytha plans real aayi happen cheyyumbol 😞'
    ]
  }
};

const defaultIntensitySuffixes = {
  soft: ['', '', ''],
  medium: [' Honestly unfair.', ' Aura took a small hit.', ' This one hurt quietly.'],
  savage: [' Emotional damage sponsored by reality.', ' Aura left the chat.', ' Even the caption gave up.']
};

const localizedIntensitySuffixes = {
  Telugu: {
    soft: ['', '', ''],
    medium: [' Nijanga unfair.', ' Aura ki chinna debba padindi.', ' Idi silent ga hurt ayyindi.'],
    savage: [' Emotional damage reality sponsor chesindi.', ' Aura chat nunchi vellipoyindi.', ' Caption kuda give up chesindi.']
  }
};

const titleCase = (value) => value.charAt(0).toUpperCase() + value.slice(1);

const makeRoasts = (language, emotion, intensity) => {
  const captions = memeCaptions[language][emotion];
  const suffixes = localizedIntensitySuffixes[language]?.[intensity] || defaultIntensitySuffixes[intensity];

  return captions.map((caption, index) => `${caption}${suffixes[index % suffixes.length]}`);
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
