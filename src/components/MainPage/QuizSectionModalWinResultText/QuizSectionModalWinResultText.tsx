import { FC } from 'react';
import {
  Container,
  CharacteristicText,
  CharacteristicWrap,
  Content,
  Hashtag,
  TotalScoreText,
  TotalScoreTextPart,
  TotalScoreWrap,
  HashtagWrap,
  StarMobImg,
} from './QuizSectionModalWinResultText.styled';
import starMob from '@/images/quiz/questions/star-mob-min.png';
import { IProps } from './QuizSectionModalWinResultText.types';

const QuizSectionModalWinResultText: FC<IProps> = ({
  totalQuestions,
  totalScore,
  characteristic,
}) => {
  return (
    <Container>
      <HashtagWrap>
        <Hashtag>#зошитнезалежності</Hashtag>
      </HashtagWrap>
      <Content>
        <CharacteristicWrap>
          <TotalScoreWrap>
            <TotalScoreText>
              <TotalScoreTextPart>{totalScore}</TotalScoreTextPart>
              <TotalScoreTextPart>\</TotalScoreTextPart>
              <TotalScoreTextPart>{totalQuestions}</TotalScoreTextPart>
            </TotalScoreText>
          </TotalScoreWrap>
          <CharacteristicText>{characteristic}</CharacteristicText>
        </CharacteristicWrap>
      </Content>
      <StarMobImg
        src={starMob}
        alt='Зошит Незалежності – проєкт «Сільпо» спільно з родиною Левка Лук’яненка – Фото 71'
      />
    </Container>
  );
};

export default QuizSectionModalWinResultText;
