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
  TextImg,
  HashtagWrap,
  TextLineTop,
  TextLineCenter,
  TextLineBottom,
  StarMobImg,
} from './QuizSectionModalWinResultText.styled';
import text from '@/images/quiz/questions/text.png';
import starMob from '@/images/quiz/questions/star-mob.png';
import { IProps } from './QuizSectionModalWinResultText.types';

const QuizSectionModalWinResultText: FC<IProps> = ({
  totalQuestions,
  totalScore,
}) => {
  return (
    <Container>
      <HashtagWrap>
        <Hashtag>#зошитнезалежності</Hashtag>
      </HashtagWrap>
      <Content>
        <TextImg src={text} alt='' />
        <CharacteristicWrap>
          <TotalScoreWrap>
            <TotalScoreText>
              <TotalScoreTextPart>{totalScore}</TotalScoreTextPart>
              <TotalScoreTextPart>\</TotalScoreTextPart>
              <TotalScoreTextPart>{totalQuestions}</TotalScoreTextPart>
            </TotalScoreText>
          </TotalScoreWrap>
          <CharacteristicText>
            Майже герой національного масштабу!
          </CharacteristicText>
          <TextLineTop></TextLineTop>
          <TextLineCenter></TextLineCenter>
          <TextLineBottom></TextLineBottom>
        </CharacteristicWrap>
      </Content>
      <StarMobImg src={starMob} alt='' />
    </Container>
  );
};

export default QuizSectionModalWinResultText;
