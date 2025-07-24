import { FC, useEffect, useRef, useState } from 'react';
import { IProps } from './Main.types';
import { useScroll, useTransform } from 'framer-motion';
import { Container } from './Main.styled';
import AnimatedChronicleSection from '@AnimatedMainPageComponents/AnimatedChronicleSection';
import AnimatedAboutSection from '@AnimatedMainPageComponents/AnimatedAboutSection';
import AnimatedNewHistorySection from '@AnimatedMainPageComponents/AnimatedNewHistorySection';
import HeroSection from '@MainPageComponents/HeroSection';

const Main: FC<IProps> = ({ updateShowFullScreenHeroVideo }) => {
  const [progress, setProgress] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const scrollProgress = useTransform(scrollYProgress, [0, 1], [0, 100], {
    clamp: true,
  });

  const heroSectionVideoInView = progress >= 15;
  const newHistorySectionInView = progress >= 20;
  const newHistorySectionNotebookInView = progress >= 25;
  const aboutSectionInView = progress >= 30;
  const aboutSectionContentInView = progress >= 35;
  const aboutSectionContentVideoInView = progress >= 40;
  const chronicleSectionInView = progress >= 45;
  const chronicleSectionFirstStepInView = progress >= 50;
  const chronicleSectionSecondStepInView = progress >= 55;
  const chronicleSectionThirdStepInView = progress >= 60;
  const chronicleSectionFourthStepInView = progress >= 65;
  const chronicleSectionFifthStepInView = progress >= 70;
  const chronicleSectionContentInView = chronicleSectionFirstStepInView;

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
        animationDuration={2.5}
        inView={aboutSectionInView}
        contentInView={aboutSectionContentInView}
        videoInView={aboutSectionContentVideoInView}
        nextSectionInView={chronicleSectionInView}
      />
      <AnimatedChronicleSection
        contentInView={chronicleSectionContentInView}
        fifthStepInView={chronicleSectionFifthStepInView}
        firstStepInView={chronicleSectionFirstStepInView}
        fourthStepInView={chronicleSectionFourthStepInView}
        secondStepInView={chronicleSectionSecondStepInView}
        thirdStepInView={chronicleSectionThirdStepInView}
        animationDuration={2.5}
        inView={chronicleSectionInView}
        nextSectionInView={chronicleSectionFirstStepInView}
      />
    </Container>
  );
};

export default Main;
