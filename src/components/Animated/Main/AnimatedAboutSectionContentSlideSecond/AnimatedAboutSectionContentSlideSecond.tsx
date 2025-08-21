import { FC } from 'react';
import {
  Container,
  Image,
  ImageWrap,
  MarkerWrap,
  Desc,
  DescWrap,
  Text,
  Content,
  Button,
} from './AnimatedAboutSectionContentSlideSecond.styled';
import AboutSectionContentImagesMarker from '@MainPageComponents/AboutSectionContentImagesMarker';
import light from '@/images/about/photo-bottom-right-min.png';
import { Transition, VariantLabels, Variants } from 'framer-motion';
import { IProps } from './AnimatedAboutSectionContentSlideSecond.types';

const AnimatedAboutSectionContentSlideSecond: FC<IProps> = ({
  animationDuration,
  containerRef,
  inView,
  playMarkerAnimation,
  onNextBtnClick,
}) => {
  const disabledBtn = inView;
  const animate: VariantLabels = inView ? 'visible' : 'hidden';

  const containerVariants: Variants = {
    hidden: {},
    visible: {},
  };

  const transition: Transition = {
    type: 'spring',
    duration: animationDuration,
    bounce: 0.4,
  };

  const elementVariants: Variants = {
    hidden: {
      x: '-51vw',
      transition,
    },
    visible: {
      x: 0,
      transition,
    },
  };

  return (
    <Container
      ref={containerRef}
      animate={animate}
      variants={containerVariants}
      initial='hidden'
    >
      <Content>
        <ImageWrap variants={elementVariants}>
          <Button type='button' onClick={onNextBtnClick} disabled={disabledBtn}>
            <Image src={light} alt='' />
          </Button>
          <MarkerWrap isHidden={disabledBtn}>
            <AboutSectionContentImagesMarker
              isCurrentStep={playMarkerAnimation}
            />
          </MarkerWrap>
        </ImageWrap>
        <DescWrap>
          <Desc>
            "Все життя я бачив себе однією з ланок у ланцюжку боротьби за
            незалежність України."
          </Desc>
        </DescWrap>
      </Content>
      <Text>
        Ще в юності присягнув боротися за незалежну Україну. «Я тоді став і
        поклявся перед небом», — згадував Лук’яненко.
      </Text>
    </Container>
  );
};

export default AnimatedAboutSectionContentSlideSecond;
