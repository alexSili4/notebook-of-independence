import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';
import { FC } from 'react';
import { Section, Background, Container } from './QuizSection.styled';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import QuizSectionDecorativeElements from '@MainPageComponents/QuizSectionDecorativeElements';
import { IProps } from './QuizSection.types';
import AnimatedQuizSectionContent from '@AnimatedMainPageComponents/AnimatedQuizSectionContent';

const QuizSection: FC<IProps> = ({ animationDuration, inView }) => {
  const onShowQuizBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    console.log('onShowQuizBtnClick');
  };

  return (
    <Section>
      <GeneralContainer>
        <Background>
          <Container>
            <AnimatedQuizSectionContent
              animationDuration={animationDuration}
              inView={inView}
              onShowQuizBtnClick={onShowQuizBtnClick}
            />
            <QuizSectionDecorativeElements
              animationDuration={animationDuration}
              inView={inView}
            />
          </Container>
        </Background>
      </GeneralContainer>
    </Section>
  );
};

export default QuizSection;
