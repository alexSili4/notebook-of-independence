import { SetBooleanFunc } from '@/types/functions.types';

export interface IProps {
  incrementCurrentStep: SetBooleanFunc;
  currentStep: number;
}
