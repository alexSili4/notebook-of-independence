export interface IProps {
  animationDelay: number;
  inView: boolean;
  videoInView: boolean;
  animationDuration: number;
  isDesk: boolean;
  nextSectionInView: boolean;
}

export interface IStyledElementProps {
  videoInView: boolean;
  inView: boolean;
  delay: number;
  duration: number;
}

export interface IStyledVideoWrapProps {
  videoInView: boolean;
}

export interface IStyledMutedBtnProps {
  inView: boolean;
}

export interface IStyledVolumeIconProps {
  show: boolean;
}
