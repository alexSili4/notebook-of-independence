import { OnInputChangeFunc } from '@/types/functions.types';
import { ReactNode } from 'react';

export interface IProps {
  onChange: OnInputChangeFunc;
  children: ReactNode;
  isChecked: boolean;
  value: string;
}
