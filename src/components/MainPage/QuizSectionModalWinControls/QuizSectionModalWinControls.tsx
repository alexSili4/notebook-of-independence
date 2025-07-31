import { FC } from 'react';
import {
  Container,
  CloseImg,
  CloseModalWinBtn,
  CloseModalWinBtnTitle,
  GoBackBtn,
  GoBackImg,
} from './QuizSectionModalWinControls.styled';
import goBack from '@/images/quiz/go-back.png';
import close from '@/images/quiz/close.png';
import { IProps } from './QuizSectionModalWinControls.types';

const QuizSectionModalWinControls: FC<IProps> = ({
  onGoBackBtnClick,
  disabledGoBackBtn,
  onCloseModalWinBtnClick,
}) => {
  return (
    <Container>
      <GoBackBtn
        type='button'
        onClick={onGoBackBtnClick}
        disabled={disabledGoBackBtn}
      >
        <GoBackImg src={goBack} alt='' />
      </GoBackBtn>
      <CloseModalWinBtn type='button' onClick={onCloseModalWinBtnClick}>
        <CloseModalWinBtnTitle>закрити квест</CloseModalWinBtnTitle>
        <CloseImg src={close} alt='' />
      </CloseModalWinBtn>
    </Container>
  );
};

export default QuizSectionModalWinControls;
