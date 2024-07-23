const quizData = [
  {
    title: "Математика",
    subcategories: [
      {
        title: "Тесты по математике для 1-4 классов",
        questions: [
          {
            questionText:
              "У Тани было 2 яблока, мама дала ей еще 2. Сколько яблок стало у Тани?",
            answerOptions: [
              { answerText: "3", isCorrect: false },
              { answerText: "4", isCorrect: true },
              { answerText: "5", isCorrect: false },
              { answerText: "6", isCorrect: false },
            ],
          },
          {
            questionText:
              "Сергею до школы нужно проехать 10 остановок. 3 он проехал, сколько осталось?",
            answerOptions: [
              { answerText: "7", isCorrect: true },
              { answerText: "8", isCorrect: false },
              { answerText: "6", isCorrect: false },
              { answerText: "1", isCorrect: false },
            ],
          },
        ],
      },
      {
        title: "Тесты по математике 5-7 классов",
        questions: [
          {
            questionText: "Сколько будет 8 * 7?",
            answerOptions: [
              { answerText: "56", isCorrect: true },
              { answerText: "25", isCorrect: false },
              { answerText: "72", isCorrect: false },
              { answerText: "15", isCorrect: false },
            ],
          },
          {
            questionText: "Биссектриса ...",
            answerOptions: [
              { answerText: "делит отрезок на 2 части", isCorrect: false },
              { answerText: "делит угол пополам", isCorrect: true },
              { answerText: "делит окружность на радиусы", isCorrect: false },
              {
                answerText: "делит сторону треугольника пополам",
                isCorrect: false,
              },
            ],
          },
        ],
      },
      {
        title: "Тесты по математике 8-11 классы",
        questions: [
          {
            questionText: "Решите уравнение: 2x + 3 = 7",
            answerOptions: [
              { answerText: "x = 1", isCorrect: false },
              { answerText: "x = 2", isCorrect: true },
              { answerText: "x = 3", isCorrect: false },
              { answerText: "x = 4", isCorrect: false },
            ],
          },
          // вопросы для 8-11 классов
        ],
      },
      {
        title: "Тесты по высшей математике",
        questions: [
          {
            questionText: "Найдите производную функции f(x) = x^2 + 3x + 2",
            answerOptions: [
              { answerText: "2x + 3", isCorrect: true },
              { answerText: "x^2 + 3", isCorrect: false },
              { answerText: "2x + 2", isCorrect: false },
              { answerText: "x + 3", isCorrect: false },
            ],
          },
          // вопросы по высшей математике
        ],
      },
    ],
  },
  {
    title: "География",
    subcategories: [
      {
        title: "Общий тест по географии",
        questions: [
          {
            questionText: "Какая самая длинная река в мире?",
            answerOptions: [
              { answerText: "Амазонка", isCorrect: true },
              { answerText: "Нил", isCorrect: false },
              { answerText: "Миссисипи", isCorrect: false },
              { answerText: "Янцзы", isCorrect: false },
            ],
          },
          {
            questionText: "Сколько всего континентов на Земле?",
            answerOptions: [
              { answerText: "41", isCorrect: false },
              { answerText: "17", isCorrect: false },
              { answerText: "6", isCorrect: true },
              { answerText: "265", isCorrect: false },
            ],
          },
          {
            questionText: "С какой стороны света восходит солнце?",
            answerOptions: [
              { answerText: "Запад", isCorrect: false },
              { answerText: "Восток", isCorrect: true },
              { answerText: "Север", isCorrect: false },
              { answerText: "Юг", isCorrect: false },
            ],
          },
          {
            questionText: "Назовите столицу Греции?",
            answerOptions: [
              { answerText: "Кипр", isCorrect: false },
              { answerText: "Афины", isCorrect: true },
              { answerText: "Каир", isCorrect: false },
              { answerText: "Греция", isCorrect: false },
            ],
          },
          // вопросы для общего теста по географии
        ],
      },
      {
        title: "Океаны",
        questions: [
          {
            questionText: "Какой океан самый большой?",
            answerOptions: [
              { answerText: "Тихий океан", isCorrect: true },
              { answerText: "Атлантический океан", isCorrect: false },
              { answerText: "Индийский океан", isCorrect: false },
              { answerText: "Северный Ледовитый океан", isCorrect: false },
            ],
          },
          // вопросы по теме "Океаны"
        ],
      },
      {
        title: "Великие путешественники",
        questions: [
          {
            questionText: "Кто открыл Америку?",
            answerOptions: [
              { answerText: "Христофор Колумб", isCorrect: true },
              { answerText: "Васко да Гама", isCorrect: false },
              { answerText: "Фернан Магеллан", isCorrect: false },
              { answerText: "Джеймс Кук", isCorrect: false },
            ],
          },
          // вопросы по теме "Великие путешественники"
        ],
      },
    ],
  },
  {
    title: "История",
    subcategories: [
      {
        title: "История религий",
        questions: [
          {
            questionText: "Какой религии принадлежит Библия?",
            answerOptions: [
              { answerText: "Христианство", isCorrect: true },
              { answerText: "Ислам", isCorrect: false },
              { answerText: "Иудаизм", isCorrect: false },
              { answerText: "Буддизм", isCorrect: false },
            ],
          },
          {
            questionText: "Какой религия исповедуется в Японии?",
            answerOptions: [
              { answerText: "Синтоизм", isCorrect: true },
              { answerText: "Ислам", isCorrect: false },
              { answerText: "Иудаизм", isCorrect: false },
              { answerText: "Буддизм", isCorrect: false },
            ],
          },
        ],
      },
      {
        title: "Первобытный период",
        questions: [
          {
            questionText: "Когда начался каменный век?",
            answerOptions: [
              { answerText: "около 2,5 миллионов лет назад", isCorrect: true },
              { answerText: "около 1 миллиона лет назад", isCorrect: false },
              { answerText: "около 500 тысяч лет назад", isCorrect: false },
              { answerText: "около 100 тысяч лет назад", isCorrect: false },
            ],
          },
          // вопросы по первобытному периоду
        ],
      },
      {
        title: "Древний Рим",
        questions: [
          {
            questionText: "Кто был первым императором Рима?",
            answerOptions: [
              { answerText: "Август", isCorrect: true },
              { answerText: "Юлий Цезарь", isCorrect: false },
              { answerText: "Нерон", isCorrect: false },
              { answerText: "Траян", isCorrect: false },
            ],
          },
          {
            questionText: "Укажите период существования Древнего Рима?",
            answerOptions: [
              { answerText: "1600-1850 годы н.э.", isCorrect: false },
              { answerText: "425-833 годы до н.э.", isCorrect: false },
              { answerText: "932-1211 годы н.э.", isCorrect: false },
              {
                answerText: "от 753 года до н. э. до 476 года н. э",
                isCorrect: true,
              },
            ],
          },
          // вопросы по Древнему Риму
        ],
      },
      {
        title: "Древняя Греция",
        questions: [
          {
            questionText: "Кто был основателем философской школы в Афинах?",
            answerOptions: [
              { answerText: "Сократ", isCorrect: true },
              { answerText: "Платон", isCorrect: false },
              { answerText: "Аристотель", isCorrect: false },
              { answerText: "Гераклит", isCorrect: false },
            ],
          },
          // вопросы по Древней Греции
        ],
      },
      {
        title: "История Руси",
        questions: [
          {
            questionText: "Кто был первым князем Киевской Руси?",
            answerOptions: [
              { answerText: "Олег", isCorrect: true },
              { answerText: "Игорь", isCorrect: false },
              { answerText: "Владимир", isCorrect: false },
              { answerText: "Ярослав", isCorrect: false },
            ],
          },
          // вопросы по истории Руси
        ],
      },
      {
        title: "История России",
        questions: [
          {
            questionText: "Кто был первым царем России?",
            answerOptions: [
              { answerText: "Иван Грозный", isCorrect: true },
              { answerText: "Петр I", isCorrect: false },
              { answerText: "Александр II", isCorrect: false },
              { answerText: "Николай II", isCorrect: false },
            ],
          },
          // вопросы по истории России
        ],
      },
      {
        title: "Мировая история",
        questions: [
          {
            questionText: "Когда началась Первая мировая война?",
            answerOptions: [
              { answerText: "1914", isCorrect: true },
              { answerText: "1918", isCorrect: false },
              { answerText: "1939", isCorrect: false },
              { answerText: "1945", isCorrect: false },
            ],
          },
          // вопросы по мировой истории
        ],
      },
    ],
  },
  {
    title: "Психологические тесты",
    subcategories: [
      {
        title: "Тест на умение решать конфликты",
        questions: [
          {
            questionText:
              "Коллега часто поддевает Вас, как лучше реагировать на такое поведение?",
            answerOptions: [
              { answerText: "уволиться с работы", isCorrect: false },
              { answerText: "пожаловаться руководителю", isCorrect: false },
              { answerText: "парировать атаку", isCorrect: true },
              { answerText: "расплакаться", isCorrect: false },
            ],
          },
          // Вопросы для теста на умение решать конфликты
        ],
      },
    ],
  },
  {
    title: "Русский язык",
    subcategories: [
      {
        title: "Грамматика",
        questions: [
          {
            questionText: "Какое слово является существительным?",
            answerOptions: [
              { answerText: "Бежать", isCorrect: false },
              { answerText: "Красивый", isCorrect: false },
              { answerText: "Стол", isCorrect: true },
              { answerText: "Быстро", isCorrect: false },
            ],
          },
          {
            questionText: "Какое слово является глаголом?",
            answerOptions: [
              { answerText: "Нечто", isCorrect: false },
              { answerText: "Красивый", isCorrect: false },
              { answerText: "Рисовать", isCorrect: true },
              { answerText: "Вечер", isCorrect: false },
            ],
          },
          {
            questionText: "Какое слово является прилагательным?",
            answerOptions: [
              { answerText: "Хороший", isCorrect: true },
              { answerText: "Медленно", isCorrect: false },
              { answerText: "Идти", isCorrect: false },
              { answerText: "Утро", isCorrect: false },
            ],
          },
          // вопросы по грамматике
        ],
      },
      {
        title: "Орфография",
        questions: [
          {
            questionText: "Как правильно написать слово?",
            answerOptions: [
              { answerText: "Превед", isCorrect: false },
              { answerText: "Привет", isCorrect: true },
              { answerText: "Превет", isCorrect: false },
              { answerText: "Приветт", isCorrect: false },
            ],
          },
          {
            questionText: "Выберите правильный вариант написания слов...",
            answerOptions: [
              { answerText: "Цирк, циган, цыпленок, циклон", isCorrect: false },
              { answerText: "Цирк, цыган, ципленок, цыклон", isCorrect: false },
              { answerText: "Цырк, цыган, цыпленок, циклон", isCorrect: false },
              { answerText: "Цирк, цыган, цыпленок, циклон", isCorrect: true },
            ],
          },
          {
            questionText:
              "Как проверить написание безударной гласной буквы в слове?",
            answerOptions: [
              { answerText: "Это нельзя проверить", isCorrect: false },
              {
                answerText:
                  "Нужно подобрать однокоренное слово или изменить форму данного слова так, чтобы корневой гласный оказался под ударением.",
                isCorrect: true,
              },
              {
                answerText:
                  "Нужно подобрать похожее по смыслу слово и написать как в этом слове",
                isCorrect: false,
              },
              { answerText: "Посмотреть в словаре", isCorrect: false },
            ],
          },
          // вопросы по орфографии
        ],
      },
    ],
  },
  {
    title: "Литература",
    subcategories: [
      {
        title: "Русская литература",
        questions: [
          {
            questionText: 'Кто написал "Войну и мир"?',
            answerOptions: [
              { answerText: "Лев Толстой", isCorrect: true },
              { answerText: "Федор Достоевский", isCorrect: false },
              { answerText: "Александр Пушкин", isCorrect: false },
              { answerText: "Антон Чехов", isCorrect: false },
            ],
          },
          {
            questionText: "Героем какого произведения является Степан Плюшкин?",
            answerOptions: [
              { answerText: "Евгений Онегин", isCorrect: false },
              { answerText: "Бедная Лиза", isCorrect: false },
              { answerText: "Мертвые души", isCorrect: true },
              { answerText: "Горе от ума", isCorrect: false },
            ],
          },
          {
            questionText:
              "Перу какого русского писателя принадлежит повесть 'Пиковая дама'?",
            answerOptions: [
              { answerText: "Н.Гоголь", isCorrect: false },
              { answerText: "М.Лермонтов", isCorrect: false },
              { answerText: "А.Пушкин", isCorrect: true },
              { answerText: "И.Гончаров", isCorrect: false },
            ],
          },
          // вопросы по русской литературе
        ],
      },
      {
        title: "Зарубежная литература",
        questions: [
          {
            questionText: 'Кто написал произведение "Гамлет"?',
            answerOptions: [
              { answerText: "Уильям Шекспир", isCorrect: true },
              { answerText: "Чарльз Диккенс", isCorrect: false },
              { answerText: "Марк Твен", isCorrect: false },
              { answerText: "Эрнест Хемингуэй", isCorrect: false },
            ],
          },
          {
            questionText:
              "Какой французский писатель написал романы «Отверженные», «Собор Парижской Богоматери» и «Человек, который смеётся»?",
            answerOptions: [
              { answerText: "Оноре де Бальзак", isCorrect: false },
              { answerText: "Александр Дюма", isCorrect: false },
              { answerText: "Виктор Гюго", isCorrect: true },
              { answerText: "Эрнест Хемингуэй", isCorrect: false },
            ],
          },
          {
            questionText:
              "Из каких частей состоит 'Божественная комедия' А.Данте?",
            answerOptions: [
              { answerText: "Земная жизнь, Чистилище, Рай", isCorrect: false },
              { answerText: "Ад, Чистилище, Рай", isCorrect: true },
              {
                answerText: "Земная жизнь, Страшный суд, Ад",
                isCorrect: false,
              },
              {
                answerText: "Подземное царство, Чистилище, Рай",
                isCorrect: false,
              },
            ],
          },
          {
            questionText:
              'О чём рассказывает трагедия немецкого поэта Иоганна Гёте "Фауст"?',
            answerOptions: [
              { answerText: "О смысле жизни", isCorrect: false },
              { answerText: "Как вести себя в обществе", isCorrect: false },
              { answerText: "О несчастной любви", isCorrect: false },
              {
                answerText:
                  "история об ученом, который продает свою душу дьяволу в обмен на знание и мирские удовольствия",
                isCorrect: true,
              },
            ],
          },
          // вопросы по зарубежной литературе
        ],
      },
    ],
  },
];

export default quizData;
