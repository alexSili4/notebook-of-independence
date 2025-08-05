import { BtnClickEvent, InputChangeEvent } from './types';

export type Func = () => void;

export type OnBtnClickFunc = (e: BtnClickEvent) => void;

export type OnInputChangeFunc = (e: InputChangeEvent) => void;

export type SetBooleanFunc = (data: boolean) => void;

export interface IGetChronicleSectionMarkerTranslateProps {
  fifthStepInView: boolean;
  fourthStepInView: boolean;
  thirdStepInView: boolean;
  secondStepInView: boolean;
  firstStepInView: boolean;
}

export interface IUpdateAnswersProps {
  index: number;
  isCorrectAnswer: boolean;
}

export type UpdateAnswersFunc = (data: IUpdateAnswersProps) => void;

export interface IGoToNextQuestionProps {
  index: number;
  isCorrectAnswer: boolean;
}

export type GoToNextQuestionFunc = (data: IGoToNextQuestionProps) => void;

export type OnSliderPaginationBtnClickFunc = (data: number) => void;
