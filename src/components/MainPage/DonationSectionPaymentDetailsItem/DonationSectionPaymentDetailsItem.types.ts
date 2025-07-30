import { OnBtnClickFunc } from '@/types/functions.types';

export interface IProps {
  onCopyBtnClick: OnBtnClickFunc;
  title: string;
  value: string;
  copySuccess: boolean;
}

export interface IStyledIconProps {
  copySuccess: boolean;
}
