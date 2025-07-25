import { FC, useEffect, useRef, useState } from 'react';
import { IProps } from './Main.types';
import { useScroll, useTransform } from 'framer-motion';
import { Container } from './Main.styled';
import AnimatedChronicleSection from '@AnimatedMainPageComponents/AnimatedChronicleSection';
import AnimatedAboutSection from '@AnimatedMainPageComponents/AnimatedAboutSection';
import AnimatedNewHistorySection from '@AnimatedMainPageComponents/AnimatedNewHistorySection';
import HeroSection from '@MainPageComponents/HeroSection';
import { useIsScrollingPageUp } from '@/hooks';

const Main: FC<IProps> = ({ updateShowFullScreenHeroVideo }) => {
  const [progress, setProgress] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const scrollProgress = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0, 0, 15, 15],
    {
      clamp: true,
    }
  );
  const isScrollingPageUp = useIsScrollingPageUp();

  const heroSectionVideoInView = progress >= 1;
  const newHistorySectionInView = progress >= 2;
  const newHistorySectionNotebookInView = progress >= 3;
  const aboutSectionInView = progress >= 4;
  const aboutSectionContentInView = progress >= 5;
  const aboutSectionContentVideoInView = progress >= 6;
  const chronicleSectionInView = progress >= 7;
  const chronicleSectionFirstStepInView = progress >= 8;
  const chronicleSectionSecondStepInView = progress >= 9;
  const chronicleSectionThirdStepInView = progress >= 10;
  const chronicleSectionFourthStepInView = progress >= 11;
  const chronicleSectionFifthStepInView = progress >= 12;
  const chronicleSectionContentInView = chronicleSectionFirstStepInView;

  const isSmoothChronicleSectionAnimation =
    (isScrollingPageUp && aboutSectionContentVideoInView) ||
    chronicleSectionInView;
  const chronicleSectionAnimationDuration = 4;
  const chronicleSectionAnimationBounce = 0.2;
  const aboutSectionGeneralAnimationDuration = 2.5;
  const aboutSectionAnimationBounce = isSmoothChronicleSectionAnimation
    ? chronicleSectionAnimationBounce
    : 0.4;
  const aboutSectionAnimationDuration = isSmoothChronicleSectionAnimation
    ? chronicleSectionAnimationDuration
    : aboutSectionGeneralAnimationDuration;

  useEffect(() => {
    const onProgressChange = (value: number) => {
      console.log(value);
      setProgress(value);
    };

    const unsubscribe = scrollProgress.on('change', onProgressChange);

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    updateShowFullScreenHeroVideo(heroSectionVideoInView);
  }, [heroSectionVideoInView, updateShowFullScreenHeroVideo]);

  return (
    <Container ref={containerRef}>
      <HeroSection
        animationDuration={2.5}
        animationDelay={1}
        videoInView={heroSectionVideoInView}
      />
      <AnimatedNewHistorySection
        animationDuration={2.5}
        sectionInView={newHistorySectionInView}
        notebookInView={newHistorySectionNotebookInView}
      />
      <AnimatedAboutSection
        inView={aboutSectionInView}
        contentInView={aboutSectionContentInView}
        videoInView={aboutSectionContentVideoInView}
        nextSectionInView={chronicleSectionInView}
        animationDuration={aboutSectionGeneralAnimationDuration}
        sectionAnimationBounce={aboutSectionAnimationBounce}
        sectionAnimationDuration={aboutSectionAnimationDuration}
        exitAnimationBounce={chronicleSectionAnimationBounce}
        exitAnimationDuration={chronicleSectionAnimationDuration}
      />
      <AnimatedChronicleSection
        contentInView={chronicleSectionContentInView}
        fifthStepInView={chronicleSectionFifthStepInView}
        firstStepInView={chronicleSectionFirstStepInView}
        fourthStepInView={chronicleSectionFourthStepInView}
        secondStepInView={chronicleSectionSecondStepInView}
        thirdStepInView={chronicleSectionThirdStepInView}
        inView={chronicleSectionInView}
        animationBounce={chronicleSectionAnimationBounce}
        animationDuration={chronicleSectionAnimationDuration}
      />
    </Container>
  );
};

export default Main;
