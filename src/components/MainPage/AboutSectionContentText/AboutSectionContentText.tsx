import { FC } from 'react';
import {
  Container,
  TextLeft,
  TextLeftWrap,
  TextRight,
  TextRightWrap,
} from './AboutSectionContentText.styled';

const AboutSectionContentText: FC = () => {
  return (
    <Container>
      <TextLeftWrap>
        <TextLeft>
          Все життя я бачив себе однією з ланок у ланцюжку боротьби за
          незалежність України.
        </TextLeft>
        {/* TODO: decorative line */}
      </TextLeftWrap>
      <TextRightWrap>
        <TextRight>Корені сучасних проблем лежать у минулому.</TextRight>
        {/* TODO: decorative line */}
      </TextRightWrap>
    </Container>
  );
};

export default AboutSectionContentText;
