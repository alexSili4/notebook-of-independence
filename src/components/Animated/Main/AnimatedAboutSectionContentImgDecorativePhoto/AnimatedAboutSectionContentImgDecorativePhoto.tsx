import { FC } from 'react';
import decorativePhoto from '@/images/about/decorative-photo-min.png';
import {
  DecorativePhoto,
  Container,
  Element,
} from './AnimatedAboutSectionContentImgDecorativePhoto.styled';
import { IProps } from './AnimatedAboutSectionContentImgDecorativePhoto.types';

const AnimatedAboutSectionContentImgDecorativePhoto: FC<IProps> = ({
  animate,
  containerVariants,
  elementVariants,
}) => {
  return (
    <Container animate={animate} variants={containerVariants} initial='visible'>
      <Element variants={elementVariants}>
        <DecorativePhoto src={decorativePhoto} alt='' />
      </Element>
    </Container>
  );
};

export default AnimatedAboutSectionContentImgDecorativePhoto;
