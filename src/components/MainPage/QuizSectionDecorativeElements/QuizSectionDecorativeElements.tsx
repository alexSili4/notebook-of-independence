import { FC } from 'react';
import lineLeftDesk from '@/images/quiz/line-left-desk.png';
import lineLeftMob from '@/images/quiz/line-left-mob.png';
import lineRight from '@/images/quiz/line-right.png';
import { LineLeft, LineRight } from './QuizSectionDecorativeElements.styled';
import AnimatedQuizSectionDecorativeElements from '@AnimatedMainPageComponents/AnimatedQuizSectionDecorativeElements';
import { IProps } from './QuizSectionDecorativeElements.types';
import { theme } from '@/constants';

const QuizSectionDecorativeElements: FC<IProps> = ({
  animationDuration,
  inView,
}) => {
  const deskMedia = `(min-width: ${theme.breakpoints.desk}px)`;

  return (
    <>
      <LineLeft>
        <source srcSet={lineLeftDesk} media={deskMedia} />
        <img src={lineLeftMob} alt='' />
      </LineLeft>
      <LineRight src={lineRight} alt='' />
      <AnimatedQuizSectionDecorativeElements
        animationDuration={animationDuration}
        inView={inView}
      />
    </>
  );
};

export default QuizSectionDecorativeElements;
