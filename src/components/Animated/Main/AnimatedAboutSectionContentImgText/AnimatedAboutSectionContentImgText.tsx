import { FC } from 'react';
import {
  Container,
  Element,
} from './AnimatedAboutSectionContentImgText.styled';
import { IProps } from './AnimatedAboutSectionContentImgText.types';

const AnimatedAboutSectionContentImgText: FC<IProps> = ({
  animate,
  children,
  containerVariants,
  elementVariants,
}) => {
  return (
    <Container animate={animate} variants={containerVariants} initial='visible'>
      <Element variants={elementVariants}>{children}</Element>
    </Container>
  );
};

export default AnimatedAboutSectionContentImgText;
