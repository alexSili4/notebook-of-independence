import { FC, useRef } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import AnimatedAboutSectionContentSlideFirst from '@AnimatedMainPageComponents/AnimatedAboutSectionContentSlideFirst';
import AnimatedAboutSectionContentSlideSecond from '@AnimatedMainPageComponents/AnimatedAboutSectionContentSlideSecond';
import AnimatedAboutSectionContentSlideThird from '@AnimatedMainPageComponents/AnimatedAboutSectionContentSlideThird';
import AnimatedAboutSectionContentSlideFourth from '@AnimatedMainPageComponents/AnimatedAboutSectionContentSlideFourth';
import AnimatedAboutSectionContentSlideFifth from '@AnimatedMainPageComponents/AnimatedAboutSectionContentSlideFifth';
import { Container, DecorativeLines } from './AboutSectionContentSlider.styled';
import decorativeLines from '@/images/about/decorative-lines-mob-min.png';
import { IProps } from './AboutSectionContentSlider.types';
import { useInView } from 'framer-motion';
import AboutSectionContentSliderPagination from '@MainPageComponents/AboutSectionContentSliderPagination';

const AboutSectionContentSlider: FC<IProps> = ({ animationDuration }) => {
  const sliderRef = useRef<SwiperRef>(null);
  const firstSlideRef = useRef<HTMLDivElement>(null);
  const firstSlideInView = useInView(firstSlideRef, { amount: 0.5 });
  const secondSlideRef = useRef<HTMLDivElement>(null);
  const secondSlideInView = useInView(secondSlideRef, { amount: 0.5 });
  const thirdSlideRef = useRef<HTMLDivElement>(null);
  const thirdSlideInView = useInView(thirdSlideRef, { amount: 0.5 });
  const fourthSlideRef = useRef<HTMLDivElement>(null);
  const fourthSlideInView = useInView(fourthSlideRef, { amount: 0.5 });
  const fifthSlideRef = useRef<HTMLDivElement>(null);
  const fifthSlideInView = useInView(fifthSlideRef, { amount: 0.5 });

  const onNextBtnClick = () => {
    sliderRef.current?.swiper.slideNext();
  };

  return (
    <Container>
      <DecorativeLines src={decorativeLines} alt='' />
      <Swiper ref={sliderRef} speed={animationDuration * 1000}>
        <SwiperSlide>
          <AnimatedAboutSectionContentSlideFirst
            containerRef={firstSlideRef}
            animationDuration={animationDuration}
            nextSlideInView={
              secondSlideInView ||
              thirdSlideInView ||
              fourthSlideInView ||
              fifthSlideInView
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <AnimatedAboutSectionContentSlideSecond
            animationDuration={animationDuration}
            containerRef={secondSlideRef}
            inView={
              secondSlideInView ||
              thirdSlideInView ||
              fourthSlideInView ||
              fifthSlideInView
            }
            playMarkerAnimation={firstSlideInView}
            onNextBtnClick={onNextBtnClick}
          />
        </SwiperSlide>
        <SwiperSlide>
          <AnimatedAboutSectionContentSlideThird
            animationDuration={animationDuration}
            containerRef={thirdSlideRef}
            inView={thirdSlideInView}
            nextSlideInView={fourthSlideInView || fifthSlideInView}
            playMarkerAnimation={secondSlideInView}
            onNextBtnClick={onNextBtnClick}
          />
        </SwiperSlide>
        <SwiperSlide>
          <AnimatedAboutSectionContentSlideFourth
            animationDuration={animationDuration}
            containerRef={fourthSlideRef}
            inView={fourthSlideInView}
            nextSlideInView={fifthSlideInView}
            playMarkerAnimation={thirdSlideInView}
            onNextBtnClick={onNextBtnClick}
          />
        </SwiperSlide>
        <SwiperSlide>
          <AnimatedAboutSectionContentSlideFifth
            animationDuration={animationDuration}
            containerRef={fifthSlideRef}
            inView={fifthSlideInView}
            playMarkerAnimation={fourthSlideInView}
            onNextBtnClick={onNextBtnClick}
          />
        </SwiperSlide>
        <AboutSectionContentSliderPagination />
      </Swiper>
    </Container>
  );
};

export default AboutSectionContentSlider;
