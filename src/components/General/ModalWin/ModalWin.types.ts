import { ElementOrNull } from '@/types/types';
import { ReactNode } from 'react';

export interface IProps {
  children: ReactNode;
  modalRoot: ElementOrNull;
}
