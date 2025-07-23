import { Func } from '@/types/functions.types';
import { VariantLabels, Variants } from 'framer-motion';

export interface IProps {
  onMouseEnter: Func;
  isCurrentStep: boolean;
  animate: VariantLabels;
  containerVariants: Variants;
  elementVariants: Variants;
}
