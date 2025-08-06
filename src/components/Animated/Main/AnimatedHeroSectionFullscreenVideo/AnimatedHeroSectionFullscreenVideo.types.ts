export interface IProps {
  animationDelay: number;
  inView: boolean;
  videoInView: boolean;
  animationDuration: number;
  isDesk: boolean;
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
