import { IUseAboutSectionContentImages } from '@/types/hooks.types';
import { useState } from 'react';

export const useAboutSectionContentImages =
  (): IUseAboutSectionContentImages => {
    const [currentStep, setCurrentStep] = useState<number>(1);

    const incrementCurrentStep = (isCurrentStep: boolean) => {
      if (!isCurrentStep) {
        return;
      }

      setCurrentStep((prevState) => (prevState += 1));
    };

    const isFirstStep = currentStep === 1;
    const isSecondStep = currentStep === 2;
    const isThirdStep = currentStep === 3;
    const isFourthStep = currentStep === 4;
    const isFifthStep = currentStep === 5;

    const onFirstBtnMouseEnter = () => {
      incrementCurrentStep(isFirstStep);
    };

    const onSecondBtnMouseEnter = () => {
      incrementCurrentStep(isSecondStep);
    };

    const onThirdBtnMouseEnter = () => {
      incrementCurrentStep(isThirdStep);
    };

    const onFourthBtnMouseEnter = () => {
      incrementCurrentStep(isFourthStep);
    };

    const onFifthBtnMouseEnter = () => {
      incrementCurrentStep(isFifthStep);
    };

    return {
      onFifthBtnMouseEnter,
      onFourthBtnMouseEnter,
      onThirdBtnMouseEnter,
      onSecondBtnMouseEnter,
      onFirstBtnMouseEnter,
      isFirstStep,
      isSecondStep,
      isThirdStep,
      isFourthStep,
      isFifthStep,
    };
  };

export default useAboutSectionContentImages;
