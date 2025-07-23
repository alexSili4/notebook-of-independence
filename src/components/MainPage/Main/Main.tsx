import { FC, useEffect, useRef, useState } from 'react';
import HeroSection from '@MainPageComponents/HeroSection';
import { IProps } from './Main.types';
import AnimatedNewHistorySection from '@AnimatedMainPageComponents/AnimatedNewHistorySection';
import { useScroll, useTransform } from 'framer-motion';
import AnimatedAboutSection from '@AnimatedMainPageComponents/AnimatedAboutSection';
import { Container } from './Main.styled';

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
      />
    </Container>
  );
};

export default Main;
