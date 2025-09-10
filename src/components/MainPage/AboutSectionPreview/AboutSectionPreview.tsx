import { FC } from 'react';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import {
  Background,
  StarImg,
  Container,
  BookImg,
  TitleWrap,
} from './AboutSectionPreview.styled';
import book from '@/images/about/book-min.png';
import star from '@/images/about/star-min.png';
import AnimatedAboutSectionPreviewPhoto from '@AnimatedMainPageComponents/AnimatedAboutSectionPreviewPhoto';
import { IProps } from './AboutSectionPreview.types';
import AnimatedAboutSectionPreviewTitle from '@AnimatedMainPageComponents/AnimatedAboutSectionPreviewTitle';

const AboutSectionPreview: FC<IProps> = ({
  animationDuration,
  sectionInView,
}) => {
  return (
    <GeneralContainer>
      <Background>
        <Container>
          <TitleWrap>
            <AnimatedAboutSectionPreviewTitle
              animationDuration={animationDuration}
              inView={sectionInView}
            />
            <AnimatedAboutSectionPreviewPhoto
              animationDuration={animationDuration}
              inView={sectionInView}
            />
            <StarImg
              src={star}
              alt='Зошит Незалежності – проєкт «Сільпо» спільно з родиною Левка Лук’яненка – Фото 39'
            />
            <BookImg
              src={book}
              alt='Зошит Незалежності – проєкт «Сільпо» спільно з родиною Левка Лук’яненка – Фото 40'
            />
          </TitleWrap>
        </Container>
      </Background>
    </GeneralContainer>
  );
};

export default AboutSectionPreview;
