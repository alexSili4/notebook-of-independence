import { IGetChronicleSectionMarkerTranslateProps } from '@/types/functions.types';

const getChronicleSectionMarkerTranslate = ({
  fifthStepInView,
  firstStepInView,
  fourthStepInView,
  secondStepInView,
  thirdStepInView,
}: IGetChronicleSectionMarkerTranslateProps): string => {
  if (fifthStepInView) {
    return '90%';
  }

  if (fourthStepInView) {
    return '70%';
  }

  if (thirdStepInView) {
    return '50%';
  }

  if (secondStepInView) {
    return '30%';
  }

  if (firstStepInView) {
    return '10%';
  }

  return '0%';
};

export default getChronicleSectionMarkerTranslate;
