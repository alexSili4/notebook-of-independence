import { Func, OnBtnClickFunc } from '@/types/functions.types';
import { ReactNode } from 'react';

export interface IProps {
  onClick: OnBtnClickFunc;
  children: ReactNode;
  onMouseEnter: Func;
}
