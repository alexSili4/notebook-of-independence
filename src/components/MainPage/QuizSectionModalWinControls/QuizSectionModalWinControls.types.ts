import { Func, OnBtnClickFunc } from '@/types/functions.types';

export interface IProps {
  disabledGoBackBtn: boolean;
  onGoBackBtnClick: OnBtnClickFunc;
  onCloseModalWinBtnClick: Func;
}
