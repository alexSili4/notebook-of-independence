import { FC } from 'react';
import lineLeft from '@/images/quiz/line-left.png';
import lineRight from '@/images/quiz/line-right.png';
import { LineLeft, LineRight } from './QuizSectionDecorativeElements.styled';
import AnimatedQuizSectionDecorativeElements from '@AnimatedMainPageComponents/AnimatedQuizSectionDecorativeElements';
import { IProps } from './QuizSectionDecorativeElements.types';

const QuizSectionDecorativeElements: FC<IProps> = ({
  animationDuration,
  inView,
}) => {
  return (
    <>
      <LineLeft src={lineLeft} alt='' />
      <LineRight src={lineRight} alt='' />
      <AnimatedQuizSectionDecorativeElements
        animationDuration={animationDuration}
        inView={inView}
      />
    </>
  );
};

export default QuizSectionDecorativeElements;
