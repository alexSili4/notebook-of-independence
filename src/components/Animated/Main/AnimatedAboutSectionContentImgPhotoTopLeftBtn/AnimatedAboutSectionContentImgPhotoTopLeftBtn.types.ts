import { Func, OnBtnClickFunc } from '@/types/functions.types';
import { VariantLabels, Variants } from 'framer-motion';

export interface IProps {
  onClick: OnBtnClickFunc;
  isCurrentStep: boolean;
  animate: VariantLabels;
  containerVariants: Variants;
  elementVariants: Variants;
  onMouseEnter: Func;
}
