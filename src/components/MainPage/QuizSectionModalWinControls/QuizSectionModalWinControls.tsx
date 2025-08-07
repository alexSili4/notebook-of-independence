import { FC } from 'react';
import {
  Container,
  CloseDarkImg,
  CloseModalWinBtn,
  CloseModalWinBtnTitle,
  GoBackBtn,
  GoBackImg,
  CloseImgWrap,
  CloseLightImg,
} from './QuizSectionModalWinControls.styled';
import goBack from '@/images/quiz/go-back.png';
import closeDark from '@/images/quiz/close-dark.png';
import closeLight from '@/images/quiz/close-light.png';
import { IProps } from './QuizSectionModalWinControls.types';

const QuizSectionModalWinControls: FC<IProps> = ({
  onGoBackBtnClick,
  hiddenGoBackBtn,
  showResult,
  onCloseModalWinBtnClick,
}) => {
  return (
    <Container>
      <GoBackBtn
        showResult={hiddenGoBackBtn}
        type='button'
        onClick={onGoBackBtnClick}
        disabled={hiddenGoBackBtn}
      >
        <GoBackImg src={goBack} alt='' />
      </GoBackBtn>
      <CloseModalWinBtn type='button' onClick={onCloseModalWinBtnClick}>
        <CloseModalWinBtnTitle showResult={showResult}>
          закрити квест
        </CloseModalWinBtnTitle>
        <CloseImgWrap>
          <CloseDarkImg src={closeDark} alt='' showResult={showResult} />
          <CloseLightImg src={closeLight} alt='' showResult={showResult} />
        </CloseImgWrap>
      </CloseModalWinBtn>
    </Container>
  );
};

export default QuizSectionModalWinControls;
