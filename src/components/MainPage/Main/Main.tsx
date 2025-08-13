import { FC, useEffect, useRef, useState } from 'react';
import { IProps } from './Main.types';
import { useScroll, useTransform } from 'framer-motion';
import { Container } from './Main.styled';
import { useIsDesk, useIsScrollingPageUp } from '@/hooks';
import HeroSection from '@MainPageComponents/HeroSection';
import AnimatedChronicleSection from '@AnimatedMainPageComponents/AnimatedChronicleSection';
import AnimatedAboutSection from '@AnimatedMainPageComponents/AnimatedAboutSection';
import AnimatedNewHistorySection from '@AnimatedMainPageComponents/AnimatedNewHistorySection';
import AnimatedAzovSection from '@AnimatedMainPageComponents/AnimatedAzovSection';
import AnimatedNotebookSection from '@AnimatedMainPageComponents/AnimatedNotebookSection';
import AnimatedBuyNotebookSection from '@AnimatedMainPageComponents/AnimatedBuyNotebookSection';
import AnimatedQuizSection from '@AnimatedMainPageComponents/AnimatedQuizSection';
import AnimatedDonationSection from '@AnimatedMainPageComponents/AnimatedDonationSection';
import { disableScroll, unDisableScroll } from '@/utils';

const Main: FC<IProps> = ({ updateShowFullScreenHeroVideo }) => {
  const [progress, setProgress] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const timerId = useRef<NodeJS.Timeout>();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const scrollProgress = useTransform(
    scrollYProgress,
    [0, 0.07, 0.9, 1],
    [0, 0, 17, 17],
    {
      clamp: true,
    }
  );
  const isDesk = useIsDesk();
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
  const azovSectionInView = progress >= 13;
  const notebookSectionInView = progress >= 14;
  const buyNotebookSectionInView = progress >= 15;
  const quizSectionInView = progress >= 16;
  const donationSectionInView = progress >= 17;

  const isSmoothChronicleSectionAnimation =
    (isScrollingPageUp && aboutSectionContentVideoInView) ||
    chronicleSectionInView;
  const chronicleSectionAnimationDuration = 4;
  const chronicleSectionAnimationBounce = 0.2;
  const generalAnimationDuration = 2.5;
  const aboutSectionAnimationBounce = isSmoothChronicleSectionAnimation
    ? chronicleSectionAnimationBounce
    : 0.4;
  const aboutSectionAnimationDuration = isSmoothChronicleSectionAnimation
    ? chronicleSectionAnimationDuration
    : generalAnimationDuration;
  const isSmoothNotebookSectionAnimation =
    isScrollingPageUp && azovSectionInView;
  const notebookSectionAnimationBounce = 0.2;
  const azovSectionAnimationBounce = isSmoothNotebookSectionAnimation
    ? notebookSectionAnimationBounce
    : 0.4;
  const notebookSectionAnimationDuration = 4;
  const azovSectionAnimationDuration = isSmoothNotebookSectionAnimation
    ? notebookSectionAnimationDuration
    : generalAnimationDuration;

  useEffect(() => {
    const onProgressChange = (value: number) => {
      setProgress(value);
    };

    const unsubscribe = scrollProgress.on('change', onProgressChange);

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    updateShowFullScreenHeroVideo(heroSectionVideoInView);
  }, [heroSectionVideoInView, updateShowFullScreenHeroVideo]);

  useEffect(() => {
    if (!isDesk) {
      return;
    }

    disableScroll();

    timerId.current = setTimeout(() => {
      unDisableScroll();
    }, 3000);

    return () => {
      clearTimeout(timerId.current);
    };
  }, [
    heroSectionVideoInView,
    newHistorySectionInView,
    newHistorySectionNotebookInView,
    aboutSectionInView,
    aboutSectionContentInView,
    aboutSectionContentVideoInView,
    chronicleSectionInView,
    chronicleSectionFirstStepInView,
    chronicleSectionSecondStepInView,
    chronicleSectionThirdStepInView,
    chronicleSectionFourthStepInView,
    chronicleSectionFifthStepInView,
    chronicleSectionContentInView,
    azovSectionInView,
    notebookSectionInView,
    quizSectionInView,
    donationSectionInView,
  ]);

  return (
    <Container ref={containerRef}>
      <HeroSection
        animationDuration={generalAnimationDuration}
        animationDelay={1}
        isDesk={isDesk}
        videoInView={heroSectionVideoInView}
      />
      <AnimatedNewHistorySection
        animationDuration={generalAnimationDuration}
        sectionInView={newHistorySectionInView}
        notebookInView={newHistorySectionNotebookInView}
        isDesk={isDesk}
      />
      <AnimatedAboutSection
        inView={aboutSectionInView}
        contentInView={aboutSectionContentInView}
        videoInView={aboutSectionContentVideoInView}
        nextSectionInView={chronicleSectionInView}
        animationDuration={generalAnimationDuration}
        sectionAnimationBounce={aboutSectionAnimationBounce}
        sectionAnimationDuration={aboutSectionAnimationDuration}
        exitAnimationBounce={chronicleSectionAnimationBounce}
        exitAnimationDuration={chronicleSectionAnimationDuration}
        isDesk={isDesk}
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
        isDesk={isDesk}
      />
      <AnimatedAzovSection
        animationDuration={azovSectionAnimationDuration}
        inView={azovSectionInView}
        animationBounce={azovSectionAnimationBounce}
        exitAnimationBounce={notebookSectionAnimationBounce}
        exitAnimationDuration={notebookSectionAnimationDuration}
        nextSectionInView={notebookSectionInView}
      />
      <AnimatedNotebookSection
        animationDuration={notebookSectionAnimationDuration}
        inView={notebookSectionInView}
        animationBounce={notebookSectionAnimationBounce}
        nextSectionInView={buyNotebookSectionInView}
        exitAnimationBounce={notebookSectionAnimationBounce}
        exitAnimationDuration={notebookSectionAnimationDuration}
      />
      <AnimatedBuyNotebookSection
        animationDuration={notebookSectionAnimationDuration}
        inView={buyNotebookSectionInView}
        animationBounce={notebookSectionAnimationBounce}
        isDesk={isDesk}
      />
      <AnimatedQuizSection
        animationDuration={generalAnimationDuration}
        inView={quizSectionInView}
      />
      <AnimatedDonationSection
        animationDuration={generalAnimationDuration}
        inView={donationSectionInView}
      />
    </Container>
  );
};

export default Main;
