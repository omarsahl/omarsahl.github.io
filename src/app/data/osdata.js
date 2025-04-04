export const resumeUrl =
  'https://docs.google.com/document/d/1AcoYscS_Fe11Dt4GvcaiNkNAAfDN5ekCMfrSK6P5EVY/edit?usp=sharing';

export const workExperience = [
  {
    order: 1,
    title: 'Senior Mobile Developer',
    company: 'NEXT Munich',
    duration: 'Jul 2024 — Present',
    url: 'https://next-munich.com',
    description: [],
    skills: ['Kotlin', 'Android SDK', 'Jetpack Compose'],
  },
  {
    order: 2,
    title: 'Android Engineer',
    company: 'Umma Life',
    duration: 'May 2023 — Jun 2024',
    url: 'https://app.ummalife.com',
    description: [
      "Develop and enhance Umma Life's native Android app, a social network app, focusing on user experience and functionality.",
      'Lead a team of 3 Android developers in feature implementation, a comprehensive UI overhaul, migration to Jetpack Compose, and ongoing maintenance.',
      'Ensure code quality through code reviews, providing technical mentorship and guidance to team members.',
      "Collaborate actively with cross-functional teams to align development with business objectives and user needs, contributing to the app's user base growth from 5k to over 100k.",
      'Improve app stability, increasing crash-free user percentage to over 98%.',
      'Stay updated with industry trends to apply best practices in Android app development.',
    ],
    skills: ['Kotlin', 'Android SDK', 'Jetpack Compose', 'WebRTC', 'Socket.IO'],
  },
  {
    order: 2,
    title: 'Freelance Software Engineer',
    company: 'Freelance',
    duration: 'Jul 2018 — Feb 2023',
    description: [
      'Maintained a Top Rated Freelancer status on Upwork.com, a distinction awarded to the top 10% of freelancers who demonstrate consistent high-quality work and client satisfaction.',
      'Helped clients globally with diverse software projects, and continuously achieved a job success rate of 100%.',
      'Worked individually and in teams to successfully complete software projects such as native Android applications and SDKs, cross-platform projects using Flutter, and backend projects.',
      'Conducted reverse engineering on Android and Java desktop apps as per client specifications to add new features or recover source code, deepening my knowledge of the underlying platform and language.',
    ],
    skills: [
      'Java',
      'Kotlin',
      'Dart',
      'Android SDK',
      'Flutter',
      'Reverse Engineering',
    ],
  },
  {
    order: 3,
    title: 'Junior Software Engineer',
    company: 'SmartCom-EG',
    duration: 'Sep 2017 — Nov 2017, Feb 2018 — Apr 2018',
    description: [
      'Spearheaded the design and development of multiple mobile app projects from start until they were available on the Google Play app store.',
      'Executed native Android projects utilizing Java, Kotlin, Android app architectures (MVC and MVP), communication with REST APIs, DI, SQLite (Room and other ORMs), voice recognition (Speech-to-Text and Text-to-Speech), and reactive programming with the ReactiveX APIs (RxJava, RxKotlin, and RxAndroid).',
      'Worked with the LibGDX framework to develop a cross-platform mobile app.',
    ],
    skills: ['Java', 'Kotlin', 'Android SDK', 'LibGDX'],
  },
  {
    order: 4,
    title: 'Software Developer (Internship)',
    company: 'SmartCom-EG',
    duration: 'Jul 2017 — Aug 2017',
    description: [
      "Developed an Android application that aimed at assisting deaf and illiterate individuals in using ATMs. The app functioned by capturing a photo of the ATM screen, analyzing the image, and then displaying a video in gesture language to interpret the screen's content. The project aligned with the client’s specifications with the required accuracy of >98%.",
      'Utilized Java, the Android SDK, and OCR technology to create an effective and user-friendly application.',
      'Attained an offer for a full-time position at the company due to successful project delivery within a challenging timeline.',
    ],
    skills: ['Java', 'Android SDK'],
  },
];

export const projects = [
  {
    name: 'Umma Life Android App',
    client: 'Umma Life',
    description:
      "Led the Android development team for Umma Life, a thriving social media app.<br/>I spearheaded the app's transformation through feature implementation, a comprehensive UI redesign, migration to Jetpack Compose, and the development of an in-app messenger with text messages, media file sharing, voice messaging, and WebRTC-powered audio/video calls.<br/>This collaborative effort resulted in significant user growth, with the app's user base surging from 5,000 to over 100,000.",
    thumbnail: '/projects/ummalife.png',
    urls: [
      {
        name: 'Google Play',
        url: 'https://play.google.com/store/apps/details?id=com.ummalife.android',
      },
    ],
    technologies: [
      'Kotlin',
      'AndroidX',
      'Jetpack Compose',
      'Room',
      'WorkManager',
      'Media3',
      'Koin',
      'WebRTC',
      'Socket.IO',
      'Retrofit2',
      'WalletConnect',
      'LeakCanary',
      'Firebase',
      'JUnit',
      'Espresso',
      'MockK',
      'Robolectric',
      'Turbine',
      'Spotless',
      'Detekt',
    ],
    order: 1,
  },
  {
    name: 'Muslim Assistant',
    client: 'Ninety+',
    description:
      'Developed from scratch, this mobile application offers a variety of features tailored to Muslims worldwide and has achieved over 250,000 downloads across multiple countries.',
    date: 'Apr 2021',
    thumbnail: '/projects/muslim-assistant.png',
    urls: [
      {
        name: 'Google Play',
        url: 'https://play.google.com/store/apps/details?id=com.ninetyplus.muslim',
      },
    ],
    technologies: [
      'Kotlin',
      'AndroidX',
      'Jetpack Compose',
      'Room',
      'Paging3',
      'WorkManager',
      'Koin',
      'Coil',
      'Retrofit2',
      'Joda Time',
      'ExoPlayer',
      'Google Play IAB',
      'Firebase',
      'JUnit',
      'MockK',
      'Spotless',
      'Detekt',
    ],
    order: 5,
  },
  {
    name: 'LiveFot',
    description:
      'Spearheaded the development of “LiveFot” from scratch, a cross-platform Flutter app providing live score tracking, match updates, and score prediction tournaments, collaborating closely with the project owner and backend team.',
    date: 'Aug 2021',
    thumbnail: '/projects/livefot.webp',
    urls: [
      {
        name: 'Google Play',
        url: 'https://play.google.com/store/apps/details?id=com.livefot.live',
      },
      {
        name: 'App Store',
        url: 'https://apps.apple.com/ru/app/livefot/id6444708806?platform=iphone',
      },
    ],
    technologies: [
      'Dart',
      'Flutter',
      'MobX',
      'RxDart',
      'MobX',
      'Dio',
      'Retrofit',
      'Intl',
      'Freezed',
      'ObjectBox',
      'Firebase',
    ],
    order: 10,
  },
  {
    name: 'X-Mode XDK',
    client: 'Cincinnati AI Inc',
    description:
      'Worked on multiple modules for the “X-Mode XDK”, a location-tracking SDK that captures GPS location data, BLE, Bluetooth, and WiFi signals. Key modules worked on include location tracking, BLE beacons, logging and exception reporting (collection, batching, and sending), work scheduler, and a consent API module.',
    date: null,
    thumbnail: '/projects/xmode.png',
    urls: [
      {
        name: 'X-Mode',
        url: 'https://xmode.io/',
      },
    ],
    technologies: [
      'Kotlin',
      'AppCompat/AndroidX',
      'Room',
      'WorkManager',
      'Dagger',
      'RxJava',
      'Retrofit2',
      'OkHttp',
      'Firebase',
      'GMS Location',
      'GMS Nearby',
      'JUnit',
      'Mockito',
      'Espresso',
    ],
    order: 20,
  },
  {
    name: 'HARQ by Vectren',
    client: 'Cincinnati AI Inc',
    description:
      'Contributed to the development of the authentication and dashboard modules of the “HARQ“ app, which allows users to manage, monitor, and receive alerts about their home appliances.',
    date: null,
    thumbnail: '/projects/harq.png',
    technologies: [
      'Kotlin',
      'AndroidX',
      'Navigation Component',
      'Room',
      'Dagger',
      'RxJava',
      'Glide',
      'Retrofit2',
    ],
    order: 25,
  },
  {
    name: 'Quick Cart',
    client: 'Cincinnati AI Inc',
    description:
      'Worked on “Quick Cart”, a mobile app that enhances shopping experiences by allowing users to scan product barcodes, add them to their cart, and complete checkout and payment processes seamlessly.',
    date: null,
    technologies: [
      'Kotlin',
      'AndroidX',
      'Navigation Component',
      'Room',
      'Dagger',
      'RxJava',
      'Retrofit2',
      'Firebase',
      'Firebase Vision (ML Kit)',
    ],
    order: 30,
  },
  {
    name: 'Golf Caddy',
    client: 'Cincinnati AI Inc',
    description:
      'Developed “Golf Caddy”, a cross-platform golf round manager app using Flutter, integrated with the Golfbert API. This app enhances the golfing experience by managing rounds, tracking scores, and providing detailed insights into golf course layouts and hole-specific data.',
    date: 'Apr 2020',
    technologies: [
      'Dart',
      'Flutter',
      'Provider',
      'RxDart',
      'Intl',
      'ObjectBox',
      'Location',
    ],
    order: 35,
  },
  {
    name: 'Sharity App',
    client: 'Cairenes Solutions',
    description:
      "Cross-platform app that funds causes with everyday purchases, enabling users to make an impact by scanning product barcodes or receipts. Brands contribute 5-10 cents per product to nonprofits aligned with users' causes, supporting SDGs and various social goals.<br/>I led the development from scratch using Flutter for the mobile app and Micronaut for the backend.",
    date: 'Jun 2021',
    thumbnail: '/projects/sharity.png',
    technologies: [
      'Dart',
      'Flutter',
      'Firebase',
      'Firebase ML Kit',
      'MobX',
      'GetIt',
      'Injectable',
      'Dio',
      'Retrofit',
      'Camera',
      'RxDart',
      'Intl',
    ],
    order: 40,
  },
  {
    name: 'ThirdEye App',
    client: 'SARALAM TECHNOLOGIES LTD.',
    description:
      'Successfully provided maintenance and enhancements, including new feature implementation, bug fixes, and overall codebase upkeep.',
    date: '',
    thumbnail: '/projects/thirdeye.png',
    urls: [
      {
        name: 'Google Play',
        url: 'https://play.google.com/store/apps/details?id=com.saralam.realblock',
      },
    ],
    technologies: [
      'Java',
      'AndroidX',
      'Firebase (Auth, Firestore, Storage, Cloud Functions, Remote Config, FCM)',
      'Google Maps SDK',
      'Glide',
      'RxJava',
    ],
    order: 45,
  },
  {
    name: 'FunOn',
    description:
      'Successfully provided maintenance and enhancements, including new feature implementation, bug fixes, and overall codebase upkeep.',
    date: '',
    thumbnail: '/projects/funon.png',
    urls: [
      {
        name: 'Google Play',
        url: 'https://play.google.com/store/apps/details?id=com.raybytes.SMSAddict',
      },
    ],
    technologies: [
      'Java',
      'AppCompat',
      'RecyclerView',
      'Volley',
      'Glide',
      'AdMob',
    ],
    order: 50,
  },
  {
    name: 'Vault',
    client: 'Ninety+',
    description:
      'Android app designed to lock and hide private photos, videos, and files. Developed from scratch, it offers features such as securing files, hiding various media types, the option to hide the Vault icon, taking intruder selfies, and multiple lock options (pin, pattern, or password).',
    date: '',
    thumbnail: '/projects/vault.png',
    urls: [
      {
        name: 'Google Play',
        url: 'https://play.google.com/store/apps/details?id=com.bestapps.vaultapp',
      },
    ],
    technologies: [
      'Kotlin',
      'AndroidX',
      'WorkManager',
      'Room',
      'Dagger',
      'RxJava',
      'Glide',
      'Lottie',
      'Protobuf Lite',
      'Firebase',
      'JUnit',
      'Espresso',
    ],
    order: 55,
  },
  {
    name: 'ATM 4 Deaf',
    client: 'SmartCom-EG',
    description:
      "Android app that enables deaf and illiterate users to use ATMs independently. Utilizes OCR technology to translate text on the ATM's screen (Arabic/English) into Arabic sign language and spoken audio, with real-time highlighting for clarity. Achieved >98% accuracy in recognition, meeting client specifications.",
    date: 'Oct 2019',
    thumbnail: '/projects/atm4deaf.png',
    urls: [
      {
        name: 'ApkPure',
        url: 'https://apkpure.com/atm-4-deaf-illiterate/com.smartcom.atm4deaf',
      },
    ],
    technologies: ['Java', 'OkHttp', 'OCR'],
    order: 60,
  },
  {
    name: "Let's learn",
    description:
      'Cross-platform mobile app designed to empower young children with motor disorders to learn and write the Arabic alphabet and numbers. Developed from scratch, the app allows children to interactively trace letters/numbers, receive feedback on their attempts through scoring, and track their progress with exportable reports for therapists or parents.',
    date: 'Apr 2018',
    client: 'SmartCom-EG',
    thumbnail: '/projects/letslearn.png',
    urls: [
      {
        name: 'ApkPure',
        url: 'https://apkpure.com/%D9%87%D9%8A%D8%A7-%D9%86%D8%AA%D8%B9%D9%84%D9%85/com.softcom',
      },
    ],
    technologies: ['Java', 'LibGDX', 'Box2D', 'RxJava', 'Gson'],
    order: 65,
  },
  {
    name: 'Pronounce It',
    client: 'SmartCom-EG',
    date: 'May 2018',
    description:
      'Android app that teaches children how to pronounce Arabic words. It features various topics with a large collection of words, displaying pictures and pronunciations. Children can listen to words repeatedly, record their voice, receive feedback on accuracy, and parents can view detailed pronunciation reports.',
    thumbnail: '/projects/pronounceit.png',
    urls: [
      {
        name: 'ApkPure',
        url: 'https://apkpure.com/pronounce-it/com.smartcom.pronounceit',
      },
    ],
    technologies: [
      'Java',
      'Kotlin',
      'AppCompat',
      'Room',
      'RxJava',
      'Retrofit2',
      'Picasso',
      'Stetho',
      'Groupie',
      'Joda Time',
    ],
    order: 70,
  },
  {
    name: 'Android Development Training',
    client: 'Cincinnati AI Inc',
    description:
      'Conducted a comprehensive 3-month online Android development training for a new engineer joining the company, including daily 5-hour sessions with hands-on projects, code reviews, and ongoing support.',
    date: '',
    technologies: [
      'Kotlin',
      'MVVM',
      'MVP',
      'RxJava',
      'Dagger',
      'Retrofit2',
      'Custom Views',
    ],
    order: 900,
  },
];

export const certifications = [
  {
    order: 1,
    name: 'Google Developer Challenge Scholarship',
    date: 'Feb 2018',
    description: [
      'Accepted for the Google Developer Challenge Scholarship from tens of thousands of applicants.',
      'Received and successfully completed Udacity’s full Android Developer Nanodegree program.',
    ],
    url: {
      name: 'View Certificate',
      url: 'https://confirm.udacity.com/NAVPTAUZ',
    },
  },
];

export const blogPosts = [
  {
    order: 1,
    title:
      'Kotlin 2.0 Language Features from KotlinConf 2024: What’s New and What’s Next',
    date: 'May 2024',
    url: 'https://medium.com/@omarsahl/kotlin-language-features-from-kotlinconf-2024-whats-new-and-what-s-next-a4668eae5e9d',
    thumbnail:
      '/blog/kotlin-language-features-from-kotlinconf-2024-whats-new-and-whats-next.png',
  },
  {
    order: 2,
    title: 'Advanced Kotlin: Exploring Lesser-Known Syntax and Features',
    date: 'Jun 2024',
    url: 'https://medium.com/@omarsahl/advanced-kotlin-exploring-the-lesser-known-syntax-and-features-0f49e5da9c15',
    thumbnail:
      '/blog/advanced-kotlin-exploring-the-lesser-known-syntax-and-features.jpg',
  },
  {
    order: 3,
    title:
      'Animation and Masking in Jetpack Compose with the grahpicsLayer() and Drawing Modifiers',
    date: 'Sep 2024',
    url: 'https://proandroiddev.com/animation-and-masking-in-jetpack-compose-with-the-grahpicslayer-and-drawing-modifiers-138d3496c624',
    thumbnail:
      '/blog/animation-and-masking-in-jetpack-compose-with-the-grahpicslayer-and-drawing-modifiers.webp',
  },
  {
    order: 4,
    title:
      'Write Testable Time-Dependent Coroutine Code in Kotlin: Avoid System.currentTimeMillis',
    date: 'Mar 2025',
    url: 'https://medium.com/@omarsahl/write-testable-time-dependent-coroutine-code-in-kotlin-avoid-system-currenttimemillis-fb9b7eb1ddf9',
    thumbnail:
      '/blog/write-testable-time-dependent-coroutine-code-in-kotlin-avoid-system-currenttimemillis.webp',
  },
];

export const socials = [
  {
    title: 'GitHub',
    url: 'https://github.com/omarsahl',
    icon: 'github',
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/omarsahl',
    icon: 'linkedin',
  },
  {
    title: 'X (previously Twitter)',
    url: 'https://x.com/omarsahl_',
    icon: 'x',
  },
  {
    title: 'Instagram',
    url: 'https://www.instagram.com/omarsahl_',
    icon: 'instagram',
  },
];
