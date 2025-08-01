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
} from './QuizSectionModalWinResultText.styled';
import text from '@/images/quiz/questions/text.png';

const QuizSectionModalWinResultText: FC = () => {
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
              <TotalScoreTextPart>5</TotalScoreTextPart>
              <TotalScoreTextPart>\</TotalScoreTextPart>
              <TotalScoreTextPart>5</TotalScoreTextPart>
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
    </Container>
  );
};

export default QuizSectionModalWinResultText;
