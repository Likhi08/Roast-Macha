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
      'రెండు సెకన్లు నవ్వి, నా మొత్తం జీవితం ఇంకా పెండింగ్‌లో ఉందని గుర్తొచ్చినప్పుడు 😞',
      'ఫోటో క్యూట్‌గా ఉంది కానీ వ్యక్తిత్వం ఇంకా బీటా వెర్షన్‌లో ఉన్నప్పుడు 😞',
      'అన్నీ బాగున్నట్టు నవ్వుతున్నాను కానీ బ్యాంక్ బ్యాలెన్స్ మాత్రం రిజెక్ట్ చేస్తున్నప్పుడు 😞',
      'హ్యాపీ స్టోరీ పెట్టి వెంటనే మళ్లీ ఓవర్‌థింకింగ్‌కి వెళ్లినప్పుడు 😞',
      'ఒక్క పని చేసి మొత్తం రోజు ఉత్సాహంగా నటిస్తున్నప్పుడు 😞'
    ],
    sad: [
      'ప్లేలిస్ట్ నా ఫ్రెండ్స్ కంటే ఎక్కువగా నన్ను అర్థం చేసుకున్నప్పుడు 😞',
      'మంచి డ్రెస్‌ని బోరింగ్ రోజు మీద వేస్ట్ చేసినప్పుడు 😞',
      '"పర్లేదు" అని చెప్పి దాన్నే నా వ్యక్తిత్వంగా మార్చుకున్నప్పుడు 😞',
      'చిన్న సమస్యే సీజన్ ఫినాలేలా అనిపించినప్పుడు 😞',
      'అద్దం ముందస్తు హెచ్చరిక లేకుండా నిజాయితీగా అభిప్రాయం ఇచ్చినప్పుడు 😞'
    ],
    angry: [
      '"శాంతించు" అని చెప్పగానే బాస్ లెవెల్ అన్‌లాక్ అయినప్పుడు 😞',
      'కఠినమైన రిప్లై టైప్ చేసి శాంతి కోసం డిలీట్ చేసినప్పుడు 😞',
      'నా సహనానికి అపరిమిత వారంటీ ఉందనుకుని అందరూ పరీక్షించినప్పుడు 😞',
      'డెడ్‌లైన్ దగ్గరికి రాగానే గ్రూప్ ప్రాజెక్ట్ వాళ్లు యాక్టివ్ అయినప్పుడు 😞',
      'ట్రాఫిక్ సిగ్నల్ కూడా నా ఆరాను జడ్జ్ చేసినప్పుడు 😞'
    ],
    neutral: [
      'ముందు కెమెరా పొరపాటున తెరుచుకున్నప్పుడు 😞',
      'జీవితం హీరో ఎనర్జీ అడిగితే నేను పాస్‌పోర్ట్ ఫోటో మూడ్ ఇచ్చినప్పుడు 😞',
      'ఆలోచనలు శూన్యం, నమ్మకం పూర్తి స్థాయి అన్నట్టు మీటింగ్‌కి వెళ్లినప్పుడు 😞',
      'ముఖం "ఏమీ జరగలేదు" అంటుంది కానీ ఆరా ఇప్పటికే ఫిర్యాదు పెట్టినప్పుడు 😞',
      'బాధ్యతలకు స్కిప్ బటన్ లేదని గుర్తొచ్చినప్పుడు 😞'
    ],
    sleepy: [
      'అలారం నా చదువుకి స్పాన్సర్‌లా మోగినప్పుడు 😞',
      'ఎనిమిది గంటలు నిద్రపోయినా ట్రైలర్ ఎనర్జీతో లేచినప్పుడు 😞',
      'ఒక చిన్న నిద్ర ఏమీ సాల్వ్ చేయకుండా టైమ్‌లైన్ మార్చేసినప్పుడు 😞',
      'శరీరం లేచింది కానీ ఆత్మ ఇంకా ఛార్జింగ్‌లో ఉన్నప్పుడు 😞',
      'కాఫీన్ చాట్‌లోకి వచ్చి నన్ను సీన్‌లో వదిలేసినప్పుడు 😞'
    ],
    confused: [
      'ప్రశ్నను రెండు సార్లు చదివితే అది వ్యక్తిగత దాడిలా అనిపించినప్పుడు 😞',
      'అందరికీ ప్లాన్ అర్థమైంది, నేను మాత్రం ఇంకా లోడింగ్ స్క్రీన్‌లో ఉన్నప్పుడు 😞',
      'మెదడు ప్రకటనలు ప్లే చేస్తుంటే నేను సమాచారం అర్థం చేసుకుంటున్నట్టు నటించినప్పుడు 😞',
      'వివరణకే మరో వివరణ కావాల్సినప్పుడు 😞',
      'జీపీఎస్ "మళ్లీ లెక్కిస్తున్నాను" అంటే నా జీవితం కూడా అదే అన్నప్పుడు 😞'
    ],
    surprised: [
      'ప్లాట్ ట్విస్ట్ నా భావోద్వేగ బడ్జెట్ కంటే ముందే వచ్చినప్పుడు 😞',
      'ఎవరైనా పొగిడితే మనిషిలా ఎలా స్పందించాలో మర్చిపోయినప్పుడు 😞',
      'లక్షాధికారిలా ఆర్డర్ చేసి బిల్లు తెరిచినప్పుడు 😞',
      'కెమెరా ఫ్లాష్ ఫోటో కంటే ఎక్కువగా నిజం బయటపెట్టినప్పుడు 😞',
      'మనసులో క్యాన్సిల్ చేసిన ప్లాన్స్ నిజంగానే జరిగినప్పుడు 😞'
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
    medium: [' నిజంగా అన్యాయం.', ' ఆరాకి చిన్న దెబ్బ పడింది.', ' ఇది నిశ్శబ్దంగా గుచ్చింది.'],
    savage: [' భావోద్వేగ నష్టం నిజం చేత స్పాన్సర్ చేయబడింది.', ' ఆరా చాట్ నుంచి వెళ్లిపోయింది.', ' క్యాప్షన్ కూడా వదిలేసింది.']
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
