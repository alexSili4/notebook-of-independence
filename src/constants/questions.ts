import { IQuestions } from '@/types/questions.types';

const questions: IQuestions = {
  list: {
    0: {
      question:
        'Хто запропонував написати документ про проголошення незалежності України?',
      variants: [
        {
          text: "В'ячеслав Чорновіл",
          isCorrectAnswer: false,
        },
        {
          text: 'Леонід Кравчук',
          isCorrectAnswer: false,
        },
        {
          text: 'Левко Лук’яненко',
          isCorrectAnswer: true,
        },
        {
          text: 'Леонтій Сандуляк',
          isCorrectAnswer: false,
        },
      ],
    },
    1: {
      question: 'Чому текст документа вирішили зробити коротким?',
      variants: [
        {
          text: 'Щоб встигнути проголосувати до вечора',
          isCorrectAnswer: false,
        },
        {
          text: 'Щоб уникнути довгих дискусій',
          isCorrectAnswer: true,
        },
        {
          text: 'Через брак місця на папері',
          isCorrectAnswer: false,
        },
        {
          text: 'Бо не було кому його редагувати',
          isCorrectAnswer: false,
        },
      ],
    },
    2: {
      question: 'Яке слово спочатку хотіли використати замість «проголошення»?',
      variants: [
        {
          text: 'Утвердження',
          isCorrectAnswer: false,
        },
        {
          text: 'Відродження',
          isCorrectAnswer: true,
        },
        {
          text: 'Створення',
          isCorrectAnswer: false,
        },
        {
          text: 'Заснування',
          isCorrectAnswer: false,
        },
      ],
    },
    3: {
      question: ' Яку пісню заспівали у Раді після проголошення незалежності?',
      variants: [
        {
          text: '«Ще не вмерла Україна»',
          isCorrectAnswer: false,
        },
        {
          text: '«Ой, у лузі червона калина»',
          isCorrectAnswer: true,
        },
        {
          text: '«Пливе кача»',
          isCorrectAnswer: false,
        },
        {
          text: '«Гей, соколи!»',
          isCorrectAnswer: false,
        },
      ],
    },
    4: {
      question:
        'Що відбулося з Левком Лук’яненком після голосування, коли він вийшов на вулицю?',
      variants: [
        {
          text: 'Його заарештували',
          isCorrectAnswer: false,
        },
        {
          text: 'Його почали підкидати на руках',
          isCorrectAnswer: true,
        },
        {
          text: 'Його не впізнали',
          isCorrectAnswer: false,
        },
        {
          text: 'Його запросили у прямий ефір проголосити незалежність',
          isCorrectAnswer: false,
        },
      ],
    },
  },
  characteristics: [
    'На нулі, але тільки щоб розігнатись',
    'Пройшов квест і вижив',
    'Як Верховна Рада: працює, але з косяками',
    'На 60% експерт, на 100% красавчик',
    'Майже герой національного масштабу!',
    'Левко б аплодував стоячи',
  ],
};

export default questions;
