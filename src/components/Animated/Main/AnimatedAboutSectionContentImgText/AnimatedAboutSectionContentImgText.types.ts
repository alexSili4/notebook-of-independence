import { VariantLabels, Variants } from 'framer-motion';
import { ReactNode } from 'react';

export interface IProps {
  children: ReactNode;
  animate: VariantLabels;
  containerVariants: Variants;
  elementVariants: Variants;
}
