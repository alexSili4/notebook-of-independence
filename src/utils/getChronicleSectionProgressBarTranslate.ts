import { IGetChronicleSectionMarkerTranslateProps } from '@/types/functions.types';

const getChronicleSectionProgressBarTranslate = ({
  fifthStepInView,
  firstStepInView,
  fourthStepInView,
  secondStepInView,
  thirdStepInView,
}: IGetChronicleSectionMarkerTranslateProps): string => {
  if (fifthStepInView) {
    return '-75%';
  }

  if (fourthStepInView) {
    return '-50%';
  }

  if (thirdStepInView) {
    return '-25%';
  }

  if (secondStepInView) {
    return '0%';
  }

  if (firstStepInView) {
    return '25%';
  }

  return '75%';
};

export default getChronicleSectionProgressBarTranslate;
