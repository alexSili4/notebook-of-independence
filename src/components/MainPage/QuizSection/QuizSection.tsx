import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';
import { FC, useState } from 'react';
import { Section, Background, Container } from './QuizSection.styled';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import QuizSectionDecorativeElements from '@MainPageComponents/QuizSectionDecorativeElements';
import { IProps } from './QuizSection.types';
import AnimatedQuizSectionContent from '@AnimatedMainPageComponents/AnimatedQuizSectionContent';
import AnimatedQuizSectionModalWin from '@AnimatedMainPageComponents/AnimatedQuizSectionModalWin';

const QuizSection: FC<IProps> = ({ animationDuration, inView }) => {
  const [showModalWin, setShowModalWin] = useState<boolean>(true);

  const toggleShowModalWin = () => {
    setShowModalWin((prevState) => !prevState);
  };

  const onShowQuizBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    toggleShowModalWin();
  };

  return (
    <>
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
      <AnimatedQuizSectionModalWin
        showModalWin={showModalWin}
        setModalWinState={toggleShowModalWin}
      />
    </>
  );
};

export default QuizSection;
