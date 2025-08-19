import { FC, useEffect, useRef, useState, WheelEvent } from 'react';
import { IProps } from './Main.types';
import { Container } from './Main.styled';
import { useIsScrollingPageUp } from '@/hooks';
import HeroSection from '@MainPageComponents/HeroSection';
import AnimatedChronicleSection from '@AnimatedMainPageComponents/AnimatedChronicleSection';
import AnimatedAboutSection from '@AnimatedMainPageComponents/AnimatedAboutSection';
import AnimatedNewHistorySection from '@AnimatedMainPageComponents/AnimatedNewHistorySection';
import AnimatedAzovSection from '@AnimatedMainPageComponents/AnimatedAzovSection';
import AnimatedNotebookSection from '@AnimatedMainPageComponents/AnimatedNotebookSection';
import AnimatedBuyNotebookSection from '@AnimatedMainPageComponents/AnimatedBuyNotebookSection';
import AnimatedQuizSection from '@AnimatedMainPageComponents/AnimatedQuizSection';
import AnimatedDonationSection from '@AnimatedMainPageComponents/AnimatedDonationSection';
import { NumberOrNull } from '@/types/types';

const Main: FC<IProps> = ({ updateShowFullScreenHeroVideo, isDesk }) => {
  const [progress, setProgress] = useState<number>(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartY = useRef<NumberOrNull>(null);

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

  const onGoBackBtnClick = () => {
    setProgress(0);
  };

  const incrementProgress = () => {
    if (progress === 17) {
      return;
    }

    setProgress((prevState) => prevState + 1);
  };

  const decrementProgress = () => {
    if (progress === 0) {
      return;
    }

    setProgress((prevState) => prevState - 1);
  };

  const onWheel = (e: WheelEvent<HTMLDivElement>) => {
    if (isScrolling) return;

    if (e.deltaY > 0) {
      incrementProgress();
    } else if (e.deltaY < 0) {
      decrementProgress();
    }

    setIsScrolling(true);
    setTimeout(() => setIsScrolling(false), 2000);
  };

  useEffect(() => {
    updateShowFullScreenHeroVideo(heroSectionVideoInView);
  }, [heroSectionVideoInView, updateShowFullScreenHeroVideo]);

  useEffect(() => {
    const incrementProgress = () => {
      if (progress === 17) {
        return;
      }

      setProgress((prevState) => prevState + 1);
    };

    const decrementProgress = () => {
      if (progress === 0) {
        return;
      }

      setProgress((prevState) => prevState - 1);
    };

    const onTouchend = (e: TouchEvent) => {
      if (touchStartY.current === null || isScrolling) {
        return;
      }

      const diff = touchStartY.current - e.changedTouches[0].clientY;

      if (Math.abs(diff) > 30) {
        if (diff > 0) {
          incrementProgress();
        } else {
          decrementProgress();
        }
      }

      setIsScrolling(true);
      setTimeout(() => setIsScrolling(false), 2000);
      touchStartY.current = null;
    };

    const onTouchstart = (e: TouchEvent) => {
      touchStartY.current = e.changedTouches[0].clientY;
    };

    document.body.addEventListener('touchend', onTouchend);
    document.addEventListener('touchstart', onTouchstart);

    return () => {
      document.body.removeEventListener('touchend', onTouchend);
      document.removeEventListener('touchstart', onTouchstart);
    };
  }, [isScrolling, progress]);

  return (
    <Container ref={containerRef} onWheel={onWheel}>
      <HeroSection
        animationDuration={generalAnimationDuration}
        animationDelay={1}
        isDesk={isDesk}
        videoInView={heroSectionVideoInView}
        nextSectionInView={newHistorySectionInView}
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
        onGoBackBtnClick={onGoBackBtnClick}
      />
    </Container>
  );
};

export default Main;
