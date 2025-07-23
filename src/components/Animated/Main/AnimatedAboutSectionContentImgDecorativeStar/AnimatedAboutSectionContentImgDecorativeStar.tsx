import { FC } from 'react';
import decorativeStar from '@/images/about/decorative-star.png';
import {
  Container,
  DecorativeStar,
  Element,
} from './AnimatedAboutSectionContentImgDecorativeStar.styled';
import { IProps } from './AnimatedAboutSectionContentImgDecorativeStar.types';

const AnimatedAboutSectionContentImgDecorativeStar: FC<IProps> = ({
  animate,
  containerVariants,
  elementVariants,
}) => {
  return (
    <Container animate={animate} variants={containerVariants} initial='visible'>
      <Element variants={elementVariants}>
        <DecorativeStar src={decorativeStar} alt='' />
      </Element>
    </Container>
  );
};

export default AnimatedAboutSectionContentImgDecorativeStar;
