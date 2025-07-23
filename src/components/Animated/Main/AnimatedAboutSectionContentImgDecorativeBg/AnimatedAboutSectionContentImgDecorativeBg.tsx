import { FC } from 'react';
import {
  Container,
  DecorativeBackground,
  Element,
} from './AnimatedAboutSectionContentImgDecorativeBg.styled';
import { IProps } from './AnimatedAboutSectionContentImgDecorativeBg.types';
import decorativeBackground from '@/images/about/decorative-background.png';

const AnimatedAboutSectionContentImgDecorativeBg: FC<IProps> = ({
  animate,
  containerVariants,
  elementVariants,
}) => {
  return (
    <Container animate={animate} variants={containerVariants} initial='visible'>
      <Element variants={elementVariants}>
        <DecorativeBackground src={decorativeBackground} alt='' />
      </Element>
    </Container>
  );
};

export default AnimatedAboutSectionContentImgDecorativeBg;
