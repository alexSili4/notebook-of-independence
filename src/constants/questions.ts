import { IQuestions } from '@/types/questions.types';

const questions: IQuestions = {
  1: {
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
};

export default questions;
