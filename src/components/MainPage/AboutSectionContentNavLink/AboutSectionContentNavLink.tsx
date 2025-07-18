import { PagePaths } from '@/constants';
import { FC } from 'react';
import {
  ArrowImg,
  Container,
  StyledLink,
  Text,
  TextWrap,
} from './AboutSectionContentNavLink.styled';
import arrow from '@/images/about/arrow.png';

const AboutSectionContentNavLink: FC = () => {
  return (
    <StyledLink to={PagePaths.way}>
      <Container>
        <TextWrap>
          <Text>Шлях крізь систему</Text>
          <ArrowImg src={arrow} alt='' />
        </TextWrap>
      </Container>
    </StyledLink>
  );
};

export default AboutSectionContentNavLink;
