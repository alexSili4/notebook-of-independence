import { IGetChronicleSectionMarkerTranslateProps } from '@/types/functions.types';

const getChronicleSectionMarkerTranslateMob = ({
  fifthStepInView,
  firstStepInView,
  fourthStepInView,
  secondStepInView,
  thirdStepInView,
}: IGetChronicleSectionMarkerTranslateProps): string => {
  if (fifthStepInView) {
    return '100%';
  }

  if (fourthStepInView) {
    return '75%';
  }

  if (thirdStepInView) {
    return '50%';
  }

  if (secondStepInView) {
    return '25%';
  }

  if (firstStepInView) {
    return '0%';
  }

  return '-50%';
};

export default getChronicleSectionMarkerTranslateMob;
