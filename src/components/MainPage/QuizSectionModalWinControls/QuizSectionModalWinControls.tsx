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
import goBack from '@/images/quiz/go-back-min.png';
import closeDark from '@/images/quiz/close-dark-min.png';
import closeLight from '@/images/quiz/close-light-min.png';
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
        <GoBackImg
          src={goBack}
          alt='Зошит Незалежності – проєкт «Сільпо» спільно з родиною Левка Лук’яненка – Фото 66'
        />
      </GoBackBtn>
      <CloseModalWinBtn type='button' onClick={onCloseModalWinBtnClick}>
        <CloseModalWinBtnTitle showResult={showResult}>
          закрити квест
        </CloseModalWinBtnTitle>
        <CloseImgWrap>
          <CloseDarkImg
            src={closeDark}
            alt='Зошит Незалежності – проєкт «Сільпо» спільно з родиною Левка Лук’яненка – Фото 67'
            showResult={showResult}
          />
          <CloseLightImg
            src={closeLight}
            alt='Зошит Незалежності – проєкт «Сільпо» спільно з родиною Левка Лук’яненка – Фото 68'
            showResult={showResult}
          />
        </CloseImgWrap>
      </CloseModalWinBtn>
    </Container>
  );
};

export default QuizSectionModalWinControls;
