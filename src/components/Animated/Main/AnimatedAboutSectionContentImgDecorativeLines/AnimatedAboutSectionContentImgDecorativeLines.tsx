import { FC } from 'react';
import decorativeLines from '@/images/about/decorative-lines.png';
import {
  Container,
  DecorativeLines,
  Element,
} from './AnimatedAboutSectionContentImgDecorativeLines.styled';
import { IProps } from './AnimatedAboutSectionContentImgDecorativeLines.types';

const AnimatedAboutSectionContentImgDecorativeLines: FC<IProps> = ({
  animate,
  containerVariants,
  elementVariants,
}) => {
  return (
    <Container animate={animate} variants={containerVariants} initial='visible'>
      <Element variants={elementVariants}>
        <DecorativeLines src={decorativeLines} alt='' />
      </Element>
    </Container>
  );
};

export default AnimatedAboutSectionContentImgDecorativeLines;
