import { Func, OnBtnClickFunc } from '@/types/functions.types';

export interface IProps {
  showResult: boolean;
  disabledGoBackBtn: boolean;
  onGoBackBtnClick: OnBtnClickFunc;
  onCloseModalWinBtnClick: Func;
}

export interface IStyledGoBackBtnProps {
  showResult: boolean;
}

export interface IStyledCloseModalWinBtnTitleProps {
  showResult: boolean;
}

export interface IStyledCloseImgProps {
  showResult: boolean;
}
