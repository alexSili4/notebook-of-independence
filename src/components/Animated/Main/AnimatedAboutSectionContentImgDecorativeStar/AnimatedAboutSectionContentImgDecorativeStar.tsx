import { FC } from 'react';
import decorativeStar from '@/images/about/decorative-star-min.png';
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
        <DecorativeStar
          src={decorativeStar}
          alt='Зошит Незалежності – проєкт «Сільпо» спільно з родиною Левка Лук’яненка – Фото 21'
        />
      </Element>
    </Container>
  );
};

export default AnimatedAboutSectionContentImgDecorativeStar;
