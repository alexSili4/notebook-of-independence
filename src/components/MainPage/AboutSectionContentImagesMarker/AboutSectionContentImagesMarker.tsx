import { FC, useEffect, useRef } from 'react';
import dot from '@/lottiefiles/about/dot.json';
import { IProps } from './AboutSectionContentImagesMarker.types';
import { StyledLottie } from './AboutSectionContentImagesMarker.styled';
import { LottieRefCurrentProps } from 'lottie-react';

const AboutSectionContentImagesMarker: FC<IProps> = ({ isCurrentStep }) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    const lottie = lottieRef.current;

    if (!lottie) {
      return;
    }

    if (isCurrentStep) {
      lottie.play();
    } else {
      lottie.stop();
    }
  }, [isCurrentStep]);

  return <StyledLottie animationData={dot} loop={true} lottieRef={lottieRef} />;
};

export default AboutSectionContentImagesMarker;
