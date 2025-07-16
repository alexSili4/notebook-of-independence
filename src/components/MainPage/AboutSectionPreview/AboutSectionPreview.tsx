import { FC } from 'react';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import {
  Background,
  StarImg,
  Container,
  PhotoLeft,
  PhotoRight,
  BookImg,
  Title,
  TitlePart,
  PhotoLeftWrap,
  PhotoRightWrap,
  TitleWrap,
} from './AboutSectionPreview.styled';
import photoLeft from '@/images/about/photo-left.png';
import photoRight from '@/images/about/photo-right.png';
import book from '@/images/about/book.png';
import star from '@/images/about/star.png';

const AboutSectionPreview: FC = () => {
  return (
    <GeneralContainer>
      <Background>
        <Container>
          <TitleWrap>
            <Title>
              <TitlePart>Хто такий</TitlePart>
              <TitlePart>Левко Лукʼяненко?</TitlePart>
            </Title>
            <PhotoRightWrap>
              <BookImg src={book} alt='' />
              <PhotoRight src={photoRight} alt='' />
            </PhotoRightWrap>
            <PhotoLeftWrap>
              <StarImg src={star} alt='' />
              <PhotoLeft src={photoLeft} alt='' />
            </PhotoLeftWrap>
          </TitleWrap>
        </Container>
      </Background>
    </GeneralContainer>
  );
};

export default AboutSectionPreview;
