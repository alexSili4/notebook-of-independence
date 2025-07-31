import { Func } from './functions.types';

export interface IUseIsFirsRender {
  isFirstRender: boolean;
  updateIsFirsRender: Func;
}

export interface IUseAboutSectionContentImages {
  onFifthBtnMouseEnter: Func;
  onFourthBtnMouseEnter: Func;
  onThirdBtnMouseEnter: Func;
  onSecondBtnMouseEnter: Func;
  onFirstBtnMouseEnter: Func;
  isFirstStep: boolean;
  isSecondStep: boolean;
  isThirdStep: boolean;
  isFourthStep: boolean;
  isFifthStep: boolean;
}

export interface IUseModalWinProps {
  setModalWinState: Func;
  showModalWin: boolean;
}
