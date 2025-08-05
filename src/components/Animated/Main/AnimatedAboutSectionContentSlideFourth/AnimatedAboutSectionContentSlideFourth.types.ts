import { Func } from '@/types/functions.types';
import { RefDivObject } from '@/types/types';

export interface IProps {
  animationDuration: number;
  containerRef: RefDivObject;
  inView: boolean;
  nextSlideInView: boolean;
  playMarkerAnimation: boolean;
  onNextBtnClick: Func;
}

export interface IStyledMarkerWrapProps {
  isHidden: boolean;
}
