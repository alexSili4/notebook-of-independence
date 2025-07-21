import { FC, useEffect, useRef, useState } from 'react';
import HeroSection from '@MainPageComponents/HeroSection';
import { Container } from './Main.styled';
import { useScroll, useTransform } from 'framer-motion';
// import NewHistorySection from '@MainPageComponents/NewHistorySection';
// import AboutSection from '@MainPageComponents/AboutSection';

const Main: FC = () => {
  const [progress, setProgress] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const scrollProgress = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [0, 0, 100, 100],
    {
      clamp: true,
    }
  );

  const isFullScreen = Boolean(progress);

  useEffect(() => {
    const onProgressChange = (value: number) => {
      setProgress(value);
    };

    const unsubscribe = scrollProgress.on('change', onProgressChange);

    return () => unsubscribe();
  }, []);

  return (
    <Container ref={containerRef}>
      <HeroSection
        animationDuration={2}
        animationDelay={1}
        isFullScreen={isFullScreen}
      />
      {/* <NewHistorySection /> */}
      {/* <AboutSection /> */}
    </Container>
  );
};

export default Main;
