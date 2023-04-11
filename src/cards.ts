const cards = [
  ['category-1', 'category-2', 'category-3', 'category-4', 'category-5', 'category-6'],
  ['page-1', 'page-2', 'page-3', 'page-4', 'page-5', 'page-6'],
  [
    [
      {
        word: 'pray',
        translation: 'молиться',
        image: 'img/laugh.jpg',
        audioSrc: 'audio2/pray-us.mp3',
        audioQuote: 'MR/ringtones/pray.mp3',
        textQuote: 'Then I parted my clothes where I thought the readiest way lay to my heart and I prayed to all the gods that as soon as I was dead I might find myself with my brother.',
        chapter: 'CHAPTER THREE',
        book: 'The Horse and His Boy',
        link: 'https://predanie.ru/book/218226-the-horse-and-his-boy/',
      },
      {
        word: 'belong',
        translation: 'принадлежать',
        image: 'img/dance.jpg',
        audioSrc: 'audio2/belong-us.mp3',
        audioQuote: 'MR/ringtones/belong.mp3',
        textQuote: 'Then I parted my clothes where I thought the readiest way lay to my heart and I prayed to all the gods that as soon as I was dead I might find myself with my brother.',
        chapter: 'CHAPTER THREE',
        book: 'The Horse and His Boy',
        link: 'https://predanie.ru/book/218226-the-horse-and-his-boy/',
      },
      {
        word: 'against',
        translation: 'против',
        image: 'img/dive.jpg',
        audioSrc: 'audio2/against-us.mp3',
        audioQuote: 'MR/music/against.mp3',
        textQuote: 'Then I parted my clothes where I thought the readiest way lay to my heart and I prayed to all the gods that as soon as I was dead I might find myself with my brother.',
        chapter: 'CHAPTER THREE',
        book: 'The Horse and His Boy',
        link: 'https://predanie.ru/book/218226-the-horse-and-his-boy/',
      },
      {
        word: 'explain',
        translation: 'объяснять',
        image: 'img/draw.jpg',
        audioSrc: 'audio2/explain-us.mp3',
        audioQuote: 'MR/music/explain.mp3',
        textQuote: 'Then I parted my clothes where I thought the readiest way lay to my heart and I prayed to all the gods that as soon as I was dead I might find myself with my brother.',
        chapter: 'CHAPTER THREE',
        book: 'The Horse and His Boy',
        link: 'https://predanie.ru/book/218226-the-horse-and-his-boy/',
      },
      {
        word: 'bow',
        translation: 'кланяться',
        image: 'img/fish.jpg',
        audioSrc: 'audio2/bow-us.mp3',
        audioQuote: 'MR/music/bow.mp3',
        textQuote: 'Then I parted my clothes where I thought the readiest way lay to my heart and I prayed to all the gods that as soon as I was dead I might find myself with my brother.',
        chapter: 'CHAPTER THREE',
        book: 'The Horse and His Boy',
        link: 'https://predanie.ru/book/218226-the-horse-and-his-boy/',
      },
      {
        word: 'approve',
        translation: 'одобрять',
        image: 'img/fly.jpg',
        audioSrc: 'audio2/approve-us.mp3',
        audioQuote: 'MR/music/approve.mp3',
        textQuote: 'Then I parted my clothes where I thought the readiest way lay to my heart and I prayed to all the gods that as soon as I was dead I might find myself with my brother.',
        chapter: 'CHAPTER THREE',
        book: 'The Horse and His Boy',
        link: 'https://predanie.ru/book/218226-the-horse-and-his-boy/',
      },
      {
        word: 'avoid',
        translation: 'избегать',
        image: 'img/hug.jpg',
        audioSrc: 'audio2/avoid-us.mp3',
        audioQuote: 'MR/music/avoid.mp3',
        textQuote: 'Then I parted my clothes where I thought the readiest way lay to my heart and I prayed to all the gods that as soon as I was dead I might find myself with my brother.',
        chapter: 'CHAPTER THREE',
        book: 'The Horse and His Boy',
        link: 'https://predanie.ru/book/218226-the-horse-and-his-boy/',
      },
      {
        word: 'recall',
        translation: 'вспоминать',
        image: 'img/jump.jpg',
        audioSrc: 'audio2/recall-us.mp3',
        audioQuote: 'MR/music/recall.mp3',
        textQuote: 'Then I parted my clothes where I thought the readiest way lay to my heart and I prayed to all the gods that as soon as I was dead I might find myself with my brother.',
        chapter: 'CHAPTER THREE',
        book: 'The Horse and His Boy',
        link: 'https://predanie.ru/book/218226-the-horse-and-his-boy/',
      },
    ],

    [
      {
        word: 'hire',
        translation: 'нанимать',
        image: 'img/open.jpg',
        audioSrc: 'audio2/hire-us.mp3',
        audioQuote: 'MR/ringtones/hire.mp3',
      },
      {
        word: 'fumble',
        translation: 'нащупывать',
        image: 'img/play.jpg',
        audioSrc: 'audio2/fumble-us.mp3',
        audioQuote: 'MR/music/fumble.mp3',
      },
      {
        word: 'deprive',
        translation: 'лишать',
        image: 'img/point.jpg',
        audioSrc: 'audio2/deprive-us.mp3',
        audioQuote: 'MR/music/deprive.mp3',
      },
      {
        word: 'contempt',
        translation: 'презрение',
        image: 'img/ride.jpg',
        audioSrc: 'audio2/contempt-us.mp3',
        audioQuote: 'MR/music/contempt.mp3',
      },
      {
        word: 'achieve',
        translation: 'достигать',
        image: 'img/run.jpg',
        audioSrc: 'audio2/achieve-us.mp3',
        audioQuote: 'MR/music/achieve.mp3',
      },
      {
        word: 'extend',
        translation: 'вытягивать, расширять',
        image: 'img/sing.jpg',
        audioSrc: 'audio2/extend-us.mp3',
        audioQuote: 'MR/music/extend.mp3',
      },
      {
        word: 'recognize',
        translation: 'узнавать',
        image: 'img/skip.jpg',
        audioSrc: 'audio2/recognize-us.mp3',
        audioQuote: 'MR/music/recognize.mp3',
      },
      {
        word: 'offer',
        translation: 'предложение',
        image: 'img/swim.jpg',
        audioSrc: 'audio2/offer-us.mp3',
        audioQuote: 'MR/ringtones/offer.mp3',
      },
    ],

    [
      {
        word: 'rub',
        translation: 'тереть',
        image: 'img/cat.jpg',
        audioSrc: 'audio2/rub-us.mp3',
        audioQuote: 'MR/music/rub.mp3',
      },
      {
        word: 'stuff',
        translation: 'вещи, хлам',
        image: 'img/chick.jpg',
        audioSrc: 'audio2/stuff-us.mp3',
        audioQuote: 'MR/music/stuff.mp3',
      },
      {
        word: 'suppose',
        translation: 'полагать',
        image: 'img/chicken.jpg',
        audioSrc: 'audio2/suppose-us.mp3',
        audioQuote: 'MR/music/suppose.mp3',
      },
      {
        word: 'wish',
        translation: 'страстно желать',
        image: 'img/dog.jpg',
        audioSrc: 'audio2/wish-us.mp3',
        audioQuote: 'MR/music/wish.mp3',
      },
      {
        word: 'hesitate',
        translation: 'колебаться',
        image: 'img/horse.jpg',
        audioSrc: 'audio2/hesitate-us.mp3',
        audioQuote: 'MR/ringtones/hesitate.mp3',
      },
      {
        word: 'chase',
        translation: 'преследовать',
        image: 'img/pig.jpg',
        audioSrc: 'audio2/chase-us.mp3',
        audioQuote: 'MR/ringtones/chase.mp3',
      },
      {
        word: 'hide',
        translation: 'прятать',
        image: 'img/rabbit.jpg',
        audioSrc: 'audio2/hide-us.mp3',
        audioQuote: 'MR/ringtones/hide.mp3',
      },
      {
        word: 'path',
        translation: 'тропа',
        image: 'img/sheep.jpg',
        audioSrc: 'audio2/path-us.mp3',
        audioQuote: 'MR/ringtones/path.mp3',
      },
    ],

    [
      {
        word: 'weep',
        translation: 'плакать',
        image: 'img/weep-us.jpg',
        audioSrc: 'audio2/weep-us.mp3',
        audioQuote: 'MR/ringtones/weep.mp3',
      },
      {
        word: 'stagger',
        translation: 'шататься',
        image: 'img/fish1.jpg',
        audioSrc: 'audio2/stagger-us.mp3',
        audioQuote: 'MR/ringtones/stagger.mp3',
      },
      {
        word: 'persuade',
        translation: 'уговорить',
        image: 'img/frog.jpg',
        audioSrc: 'audio2/persuade-us.mp3',
        audioQuote: 'MR/ringtones/persuade.mp3',
      },
      {
        word: 'observe',
        translation: 'заметить',
        image: 'img/giraffe.jpg',
        audioSrc: 'audio2/observe-us.mp3',
        audioQuote: 'MR/ringtones/observed.mp3',
      },
      {
        word: 'force',
        translation: 'воздействовать',
        image: 'img/lion.jpg',
        audioSrc: 'audio2/force-us.mp3',
        audioQuote: 'MR/ringtones/force.mp3',
      },
      {
        word: 'shore',
        translation: 'берег',
        image: 'img/mouse.jpg',
        audioSrc: 'audio2/shore-us.mp3',
        audioQuote: 'MR/ringtones/shore.mp3',
      },
      {
        word: 'vicious',
        translation: 'порочный, злой',
        image: 'img/turtle.jpg',
        audioSrc: 'audio2/vicious-us.mp3',
        audioQuote: 'MR/ringtones/vicious.mp3',
      },
      {
        word: 'route',
        translation: 'маршрут',
        image: 'img/dolphin.jpg',
        audioSrc: 'audio2/route-us.mp3',
        audioQuote: 'MR/ringtones/route.mp3',
      },
    ],

    [
      {
        word: 'skirt',
        translation: 'юбка',
        image: 'img/skirt.jpg',
        audioSrc: 'audio/skirt.mp3',
      },
      {
        word: 'pants',
        translation: 'брюки',
        image: 'img/pants.jpg',
        audioSrc: 'audio/pants.mp3',
      },
      {
        word: 'blouse',
        translation: 'блузка',
        image: 'img/blouse.jpg',
        audioSrc: 'audio/blouse.mp3',
      },
      {
        word: 'dress',
        translation: 'платье',
        image: 'img/dress.jpg',
        audioSrc: 'audio/dress.mp3',
      },
      {
        word: 'boot',
        translation: 'ботинок',
        image: 'img/boot.jpg',
        audioSrc: 'audio/boot.mp3',
      },
      {
        word: 'shirt',
        translation: 'рубашка',
        image: 'img/shirt.jpg',
        audioSrc: 'audio/shirt.mp3',
      },
      {
        word: 'coat',
        translation: 'пальто',
        image: 'img/coat.jpg',
        audioSrc: 'audio/coat.mp3',
      },
      {
        word: 'shoe',
        translation: 'туфли',
        image: 'img/shoe.jpg',
        audioSrc: 'audio/shoe.mp3',
      },
    ],

    [
      {
        word: 'sad',
        translation: 'грустный',
        image: 'img/sad.jpg',
        audioSrc: 'audio/sad.mp3',
      },
      {
        word: 'angry',
        translation: 'сердитый',
        image: 'img/angry.jpg',
        audioSrc: 'audio/angry.mp3',
      },
      {
        word: 'happy',
        translation: 'счастливый',
        image: 'img/happy.jpg',
        audioSrc: 'audio/happy.mp3',
      },
      {
        word: 'tired',
        translation: 'уставший',
        image: 'img/tired.jpg',
        audioSrc: 'audio/tired.mp3',
      },
      {
        word: 'surprised',
        translation: 'удивлённый',
        image: 'img/surprised.jpg',
        audioSrc: 'audio/surprised.mp3',
      },
      {
        word: 'scared1',
        translation: 'испуганный',
        image: 'img/scared.jpg',
        audioSrc: 'audio/scared.mp3',
      },
      {
        word: 'smile1',
        translation: 'улыбка',
        image: 'img/smile.jpg',
        audioSrc: 'audio/smile.mp3',
      },
      {
        word: 'laugh1',
        translation: 'смех',
        image: 'img/laugh.jpg',
        audioSrc: 'audio/laugh.mp3',
      },
    ],

    // [],

    // [],

    // [],

    // [],

    // [],

    // [],

    // [],

    // [],

    // [],

    // [],

    // [],

    // [],

    // [],

    // [],

    // [],
    // [],
    // [],
    // [],
    // [],
    // [],
    // [],
    // [],
    // [],
    // [],
  ],
  [
    [
      {
        word: 'cry',
        translation: 'плакать',
        image: 'img/cry.jpg',
        audioSrc: 'audio/cry.mp3',
      },
      {
        word: 'dance',
        translation: 'танцевать',
        image: 'img/dance.jpg',
        audioSrc: 'audio/dance.mp3',
      },
      {
        word: 'dive',
        translation: 'нырять',
        image: 'img/dive.jpg',
        audioSrc: 'audio/dive.mp3',
      },
      {
        word: 'draw',
        translation: 'рисовать',
        image: 'img/draw.jpg',
        audioSrc: 'audio/draw.mp3',
      },
      {
        word: 'fish',
        translation: 'ловить рыбу',
        image: 'img/fish.jpg',
        audioSrc: 'audio/fish.mp3',
      },
      {
        word: 'fly',
        translation: 'летать',
        image: 'img/fly.jpg',
        audioSrc: 'audio/fly.mp3',
      },
      {
        word: 'hug',
        translation: 'обнимать',
        image: 'img/hug.jpg',
        audioSrc: 'audio/hug.mp3',
      },
      {
        word: 'jump',
        translation: 'прыгать',
        image: 'img/jump.jpg',
        audioSrc: 'audio/jump.mp3',
      },
    ],

    [
      {
        word: 'open',
        translation: 'открывать',
        image: 'img/open.jpg',
        audioSrc: 'audio/open.mp3',
      },
      {
        word: 'play',
        translation: 'играть',
        image: 'img/play.jpg',
        audioSrc: 'audio/play.mp3',
      },
      {
        word: 'point',
        translation: 'указывать',
        image: 'img/point.jpg',
        audioSrc: 'audio/point.mp3',
      },
      {
        word: 'ride',
        translation: 'ездить',
        image: 'img/ride.jpg',
        audioSrc: 'audio/ride.mp3',
      },
      {
        word: 'run',
        translation: 'бегать',
        image: 'img/run.jpg',
        audioSrc: 'audio/run.mp3',
      },
      {
        word: 'sing',
        translation: 'петь',
        image: 'img/sing.jpg',
        audioSrc: 'audio/sing.mp3',
      },
      {
        word: 'skip',
        translation: 'прыгать',
        image: 'img/skip.jpg',
        audioSrc: 'audio/skip.mp3',
      },
      {
        word: 'swim',
        translation: 'плавать',
        image: 'img/swim.jpg',
        audioSrc: 'audio/swim.mp3',
      },
    ],

    [
      {
        word: 'cat',
        translation: 'кот',
        image: 'img/cat.jpg',
        audioSrc: 'audio/cat.mp3',
      },
      {
        word: 'chick',
        translation: 'цыплёнок',
        image: 'img/chick.jpg',
        audioSrc: 'audio/chick.mp3',
      },
      {
        word: 'chicken',
        translation: 'курица',
        image: 'img/chicken.jpg',
        audioSrc: 'audio/chicken.mp3',
      },
      {
        word: 'dog',
        translation: 'собака',
        image: 'img/dog.jpg',
        audioSrc: 'audio/dog.mp3',
      },
      {
        word: 'horse',
        translation: 'лошадь',
        image: 'img/horse.jpg',
        audioSrc: 'audio/horse.mp3',
      },
      {
        word: 'pig',
        translation: 'свинья',
        image: 'img/pig.jpg',
        audioSrc: 'audio/pig.mp3',
      },
      {
        word: 'rabbit',
        translation: 'кролик',
        image: 'img/rabbit.jpg',
        audioSrc: 'audio/rabbit.mp3',
      },
      {
        word: 'sheep',
        translation: 'овца',
        image: 'img/sheep.jpg',
        audioSrc: 'audio/sheep.mp3',
      },
    ],

    [
      {
        word: 'bird',
        translation: 'птица',
        image: 'img/bird.jpg',
        audioSrc: 'audio/bird.mp3',
      },
      {
        word: 'fish',
        translation: 'рыба',
        image: 'img/fish1.jpg',
        audioSrc: 'audio/fish.mp3',
      },
      {
        word: 'frog',
        translation: 'жаба',
        image: 'img/frog.jpg',
        audioSrc: 'audio/frog.mp3',
      },
      {
        word: 'giraffe',
        translation: 'жирафа',
        image: 'img/giraffe.jpg',
        audioSrc: 'audio/giraffe.mp3',
      },
      {
        word: 'lion',
        translation: 'лев',
        image: 'img/lion.jpg',
        audioSrc: 'audio/lion.mp3',
      },
      {
        word: 'mouse',
        translation: 'мышь',
        image: 'img/mouse.jpg',
        audioSrc: 'audio/mouse.mp3',
      },
      {
        word: 'turtle',
        translation: 'черепаха',
        image: 'img/turtle.jpg',
        audioSrc: 'audio/turtle.mp3',
      },
      {
        word: 'dolphin',
        translation: 'дельфин',
        image: 'img/dolphin.jpg',
        audioSrc: 'audio/dolphin.mp3',
      },
    ],

    [
      {
        word: 'skirt',
        translation: 'юбка',
        image: 'img/skirt.jpg',
        audioSrc: 'audio/skirt.mp3',
      },
      {
        word: 'pants',
        translation: 'брюки',
        image: 'img/pants.jpg',
        audioSrc: 'audio/pants.mp3',
      },
      {
        word: 'blouse',
        translation: 'блузка',
        image: 'img/blouse.jpg',
        audioSrc: 'audio/blouse.mp3',
      },
      {
        word: 'dress',
        translation: 'платье',
        image: 'img/dress.jpg',
        audioSrc: 'audio/dress.mp3',
      },
      {
        word: 'boot',
        translation: 'ботинок',
        image: 'img/boot.jpg',
        audioSrc: 'audio/boot.mp3',
      },
      {
        word: 'shirt',
        translation: 'рубашка',
        image: 'img/shirt.jpg',
        audioSrc: 'audio/shirt.mp3',
      },
      {
        word: 'coat',
        translation: 'пальто',
        image: 'img/coat.jpg',
        audioSrc: 'audio/coat.mp3',
      },
      {
        word: 'shoe',
        translation: 'туфли',
        image: 'img/shoe.jpg',
        audioSrc: 'audio/shoe.mp3',
      },
    ],

    [
      {
        word: 'sad',
        translation: 'грустный',
        image: 'img/sad.jpg',
        audioSrc: 'audio/sad.mp3',
      },
      {
        word: 'angry',
        translation: 'сердитый',
        image: 'img/angry.jpg',
        audioSrc: 'audio/angry.mp3',
      },
      {
        word: 'happy',
        translation: 'счастливый',
        image: 'img/happy.jpg',
        audioSrc: 'audio/happy.mp3',
      },
      {
        word: 'tired',
        translation: 'уставший',
        image: 'img/tired.jpg',
        audioSrc: 'audio/tired.mp3',
      },
      {
        word: 'surprised',
        translation: 'удивлённый',
        image: 'img/surprised.jpg',
        audioSrc: 'audio/surprised.mp3',
      },
      {
        word: 'scared',
        translation: 'испуганный',
        image: 'img/scared.jpg',
        audioSrc: 'audio/scared.mp3',
      },
      {
        word: 'smile',
        translation: 'улыбка',
        image: 'img/smile.jpg',
        audioSrc: 'audio/smile.mp3',
      },
      {
        word: 'laugh',
        translation: 'смех',
        image: 'img/laugh.jpg',
        audioSrc: 'audio/laugh.mp3',
      },
    ],

    // [{
    //   word: 'pray',
    //   translation: 'молиться',
    //   image: 'img/laugh.jpg',
    //   audioSrc: 'audio2/pray-us.mp3',
    //   audioQuote: 'MR/ringtones/pray.mp3',
    // }],

    // [],

    // [],

    // [],

    // [],

    // [],

    // [],

    // [],

    // [],

    // [],

    // [],

    // [],

    // [],

    // [],

    // [],
    // [],
    // [],
    // [],
    // [],
    // [],
    // [],
    // [],
    // [],
    // [],
  ],
  [
    [
      {
        word: 'cry2',
        translation: 'плакать',
        image: 'img/cry.jpg',
        audioSrc: 'audio/cry.mp3',
      },
      {
        word: 'dance2',
        translation: 'танцевать',
        image: 'img/dance.jpg',
        audioSrc: 'audio/dance.mp3',
      },
      {
        word: 'dive',
        translation: 'нырять',
        image: 'img/dive.jpg',
        audioSrc: 'audio/dive.mp3',
      },
      {
        word: 'draw',
        translation: 'рисовать',
        image: 'img/draw.jpg',
        audioSrc: 'audio/draw.mp3',
      },
      {
        word: 'fish',
        translation: 'ловить рыбу',
        image: 'img/fish.jpg',
        audioSrc: 'audio/fish.mp3',
      },
      {
        word: 'fly',
        translation: 'летать',
        image: 'img/fly.jpg',
        audioSrc: 'audio/fly.mp3',
      },
      {
        word: 'hug',
        translation: 'обнимать',
        image: 'img/hug.jpg',
        audioSrc: 'audio/hug.mp3',
      },
      {
        word: 'jump',
        translation: 'прыгать',
        image: 'img/jump.jpg',
        audioSrc: 'audio/jump.mp3',
      },
    ],

    [
      {
        word: 'open',
        translation: 'открывать',
        image: 'img/open.jpg',
        audioSrc: 'audio/open.mp3',
      },
      {
        word: 'play',
        translation: 'играть',
        image: 'img/play.jpg',
        audioSrc: 'audio/play.mp3',
      },
      {
        word: 'point',
        translation: 'указывать',
        image: 'img/point.jpg',
        audioSrc: 'audio/point.mp3',
      },
      {
        word: 'ride',
        translation: 'ездить',
        image: 'img/ride.jpg',
        audioSrc: 'audio/ride.mp3',
      },
      {
        word: 'run',
        translation: 'бегать',
        image: 'img/run.jpg',
        audioSrc: 'audio/run.mp3',
      },
      {
        word: 'sing',
        translation: 'петь',
        image: 'img/sing.jpg',
        audioSrc: 'audio/sing.mp3',
      },
      {
        word: 'skip',
        translation: 'прыгать',
        image: 'img/skip.jpg',
        audioSrc: 'audio/skip.mp3',
      },
      {
        word: 'swim',
        translation: 'плавать',
        image: 'img/swim.jpg',
        audioSrc: 'audio/swim.mp3',
      },
    ],

    [
      {
        word: 'cat',
        translation: 'кот',
        image: 'img/cat.jpg',
        audioSrc: 'audio/cat.mp3',
      },
      {
        word: 'chick',
        translation: 'цыплёнок',
        image: 'img/chick.jpg',
        audioSrc: 'audio/chick.mp3',
      },
      {
        word: 'chicken',
        translation: 'курица',
        image: 'img/chicken.jpg',
        audioSrc: 'audio/chicken.mp3',
      },
      {
        word: 'dog',
        translation: 'собака',
        image: 'img/dog.jpg',
        audioSrc: 'audio/dog.mp3',
      },
      {
        word: 'horse',
        translation: 'лошадь',
        image: 'img/horse.jpg',
        audioSrc: 'audio/horse.mp3',
      },
      {
        word: 'pig',
        translation: 'свинья',
        image: 'img/pig.jpg',
        audioSrc: 'audio/pig.mp3',
      },
      {
        word: 'rabbit',
        translation: 'кролик',
        image: 'img/rabbit.jpg',
        audioSrc: 'audio/rabbit.mp3',
      },
      {
        word: 'sheep',
        translation: 'овца',
        image: 'img/sheep.jpg',
        audioSrc: 'audio/sheep.mp3',
      },
    ],

    [
      {
        word: 'bird',
        translation: 'птица',
        image: 'img/bird.jpg',
        audioSrc: 'audio/bird.mp3',
      },
      {
        word: 'fish',
        translation: 'рыба',
        image: 'img/fish1.jpg',
        audioSrc: 'audio/fish.mp3',
      },
      {
        word: 'frog',
        translation: 'жаба',
        image: 'img/frog.jpg',
        audioSrc: 'audio/frog.mp3',
      },
      {
        word: 'giraffe',
        translation: 'жирафа',
        image: 'img/giraffe.jpg',
        audioSrc: 'audio/giraffe.mp3',
      },
      {
        word: 'lion',
        translation: 'лев',
        image: 'img/lion.jpg',
        audioSrc: 'audio/lion.mp3',
      },
      {
        word: 'mouse',
        translation: 'мышь',
        image: 'img/mouse.jpg',
        audioSrc: 'audio/mouse.mp3',
      },
      {
        word: 'turtle',
        translation: 'черепаха',
        image: 'img/turtle.jpg',
        audioSrc: 'audio/turtle.mp3',
      },
      {
        word: 'dolphin',
        translation: 'дельфин',
        image: 'img/dolphin.jpg',
        audioSrc: 'audio/dolphin.mp3',
      },
    ],

    [
      {
        word: 'skirt',
        translation: 'юбка',
        image: 'img/skirt.jpg',
        audioSrc: 'audio/skirt.mp3',
      },
      {
        word: 'pants',
        translation: 'брюки',
        image: 'img/pants.jpg',
        audioSrc: 'audio/pants.mp3',
      },
      {
        word: 'blouse',
        translation: 'блузка',
        image: 'img/blouse.jpg',
        audioSrc: 'audio/blouse.mp3',
      },
      {
        word: 'dress',
        translation: 'платье',
        image: 'img/dress.jpg',
        audioSrc: 'audio/dress.mp3',
      },
      {
        word: 'boot',
        translation: 'ботинок',
        image: 'img/boot.jpg',
        audioSrc: 'audio/boot.mp3',
      },
      {
        word: 'shirt',
        translation: 'рубашка',
        image: 'img/shirt.jpg',
        audioSrc: 'audio/shirt.mp3',
      },
      {
        word: 'coat',
        translation: 'пальто',
        image: 'img/coat.jpg',
        audioSrc: 'audio/coat.mp3',
      },
      {
        word: 'shoe',
        translation: 'туфли',
        image: 'img/shoe.jpg',
        audioSrc: 'audio/shoe.mp3',
      },
    ],

    [
      {
        word: 'sad',
        translation: 'грустный',
        image: 'img/sad.jpg',
        audioSrc: 'audio/sad.mp3',
      },
      {
        word: 'angry',
        translation: 'сердитый',
        image: 'img/angry.jpg',
        audioSrc: 'audio/angry.mp3',
      },
      {
        word: 'happy',
        translation: 'счастливый',
        image: 'img/happy.jpg',
        audioSrc: 'audio/happy.mp3',
      },
      {
        word: 'tired',
        translation: 'уставший',
        image: 'img/tired.jpg',
        audioSrc: 'audio/tired.mp3',
      },
      {
        word: 'surprised',
        translation: 'удивлённый',
        image: 'img/surprised.jpg',
        audioSrc: 'audio/surprised.mp3',
      },
      {
        word: 'scared',
        translation: 'испуганный',
        image: 'img/scared.jpg',
        audioSrc: 'audio/scared.mp3',
      },
      {
        word: 'smile',
        translation: 'улыбка',
        image: 'img/smile.jpg',
        audioSrc: 'audio/smile.mp3',
      },
      {
        word: 'laugh',
        translation: 'смех',
        image: 'img/laugh.jpg',
        audioSrc: 'audio/laugh.mp3',
      },
    ],

    // [],

    // [],

    // [],

    // [],

    // [],

    // [],

    // [],

    // [],

    // [],

    // [],

    // [],

    // [],

    // [],

    // [],

    // [],
    // [],
    // [],
    // [],
    // [],
    // [],
    // [],
    // [],
    // [],
    // [],
  ],
  [
    [
      {
        word: 'cry',
        translation: 'плакать',
        image: 'img/cry.jpg',
        audioSrc: 'audio/cry.mp3',
      },
      {
        word: 'dance',
        translation: 'танцевать',
        image: 'img/dance.jpg',
        audioSrc: 'audio/dance.mp3',
      },
      {
        word: 'dive',
        translation: 'нырять',
        image: 'img/dive.jpg',
        audioSrc: 'audio/dive.mp3',
      },
      {
        word: 'draw',
        translation: 'рисовать',
        image: 'img/draw.jpg',
        audioSrc: 'audio/draw.mp3',
      },
      {
        word: 'fish',
        translation: 'ловить рыбу',
        image: 'img/fish.jpg',
        audioSrc: 'audio/fish.mp3',
      },
      {
        word: 'fly',
        translation: 'летать',
        image: 'img/fly.jpg',
        audioSrc: 'audio/fly.mp3',
      },
      {
        word: 'hug',
        translation: 'обнимать',
        image: 'img/hug.jpg',
        audioSrc: 'audio/hug.mp3',
      },
      {
        word: 'jump',
        translation: 'прыгать',
        image: 'img/jump.jpg',
        audioSrc: 'audio/jump.mp3',
      },
    ],

    [
      {
        word: 'open',
        translation: 'открывать',
        image: 'img/open.jpg',
        audioSrc: 'audio/open.mp3',
      },
      {
        word: 'play',
        translation: 'играть',
        image: 'img/play.jpg',
        audioSrc: 'audio/play.mp3',
      },
      {
        word: 'point',
        translation: 'указывать',
        image: 'img/point.jpg',
        audioSrc: 'audio/point.mp3',
      },
      {
        word: 'ride',
        translation: 'ездить',
        image: 'img/ride.jpg',
        audioSrc: 'audio/ride.mp3',
      },
      {
        word: 'run',
        translation: 'бегать',
        image: 'img/run.jpg',
        audioSrc: 'audio/run.mp3',
      },
      {
        word: 'sing',
        translation: 'петь',
        image: 'img/sing.jpg',
        audioSrc: 'audio/sing.mp3',
      },
      {
        word: 'skip',
        translation: 'прыгать',
        image: 'img/skip.jpg',
        audioSrc: 'audio/skip.mp3',
      },
      {
        word: 'swim',
        translation: 'плавать',
        image: 'img/swim.jpg',
        audioSrc: 'audio/swim.mp3',
      },
    ],

    [
      {
        word: 'cat',
        translation: 'кот',
        image: 'img/cat.jpg',
        audioSrc: 'audio/cat.mp3',
      },
      {
        word: 'chick',
        translation: 'цыплёнок',
        image: 'img/chick.jpg',
        audioSrc: 'audio/chick.mp3',
      },
      {
        word: 'chicken',
        translation: 'курица',
        image: 'img/chicken.jpg',
        audioSrc: 'audio/chicken.mp3',
      },
      {
        word: 'dog',
        translation: 'собака',
        image: 'img/dog.jpg',
        audioSrc: 'audio/dog.mp3',
      },
      {
        word: 'horse',
        translation: 'лошадь',
        image: 'img/horse.jpg',
        audioSrc: 'audio/horse.mp3',
      },
      {
        word: 'pig',
        translation: 'свинья',
        image: 'img/pig.jpg',
        audioSrc: 'audio/pig.mp3',
      },
      {
        word: 'rabbit',
        translation: 'кролик',
        image: 'img/rabbit.jpg',
        audioSrc: 'audio/rabbit.mp3',
      },
      {
        word: 'sheep',
        translation: 'овца',
        image: 'img/sheep.jpg',
        audioSrc: 'audio/sheep.mp3',
      },
    ],

    [
      {
        word: 'bird',
        translation: 'птица',
        image: 'img/bird.jpg',
        audioSrc: 'audio/bird.mp3',
      },
      {
        word: 'fish',
        translation: 'рыба',
        image: 'img/fish1.jpg',
        audioSrc: 'audio/fish.mp3',
      },
      {
        word: 'frog',
        translation: 'жаба',
        image: 'img/frog.jpg',
        audioSrc: 'audio/frog.mp3',
      },
      {
        word: 'giraffe',
        translation: 'жирафа',
        image: 'img/giraffe.jpg',
        audioSrc: 'audio/giraffe.mp3',
      },
      {
        word: 'lion',
        translation: 'лев',
        image: 'img/lion.jpg',
        audioSrc: 'audio/lion.mp3',
      },
      {
        word: 'mouse',
        translation: 'мышь',
        image: 'img/mouse.jpg',
        audioSrc: 'audio/mouse.mp3',
      },
      {
        word: 'turtle',
        translation: 'черепаха',
        image: 'img/turtle.jpg',
        audioSrc: 'audio/turtle.mp3',
      },
      {
        word: 'dolphin',
        translation: 'дельфин',
        image: 'img/dolphin.jpg',
        audioSrc: 'audio/dolphin.mp3',
      },
    ],

    [
      {
        word: 'skirt',
        translation: 'юбка',
        image: 'img/skirt.jpg',
        audioSrc: 'audio/skirt.mp3',
      },
      {
        word: 'pants',
        translation: 'брюки',
        image: 'img/pants.jpg',
        audioSrc: 'audio/pants.mp3',
      },
      {
        word: 'blouse',
        translation: 'блузка',
        image: 'img/blouse.jpg',
        audioSrc: 'audio/blouse.mp3',
      },
      {
        word: 'dress',
        translation: 'платье',
        image: 'img/dress.jpg',
        audioSrc: 'audio/dress.mp3',
      },
      {
        word: 'boot',
        translation: 'ботинок',
        image: 'img/boot.jpg',
        audioSrc: 'audio/boot.mp3',
      },
      {
        word: 'shirt',
        translation: 'рубашка',
        image: 'img/shirt.jpg',
        audioSrc: 'audio/shirt.mp3',
      },
      {
        word: 'coat',
        translation: 'пальто',
        image: 'img/coat.jpg',
        audioSrc: 'audio/coat.mp3',
      },
      {
        word: 'shoe',
        translation: 'туфли',
        image: 'img/shoe.jpg',
        audioSrc: 'audio/shoe.mp3',
      },
    ],

    [
      {
        word: 'sad',
        translation: 'грустный',
        image: 'img/sad.jpg',
        audioSrc: 'audio/sad.mp3',
      },
      {
        word: 'angry',
        translation: 'сердитый',
        image: 'img/angry.jpg',
        audioSrc: 'audio/angry.mp3',
      },
      {
        word: 'happy',
        translation: 'счастливый',
        image: 'img/happy.jpg',
        audioSrc: 'audio/happy.mp3',
      },
      {
        word: 'tired',
        translation: 'уставший',
        image: 'img/tired.jpg',
        audioSrc: 'audio/tired.mp3',
      },
      {
        word: 'surprised',
        translation: 'удивлённый',
        image: 'img/surprised.jpg',
        audioSrc: 'audio/surprised.mp3',
      },
      {
        word: 'scared',
        translation: 'испуганный',
        image: 'img/scared.jpg',
        audioSrc: 'audio/scared.mp3',
      },
      {
        word: 'smile',
        translation: 'улыбка',
        image: 'img/smile.jpg',
        audioSrc: 'audio/smile.mp3',
      },
      {
        word: 'laugh',
        translation: 'смех',
        image: 'img/laugh.jpg',
        audioSrc: 'audio/laugh.mp3',
      },
    ],

    // [],

    // [],

    // [],

    // [],

    // [],

    // [],

    // [],

    // [],

    // [],

    // [],

    // [],

    // [],

    // [],

    // [],

    // [],
    // [],
    // [],
    // [],
    // [],
    // [],
    // [],
    // [],
    // [],
    // [],
  ],
  [
    [
      {
        word: 'cry',
        translation: 'плакать',
        image: 'img/cry.jpg',
        audioSrc: 'audio/cry.mp3',
      },
      {
        word: 'dance',
        translation: 'танцевать',
        image: 'img/dance.jpg',
        audioSrc: 'audio/dance.mp3',
      },
      {
        word: 'dive',
        translation: 'нырять',
        image: 'img/dive.jpg',
        audioSrc: 'audio/dive.mp3',
      },
      {
        word: 'draw',
        translation: 'рисовать',
        image: 'img/draw.jpg',
        audioSrc: 'audio/draw.mp3',
      },
      {
        word: 'fish',
        translation: 'ловить рыбу',
        image: 'img/fish.jpg',
        audioSrc: 'audio/fish.mp3',
      },
      {
        word: 'fly',
        translation: 'летать',
        image: 'img/fly.jpg',
        audioSrc: 'audio/fly.mp3',
      },
      {
        word: 'hug',
        translation: 'обнимать',
        image: 'img/hug.jpg',
        audioSrc: 'audio/hug.mp3',
      },
      {
        word: 'jump',
        translation: 'прыгать',
        image: 'img/jump.jpg',
        audioSrc: 'audio/jump.mp3',
      },
    ],

    [
      {
        word: 'open',
        translation: 'открывать',
        image: 'img/open.jpg',
        audioSrc: 'audio/open.mp3',
      },
      {
        word: 'play',
        translation: 'играть',
        image: 'img/play.jpg',
        audioSrc: 'audio/play.mp3',
      },
      {
        word: 'point',
        translation: 'указывать',
        image: 'img/point.jpg',
        audioSrc: 'audio/point.mp3',
      },
      {
        word: 'ride',
        translation: 'ездить',
        image: 'img/ride.jpg',
        audioSrc: 'audio/ride.mp3',
      },
      {
        word: 'run',
        translation: 'бегать',
        image: 'img/run.jpg',
        audioSrc: 'audio/run.mp3',
      },
      {
        word: 'sing',
        translation: 'петь',
        image: 'img/sing.jpg',
        audioSrc: 'audio/sing.mp3',
      },
      {
        word: 'skip',
        translation: 'прыгать',
        image: 'img/skip.jpg',
        audioSrc: 'audio/skip.mp3',
      },
      {
        word: 'swim',
        translation: 'плавать',
        image: 'img/swim.jpg',
        audioSrc: 'audio/swim.mp3',
      },
    ],

    [
      {
        word: 'cat',
        translation: 'кот',
        image: 'img/cat.jpg',
        audioSrc: 'audio/cat.mp3',
      },
      {
        word: 'chick',
        translation: 'цыплёнок',
        image: 'img/chick.jpg',
        audioSrc: 'audio/chick.mp3',
      },
      {
        word: 'chicken',
        translation: 'курица',
        image: 'img/chicken.jpg',
        audioSrc: 'audio/chicken.mp3',
      },
      {
        word: 'dog',
        translation: 'собака',
        image: 'img/dog.jpg',
        audioSrc: 'audio/dog.mp3',
      },
      {
        word: 'horse',
        translation: 'лошадь',
        image: 'img/horse.jpg',
        audioSrc: 'audio/horse.mp3',
      },
      {
        word: 'pig',
        translation: 'свинья',
        image: 'img/pig.jpg',
        audioSrc: 'audio/pig.mp3',
      },
      {
        word: 'rabbit',
        translation: 'кролик',
        image: 'img/rabbit.jpg',
        audioSrc: 'audio/rabbit.mp3',
      },
      {
        word: 'sheep',
        translation: 'овца',
        image: 'img/sheep.jpg',
        audioSrc: 'audio/sheep.mp3',
      },
    ],

    [
      {
        word: 'bird',
        translation: 'птица',
        image: 'img/bird.jpg',
        audioSrc: 'audio/bird.mp3',
      },
      {
        word: 'fish',
        translation: 'рыба',
        image: 'img/fish1.jpg',
        audioSrc: 'audio/fish.mp3',
      },
      {
        word: 'frog',
        translation: 'жаба',
        image: 'img/frog.jpg',
        audioSrc: 'audio/frog.mp3',
      },
      {
        word: 'giraffe',
        translation: 'жирафа',
        image: 'img/giraffe.jpg',
        audioSrc: 'audio/giraffe.mp3',
      },
      {
        word: 'lion',
        translation: 'лев',
        image: 'img/lion.jpg',
        audioSrc: 'audio/lion.mp3',
      },
      {
        word: 'mouse',
        translation: 'мышь',
        image: 'img/mouse.jpg',
        audioSrc: 'audio/mouse.mp3',
      },
      {
        word: 'turtle',
        translation: 'черепаха',
        image: 'img/turtle.jpg',
        audioSrc: 'audio/turtle.mp3',
      },
      {
        word: 'dolphin',
        translation: 'дельфин',
        image: 'img/dolphin.jpg',
        audioSrc: 'audio/dolphin.mp3',
      },
    ],

    [
      {
        word: 'skirt',
        translation: 'юбка',
        image: 'img/skirt.jpg',
        audioSrc: 'audio/skirt.mp3',
      },
      {
        word: 'pants',
        translation: 'брюки',
        image: 'img/pants.jpg',
        audioSrc: 'audio/pants.mp3',
      },
      {
        word: 'blouse',
        translation: 'блузка',
        image: 'img/blouse.jpg',
        audioSrc: 'audio/blouse.mp3',
      },
      {
        word: 'dress',
        translation: 'платье',
        image: 'img/dress.jpg',
        audioSrc: 'audio/dress.mp3',
      },
      {
        word: 'boot',
        translation: 'ботинок',
        image: 'img/boot.jpg',
        audioSrc: 'audio/boot.mp3',
      },
      {
        word: 'shirt',
        translation: 'рубашка',
        image: 'img/shirt.jpg',
        audioSrc: 'audio/shirt.mp3',
      },
      {
        word: 'coat',
        translation: 'пальто',
        image: 'img/coat.jpg',
        audioSrc: 'audio/coat.mp3',
      },
      {
        word: 'shoe',
        translation: 'туфли',
        image: 'img/shoe.jpg',
        audioSrc: 'audio/shoe.mp3',
      },
    ],

    [
      {
        word: 'sad',
        translation: 'грустный',
        image: 'img/sad.jpg',
        audioSrc: 'audio/sad.mp3',
      },
      {
        word: 'angry',
        translation: 'сердитый',
        image: 'img/angry.jpg',
        audioSrc: 'audio/angry.mp3',
      },
      {
        word: 'happy',
        translation: 'счастливый',
        image: 'img/happy.jpg',
        audioSrc: 'audio/happy.mp3',
      },
      {
        word: 'tired',
        translation: 'уставший',
        image: 'img/tired.jpg',
        audioSrc: 'audio/tired.mp3',
      },
      {
        word: 'surprised',
        translation: 'удивлённый',
        image: 'img/surprised.jpg',
        audioSrc: 'audio/surprised.mp3',
      },
      {
        word: 'scared',
        translation: 'испуганный',
        image: 'img/scared.jpg',
        audioSrc: 'audio/scared.mp3',
      },
      {
        word: 'smile',
        translation: 'улыбка',
        image: 'img/smile.jpg',
        audioSrc: 'audio/smile.mp3',
      },
      {
        word: 'laugh',
        translation: 'смех',
        image: 'img/laugh.jpg',
        audioSrc: 'audio/laugh.mp3',
      },
    ],

    // [],

    // [],

    // [],

    // [],

    // [],

    // [],

    // [],

    // [],

    // [],

    // [],

    // [],

    // [],

    // [],

    // [],

    // [],
    // [],
    // [],
    // [],
    // [],
    // [],
    // [],
    // [],
    // [],
    // [],
  ],
  [
    [
      {
        word: 'cry',
        translation: 'плакать',
        image: 'img/cry.jpg',
        audioSrc: 'audio/cry.mp3',
      },
      {
        word: 'dance',
        translation: 'танцевать',
        image: 'img/dance.jpg',
        audioSrc: 'audio/dance.mp3',
      },
      {
        word: 'dive',
        translation: 'нырять',
        image: 'img/dive.jpg',
        audioSrc: 'audio/dive.mp3',
      },
      {
        word: 'draw',
        translation: 'рисовать',
        image: 'img/draw.jpg',
        audioSrc: 'audio/draw.mp3',
      },
      {
        word: 'fish',
        translation: 'ловить рыбу',
        image: 'img/fish.jpg',
        audioSrc: 'audio/fish.mp3',
      },
      {
        word: 'fly',
        translation: 'летать',
        image: 'img/fly.jpg',
        audioSrc: 'audio/fly.mp3',
      },
      {
        word: 'hug',
        translation: 'обнимать',
        image: 'img/hug.jpg',
        audioSrc: 'audio/hug.mp3',
      },
      {
        word: 'jump',
        translation: 'прыгать',
        image: 'img/jump.jpg',
        audioSrc: 'audio/jump.mp3',
      },
    ],

    [
      {
        word: 'open',
        translation: 'открывать',
        image: 'img/open.jpg',
        audioSrc: 'audio/open.mp3',
      },
      {
        word: 'play',
        translation: 'играть',
        image: 'img/play.jpg',
        audioSrc: 'audio/play.mp3',
      },
      {
        word: 'point',
        translation: 'указывать',
        image: 'img/point.jpg',
        audioSrc: 'audio/point.mp3',
      },
      {
        word: 'ride',
        translation: 'ездить',
        image: 'img/ride.jpg',
        audioSrc: 'audio/ride.mp3',
      },
      {
        word: 'run',
        translation: 'бегать',
        image: 'img/run.jpg',
        audioSrc: 'audio/run.mp3',
      },
      {
        word: 'sing',
        translation: 'петь',
        image: 'img/sing.jpg',
        audioSrc: 'audio/sing.mp3',
      },
      {
        word: 'skip',
        translation: 'прыгать',
        image: 'img/skip.jpg',
        audioSrc: 'audio/skip.mp3',
      },
      {
        word: 'swim',
        translation: 'плавать',
        image: 'img/swim.jpg',
        audioSrc: 'audio/swim.mp3',
      },
    ],

    [
      {
        word: 'cat',
        translation: 'кот',
        image: 'img/cat.jpg',
        audioSrc: 'audio/cat.mp3',
      },
      {
        word: 'chick',
        translation: 'цыплёнок',
        image: 'img/chick.jpg',
        audioSrc: 'audio/chick.mp3',
      },
      {
        word: 'chicken',
        translation: 'курица',
        image: 'img/chicken.jpg',
        audioSrc: 'audio/chicken.mp3',
      },
      {
        word: 'dog',
        translation: 'собака',
        image: 'img/dog.jpg',
        audioSrc: 'audio/dog.mp3',
      },
      {
        word: 'horse',
        translation: 'лошадь',
        image: 'img/horse.jpg',
        audioSrc: 'audio/horse.mp3',
      },
      {
        word: 'pig',
        translation: 'свинья',
        image: 'img/pig.jpg',
        audioSrc: 'audio/pig.mp3',
      },
      {
        word: 'rabbit',
        translation: 'кролик',
        image: 'img/rabbit.jpg',
        audioSrc: 'audio/rabbit.mp3',
      },
      {
        word: 'sheep',
        translation: 'овца',
        image: 'img/sheep.jpg',
        audioSrc: 'audio/sheep.mp3',
      },
    ],

    [
      {
        word: 'bird',
        translation: 'птица',
        image: 'img/bird.jpg',
        audioSrc: 'audio/bird.mp3',
      },
      {
        word: 'fish',
        translation: 'рыба',
        image: 'img/fish1.jpg',
        audioSrc: 'audio/fish.mp3',
      },
      {
        word: 'frog',
        translation: 'жаба',
        image: 'img/frog.jpg',
        audioSrc: 'audio/frog.mp3',
      },
      {
        word: 'giraffe',
        translation: 'жирафа',
        image: 'img/giraffe.jpg',
        audioSrc: 'audio/giraffe.mp3',
      },
      {
        word: 'lion',
        translation: 'лев',
        image: 'img/lion.jpg',
        audioSrc: 'audio/lion.mp3',
      },
      {
        word: 'mouse',
        translation: 'мышь',
        image: 'img/mouse.jpg',
        audioSrc: 'audio/mouse.mp3',
      },
      {
        word: 'turtle',
        translation: 'черепаха',
        image: 'img/turtle.jpg',
        audioSrc: 'audio/turtle.mp3',
      },
      {
        word: 'dolphin',
        translation: 'дельфин',
        image: 'img/dolphin.jpg',
        audioSrc: 'audio/dolphin.mp3',
      },
    ],

    [
      {
        word: 'skirt',
        translation: 'юбка',
        image: 'img/skirt.jpg',
        audioSrc: 'audio/skirt.mp3',
      },
      {
        word: 'pants',
        translation: 'брюки',
        image: 'img/pants.jpg',
        audioSrc: 'audio/pants.mp3',
      },
      {
        word: 'blouse',
        translation: 'блузка',
        image: 'img/blouse.jpg',
        audioSrc: 'audio/blouse.mp3',
      },
      {
        word: 'dress',
        translation: 'платье',
        image: 'img/dress.jpg',
        audioSrc: 'audio/dress.mp3',
      },
      {
        word: 'boot',
        translation: 'ботинок',
        image: 'img/boot.jpg',
        audioSrc: 'audio/boot.mp3',
      },
      {
        word: 'shirt',
        translation: 'рубашка',
        image: 'img/shirt.jpg',
        audioSrc: 'audio/shirt.mp3',
      },
      {
        word: 'coat',
        translation: 'пальто',
        image: 'img/coat.jpg',
        audioSrc: 'audio/coat.mp3',
      },
      {
        word: 'shoe',
        translation: 'туфли',
        image: 'img/shoe.jpg',
        audioSrc: 'audio/shoe.mp3',
      },
    ],

    [
      {
        word: 'sad',
        translation: 'грустный',
        image: 'img/sad.jpg',
        audioSrc: 'audio/sad.mp3',
      },
      {
        word: 'angry',
        translation: 'сердитый',
        image: 'img/angry.jpg',
        audioSrc: 'audio/angry.mp3',
      },
      {
        word: 'happy',
        translation: 'счастливый',
        image: 'img/happy.jpg',
        audioSrc: 'audio/happy.mp3',
      },
      {
        word: 'tired',
        translation: 'уставший',
        image: 'img/tired.jpg',
        audioSrc: 'audio/tired.mp3',
      },
      {
        word: 'surprised',
        translation: 'удивлённый',
        image: 'img/surprised.jpg',
        audioSrc: 'audio/surprised.mp3',
      },
      {
        word: 'scared',
        translation: 'испуганный',
        image: 'img/scared.jpg',
        audioSrc: 'audio/scared.mp3',
      },
      {
        word: 'smile',
        translation: 'улыбка',
        image: 'img/smile.jpg',
        audioSrc: 'audio/smile.mp3',
      },
      {
        word: 'laugh',
        translation: 'смех',
        image: 'img/laugh.jpg',
        audioSrc: 'audio/laugh.mp3',
      },
    ],

    // [],

    // [],

    // [],

    // [],

    // [],

    // [],

    // [],

    // [],

    // [],

    // [],

    // [],

    // [],

    // [],

    // [],

    // [],
    // [],
    // [],
    // [],
    // [],
    // [],
    // [],
    // [],
    // [],
    // [],
  ],
];

export default cards;
