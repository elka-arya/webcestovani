const CONTINENTS = [
  { id: 'evropa', emoji: '🌿' },
  { id: 'asie', emoji: '🏔️' },
  { id: 'afrika', emoji: '🌅' },
  { id: 'severni-amerika', emoji: '🌲' },
  { id: 'jizni-amerika', emoji: '🦜' },
  { id: 'oceanie', emoji: '🐚' },
];

const COUNTRIES = {
  evropa: ['cesko', 'rakousko', 'norsko', 'island'],
  asie: ['japonsko', 'thajsko'],
  afrika: ['jihoafricka-republika'],
  'severni-amerika': ['kanada', 'usa'],
  'jizni-amerika': ['chile', 'argentina'],
  oceanie: ['novy-zeland'],
};

const ARTICLES = [
  {
    id: 1,
    date: '2025-10-12',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80',
    lat: 49.0833,
    lng: 13.6167,
    tags: ['evropa', 'cesko', 'sumava', 'se-psem'],
    dogFriendly: true,
    content: {
      cs: {
        title: 'Ranní procházka k jezeru v Šumavě',
        excerpt: 'Tichá hladina, mlha nad vodou a spokojená Arya po boku. Šumava na podzim je kouzelná.',
        body: [
          'Vstávali jsme brzy, ještě než se nad horizontem objevilo slunce. Arya už stála u dveří — černá srst, věrný pohled, tiché vzrušení. Šumava v říjnu voní jehličím a vlhkou zemí.',
          'Cesta k jezeru vedla lesem, kde pod nohama šustily listí a kapky rosy. Arya běžela volně po stezce, občas se zastavila a čichala k borovicím. U vody jsme seděly na břehu a dívaly se, jak se mlha pomalu zvedá.',
          'Takové chvíle jsou důvod, proč cestuju. Bez spěchu, s fenou, která miluje stejná místa jako já.',
        ],
      },
      en: {
        title: 'Morning walk to a lake in Šumava',
        excerpt: 'Still water, mist above the surface and happy Arya by my side. Šumava in autumn is magical.',
        body: [
          'We woke early, before the sun appeared on the horizon. Arya was already at the door — black coat, loyal gaze, quiet excitement. Šumava in October smells of pine and damp earth.',
          'The path to the lake led through forest, leaves rustling underfoot and dew on every branch. Arya ran free along the trail, stopping now and then to sniff the pines. At the water we sat on the shore and watched the mist slowly lift.',
          'Moments like these are why I travel. No rush, with a dog who loves the same places I do.',
        ],
      },
      es: {
        title: 'Paseo matutino a un lago en Šumava',
        excerpt: 'Agua quieta, niebla sobre la superficie y Arya feliz a mi lado. Šumava en otoño es mágica.',
        body: [
          'Nos despertamos temprano, antes de que saliera el sol. Arya ya estaba en la puerta — pelaje negro, mirada fiel, emoción silenciosa. Šumava en octubre huele a pino y tierra húmeda.',
          'El camino al lago pasaba por el bosque, hojas crujiendo bajo los pies y rocío en cada rama. Arya corría libre por el sendero, parando de vez en cuando para olfatear los pinos. En la orilla nos sentamos y vimos cómo la niebla se levantaba.',
          'Momentos así son la razón por la que viajo. Sin prisa, con una perra que ama los mismos lugares que yo.',
        ],
      },
    },
  },
  {
    id: 2,
    date: '2025-08-03',
    image: 'https://images.unsplash.com/photo-1499678329028-101435549a4e?w=1200&q=80',
    lat: 47.8095,
    lng: 13.0550,
    tags: ['evropa', 'rakousko', 'salzburg', 'se-psem'],
    dogFriendly: true,
    content: {
      cs: {
        title: 'Salzburg: zahrady a psí parky',
        excerpt: 'Rakousko je pro cestovatele se psem příjemné — zelené parcoury, jezera a klidné stezky.',
        body: [
          'Salzburg jsme navštívily s Aryou na prodloužený víkend. Město je krásné, ale my hledaly především zeleň — Mirabellská zahrada, stezky podél řeky Salzach a okolní kopce.',
          'Rakousko má skvělou síť psích parků a většina restaurací s terasou psa uvítá. Arya si užila každý trávník i každou stezku podél jezera.',
          'Tip pro cestovatele se psem: vždy si předem ověřte pravidla v národních parcích. V tomto regionu jsou ale stezky velmi vstřícné.',
        ],
      },
      en: {
        title: 'Salzburg: gardens and dog parks',
        excerpt: 'Austria is welcoming for travellers with dogs — green paths, lakes and quiet trails.',
        body: [
          'We visited Salzburg with Arya for a long weekend. The city is beautiful, but we mostly sought greenery — Mirabell Gardens, paths along the Salzach river and the surrounding hills.',
          'Austria has a great network of dog parks and most terrace restaurants welcome dogs. Arya enjoyed every lawn and every lakeside trail.',
          'Tip for dog travellers: always check national park rules in advance. In this region, however, trails are very welcoming.',
        ],
      },
      es: {
        title: 'Salzburgo: jardines y parques para perros',
        excerpt: 'Austria es acogedora para viajeros con perro — caminos verdes, lagos y senderos tranquilos.',
        body: [
          'Visitamos Salzburgo con Arya en un fin de semana largo. La ciudad es hermosa, pero buscamos sobre todo verde — jardines de Mirabell, senderos junto al río Salzach y colinas cercanas.',
          'Austria tiene una gran red de parques para perros y la mayoría de terrazas los aceptan. Arya disfrutó cada césped y cada sendero junto al lago.',
          'Consejo: comprueba siempre las normas de los parques nacionales. En esta región, los senderos son muy acogedores.',
        ],
      },
    },
  },
  {
    id: 3,
    date: '2025-06-18',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80',
    lat: 62.4722,
    lng: 6.1496,
    tags: ['evropa', 'norsko', 'alesund', 'se-psem'],
    dogFriendly: true,
    content: {
      cs: {
        title: 'Fjordy a dlouhé stezky v Norsku',
        excerpt: 'Sever, mořský vánek a nekonečné stezky. Arya milovala každý krok podél vody.',
        body: [
          'Norsko je země, kde se cítíte malí — a zároveň svobodní. Fjordy, vodopády, nekonečné stezky podél moře. Arya běhala po skalách jako doma.',
          'V Ålesundu jsme našly klidné místo u vody. Ráno jsme chodily po stezkách, odpoledne seděly na břehu a pozorovaly loďky. Severní vánek foukal jemně.',
          'Cestování se psem v Norsku vyžaduje plánování — ale odměna je obrovská. Příroda tady dýchá klidem.',
        ],
      },
      en: {
        title: 'Fjords and long trails in Norway',
        excerpt: 'The north, sea breeze and endless paths. Arya loved every step along the water.',
        body: [
          'Norway is a country where you feel small — and free at the same time. Fjords, waterfalls, endless trails along the sea. Arya ran over the rocks like she belonged there.',
          'In Ålesund we found a quiet spot by the water. Mornings on the trails, afternoons on the shore watching boats. The northern breeze blew gently.',
          'Travelling with a dog in Norway takes planning — but the reward is immense. Nature here breathes peace.',
        ],
      },
      es: {
        title: 'Fiordos y largos senderos en Noruega',
        excerpt: 'El norte, brisa marina y caminos infinitos. Arya amó cada paso junto al agua.',
        body: [
          'Noruega es un país donde te sientes pequeña — y libre a la vez. Fiordos, cascadas, senderos interminables junto al mar. Arya corría por las rocas como en casa.',
          'En Ålesund encontramos un rincón tranquilo junto al agua. Mañanas en los senderos, tardes en la orilla mirando barcos. La brisa del norte soplaba suave.',
          'Viajar con perro en Noruega requiere planificación — pero la recompensa es enorme. La naturaleza aquí respira calma.',
        ],
      },
    },
  },
  {
    id: 4,
    date: '2024-09-22',
    image: 'https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=1200&q=80',
    lat: 64.1466,
    lng: -21.9426,
    tags: ['evropa', 'island', 'reykjavik'],
    dogFriendly: false,
    content: {
      cs: {
        title: 'Island: geotermální prameny a černé pláže',
        excerpt: 'Dračí dech, mořský vánek a nezapomenutelná krajina. Cestování se psem vyžaduje plánování.',
        body: [
          'Island bez Arye — tentokrát jsem jela sama. Země ohně a ledu, kde se setkává zeleň s černým pískem a modrá voda s párou z pramenů.',
          'Reykjavík je malý, útulný a plný umění. Vyjela jsem na jih — černé pláže Reynisfjara, vodopády, nekonečné louky. Vítr tu fouká opravdu silně.',
          'Island chci vrátit se psem — ale až po důkladném prozkoumání pravidel. Prozatím je to vzpomínka, která voní sírou a mořem.',
        ],
      },
      en: {
        title: 'Iceland: hot springs and black beaches',
        excerpt: 'Dragon breath, sea breeze and unforgettable landscape. Travelling with a dog takes planning here.',
        body: [
          'Iceland without Arya — this time I travelled alone. A land of fire and ice, where green meets black sand and blue water meets steam from springs.',
          'Reykjavík is small, cosy and full of art. I drove south — Reynisfjara black beaches, waterfalls, endless meadows. The wind blows strong here.',
          'I want to return to Iceland with Arya — but only after researching the rules thoroughly. For now it remains a memory that smells of sulphur and sea.',
        ],
      },
      es: {
        title: 'Islandia: aguas termales y playas negras',
        excerpt: 'Aliento de dragón, brisa marina y paisaje inolvidable. Viajar con perro aquí requiere planificación.',
        body: [
          'Islandia sin Arya — esta vez viajé sola. Tierra de fuego y hielo, donde el verde se encuentra con arena negra y el agua azul con vapor de manantiales.',
          'Reykjavík es pequeña, acogedora y llena de arte. Conduje al sur — playas negras de Reynisfjara, cascadas, praderas infinitas. El viento sopla fuerte aquí.',
          'Quiero volver a Islandia con Arya — pero tras investigar bien las normas. Por ahora es un recuerdo que huele a azufre y mar.',
        ],
      },
    },
  },
  {
    id: 5,
    date: '2024-03-08',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80',
    lat: -50.9423,
    lng: -73.4068,
    tags: ['jizni-amerika', 'chile', 'patagonie'],
    dogFriendly: false,
    content: {
      cs: {
        title: 'Patagonie: vítr na konci světa',
        excerpt: 'Jižní Amerika v celé síle — hory, ledovce a nekonečná obloha. Sen každého dobrodruha.',
        body: [
          'Patagonie je místo, kde cítíte okraj světa. Vítr, hory, ledovce a obloha, která se zdá nekonečná. Tady člověk zpomalí — nebo spadne.',
          'Chile na jihu je drsné a krásné zároveň. Treky jsou náročné, ale odměna — výhled na ledovce a jezera barvy, jakou jinde neuvidíte.',
          'Arya tu zatím nebyla. Ale jednou — až najdeme správnou trasu — ji tam vezmu. Patagonie stojí za každý krok.',
        ],
      },
      en: {
        title: 'Patagonia: wind at the end of the world',
        excerpt: 'South America in full force — mountains, glaciers and endless sky. Every adventurer\'s dream.',
        body: [
          'Patagonia is where you feel the edge of the world. Wind, mountains, glaciers and a sky that seems infinite. Here you slow down — or you fall.',
          'Southern Chile is harsh and beautiful at once. The treks are demanding, but the reward — views of glaciers and lakes in colours you won\'t see elsewhere.',
          'Arya hasn\'t been here yet. But one day — once we find the right route — I\'ll bring her. Patagonia is worth every step.',
        ],
      },
      es: {
        title: 'Patagonia: viento en el fin del mundo',
        excerpt: 'América del Sur en pleno — montañas, glaciares y cielo infinito. El sueño de toda aventurera.',
        body: [
          'Patagonia es donde sientes el borde del mundo. Viento, montañas, glaciares y un cielo que parece infinito. Aquí uno desacelera — o cae.',
          'El sur de Chile es duro y hermoso a la vez. Los trekkings exigen esfuerzo, pero la recompensa — glaciares y lagos de colores únicos.',
          'Arya aún no ha estado aquí. Pero algún día — cuando encontremos la ruta adecuada — la traeré. Patagonia vale cada paso.',
        ],
      },
    },
  },
  {
    id: 6,
    date: '2023-11-15',
    image: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=1200&q=80',
    lat: -44.6414,
    lng: 167.8973,
    tags: ['oceanie', 'novy-zeland', 'milford-sound', 'se-psem'],
    dogFriendly: true,
    content: {
      cs: {
        title: 'Nový Zéland: jezero a horizont',
        excerpt: 'Tyrkysová voda, zelené kopce a pocit, že svět dýchá pomalu. Oceánie jako z pohádky.',
        body: [
          'Milford Sound je místo, které fotky nezachytí. Vysoké skály, vodopády, ticho — a Arya u nohou, klidná a spokojená.',
          'Nový Zéland je pro psy relativně vstřícný, ale v národních parcích platí přísná pravidla. Plánovaly jsme trasy dopředu a vždy jsme našly krásná místa.',
          'Oceánie voní deštěm a zelení. Je to kontinent, kam se chci vracet — s Aryou i bez ní.',
        ],
      },
      en: {
        title: 'New Zealand: lake and horizon',
        excerpt: 'Turquoise water, green hills and a sense that the world breathes slowly. Oceania like a fairy tale.',
        body: [
          'Milford Sound is a place photos cannot capture. Tall cliffs, waterfalls, silence — and Arya at my feet, calm and content.',
          'New Zealand is relatively dog-friendly, but national parks have strict rules. We planned routes ahead and always found beautiful spots.',
          'Oceania smells of rain and green. A continent I want to return to — with Arya and without.',
        ],
      },
      es: {
        title: 'Nueva Zelanda: lago y horizonte',
        excerpt: 'Agua turquesa, colinas verdes y la sensación de que el mundo respira despacio. Oceanía como un cuento.',
        body: [
          'Milford Sound es un lugar que las fotos no capturan. Acantilados altos, cascadas, silencio — y Arya a mis pies, tranquila y contenta.',
          'Nueva Zelanda es relativamente acogedora con perros, pero los parques nacionales tienen normas estrictas. Planificamos rutas y siempre encontramos lugares hermosos.',
          'Oceanía huele a lluvia y verde. Un continente al que quiero volver — con Arya y sin ella.',
        ],
      },
    },
  },
  {
    id: 7,
    date: '2023-05-20',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=80',
    lat: 43.0642,
    lng: 141.3469,
    tags: ['asie', 'japonsko', 'sapporo'],
    dogFriendly: false,
    content: {
      cs: {
        title: 'Hokkaidó: lesy a horké prameny',
        excerpt: 'Japonsko na severu — klid, příroda a respekt k okolí. Asie v jemném tempu.',
        body: [
          'Hokkaidó je jiné Japonsko — méně lidí, více lesů, více prostoru. Sapporo je brána do divoké přírody na severu.',
          'Onsen a lesy, jezero a hory v pozadí. Japonsko má hluboký respekt k přírodě — a to je cítit na každém kroku.',
          'Se psem by to chtělo víc researchu. Ale Hokkaidó zůstává na seznamu — tentokrát jsem jela sama, příště možná s Aryou.',
        ],
      },
      en: {
        title: 'Hokkaido: forests and hot springs',
        excerpt: 'Northern Japan — calm, nature and respect for surroundings. Asia at a gentle pace.',
        body: [
          'Hokkaido is a different Japan — fewer people, more forest, more space. Sapporo is the gateway to wild nature in the north.',
          'Onsen and forests, a lake and mountains in the background. Japan has a deep respect for nature — you feel it with every step.',
          'Travelling with a dog would need more research. But Hokkaido stays on the list — this time alone, maybe with Arya next time.',
        ],
      },
      es: {
        title: 'Hokkaido: bosques y aguas termales',
        excerpt: 'Japón del norte — calma, naturaleza y respeto al entorno. Asia a un ritmo suave.',
        body: [
          'Hokkaido es un Japón distinto — menos gente, más bosque, más espacio. Sapporo es la puerta a la naturaleza salvaje del norte.',
          'Onsen y bosques, un lago y montañas al fondo. Japón tiene un profundo respeto por la naturaleza — se siente en cada paso.',
          'Viajar con perro requeriría más investigación. Pero Hokkaido sigue en la lista — esta vez sola, quizá con Arya la próxima.',
        ],
      },
    },
  },
  {
    id: 8,
    date: '2022-09-01',
    image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=1200&q=80',
    lat: 51.4968,
    lng: -115.9281,
    tags: ['severni-amerika', 'kanada', 'banff', 'se-psem'],
    dogFriendly: true,
    content: {
      cs: {
        title: 'Banff: alpská jezera v Kanadě',
        excerpt: 'Emeraldové jezero, borovicové lesy a čistý horský vzduch. Severní Amerika v nejkrásnější podobě.',
        body: [
          'Banff National Park je ikona — jezero Louise, hory, lesy. Arya milovala stezky podél vody a borovicové stíny.',
          'Kanada je pro cestovatele se psem jedna z nejlepších destinací. Prostor, příroda, respekt k psům — téměř všude.',
          'Ráno u jezera, odpoledne na stezce, večer ticho a hvězdy. Banff je místo, kam se chci vrátit.',
        ],
      },
      en: {
        title: 'Banff: alpine lakes in Canada',
        excerpt: 'Emerald lake, pine forests and clean mountain air. North America at its finest.',
        body: [
          'Banff National Park is an icon — Lake Louise, mountains, forests. Arya loved the trails along the water and the pine shade.',
          'Canada is one of the best destinations for travellers with dogs. Space, nature, respect for dogs — almost everywhere.',
          'Morning by the lake, afternoon on the trail, evening silence and stars. Banff is a place I want to return to.',
        ],
      },
      es: {
        title: 'Banff: lagos alpinos en Canadá',
        excerpt: 'Lago esmeralda, bosques de pino y aire limpio de montaña. América del Norte en su mejor forma.',
        body: [
          'Banff National Park es un icono — lago Louise, montañas, bosques. Arya amó los senderos junto al agua y la sombra de los pinos.',
          'Canadá es uno de los mejores destinos para viajar con perro. Espacio, naturaleza, respeto — casi en todas partes.',
          'Mañana junto al lago, tarde en el sendero, noche en silencio y estrellas. Banff es un lugar al que quiero volver.',
        ],
      },
    },
  },
];
