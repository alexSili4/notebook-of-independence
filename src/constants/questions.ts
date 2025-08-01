import { IQuestions } from '@/types/questions.types';

const questions: IQuestions = {
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
};

export default questions;
