import { IUseAboutSectionContentImages } from '@/types/hooks.types';
import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';
import { useState } from 'react';

export const useAboutSectionContentImages =
  (): IUseAboutSectionContentImages => {
    const [currentStep, setCurrentStep] = useState<number>(1);
    const [firstStepInFocus, setFirstStepInFocus] = useState<boolean>(false);
    const [secondStepInFocus, setSecondStepInFocus] = useState<boolean>(false);
    const [thirdStepInFocus, setThirdStepInFocus] = useState<boolean>(false);
    const [fourthStepInFocus, setFourthStepInFocus] = useState<boolean>(false);
    const [fifthStepInFocus, setFifthStepInFocus] = useState<boolean>(false);

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

    const onFirstBtnClick = (e: BtnClickEvent) => {
      makeBlur(e.currentTarget);
      incrementCurrentStep(isFirstStep);

      setFirstStepInFocus(true);
      setSecondStepInFocus(false);
      setThirdStepInFocus(false);
      setFourthStepInFocus(false);
      setFifthStepInFocus(false);
    };

    const onSecondBtnClick = (e: BtnClickEvent) => {
      makeBlur(e.currentTarget);
      incrementCurrentStep(isSecondStep);

      setFirstStepInFocus(false);
      setSecondStepInFocus(true);
      setThirdStepInFocus(false);
      setFourthStepInFocus(false);
      setFifthStepInFocus(false);
    };

    const onThirdBtnClick = (e: BtnClickEvent) => {
      makeBlur(e.currentTarget);
      incrementCurrentStep(isThirdStep);

      setFirstStepInFocus(false);
      setSecondStepInFocus(false);
      setThirdStepInFocus(true);
      setFourthStepInFocus(false);
      setFifthStepInFocus(false);
    };

    const onFourthBtnClick = (e: BtnClickEvent) => {
      makeBlur(e.currentTarget);
      incrementCurrentStep(isFourthStep);

      setFirstStepInFocus(false);
      setSecondStepInFocus(false);
      setThirdStepInFocus(false);
      setFourthStepInFocus(true);
      setFifthStepInFocus(false);
    };

    const onFifthBtnClick = (e: BtnClickEvent) => {
      makeBlur(e.currentTarget);
      incrementCurrentStep(isFifthStep);

      setFirstStepInFocus(false);
      setSecondStepInFocus(false);
      setThirdStepInFocus(false);
      setFourthStepInFocus(false);
      setFifthStepInFocus(true);
    };

    const onBtnMouseEnter = () => {
      setFirstStepInFocus(false);
      setSecondStepInFocus(false);
      setThirdStepInFocus(false);
      setFourthStepInFocus(false);
      setFifthStepInFocus(false);
    };

    return {
      onBtnMouseEnter,
      onFifthBtnClick,
      onFourthBtnClick,
      onThirdBtnClick,
      onSecondBtnClick,
      onFirstBtnClick,
      isFirstStep,
      isSecondStep,
      isThirdStep,
      isFourthStep,
      isFifthStep,
      firstStepInFocus,
      secondStepInFocus,
      thirdStepInFocus,
      fourthStepInFocus,
      fifthStepInFocus,
    };
  };

export default useAboutSectionContentImages;
