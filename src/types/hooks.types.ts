import { Func } from './functions.types';
import { NumberOrNull, RefDivObject } from './types';

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

export interface IUseAccordionElement {
  isShowElement: boolean;
  elementRef: RefDivObject;
  elementScrollHeight: NumberOrNull;
  toggleIsShowElement: Func;
}
