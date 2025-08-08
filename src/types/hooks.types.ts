import { Func, OnBtnClickFunc } from './functions.types';
import { NumberOrNull, RefDivObject } from './types';

export interface IUseIsFirsRender {
  isFirstRender: boolean;
  updateIsFirsRender: Func;
}

export interface IUseAboutSectionContentImages {
  onFifthBtnClick: OnBtnClickFunc;
  onFourthBtnClick: OnBtnClickFunc;
  onThirdBtnClick: OnBtnClickFunc;
  onSecondBtnClick: OnBtnClickFunc;
  onFirstBtnClick: OnBtnClickFunc;
  onBtnMouseEnter: Func;
  isFirstStep: boolean;
  isSecondStep: boolean;
  isThirdStep: boolean;
  isFourthStep: boolean;
  isFifthStep: boolean;
  firstStepInFocus: boolean;
  secondStepInFocus: boolean;
  thirdStepInFocus: boolean;
  fourthStepInFocus: boolean;
  fifthStepInFocus: boolean;
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
