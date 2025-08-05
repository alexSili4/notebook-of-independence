declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}

interface ITheme {
  colors: {
    white: string;
    black: string;
  };
  fontFamily: { inter: string; gogol: string };
  padding: {
    container: number;
  };
  containerWidth: {
    desktop: number;
    mobile: number;
  };
  breakpoints: { desk: number };
  zIndex: {
    header: number;
    heroVideo: number;
  };
  transitionDurationAndFunc: {
    all: string;
    video: string;
    chronicle: string;
    result: string;
    aboutSlider: string;
  };
  spacing: (value?: number) => number;
}

const theme: ITheme = {
  colors: {
    white: '#ffffff',
    black: '#000000',
  },
  fontFamily: {
    inter: 'Inter',
    gogol: 'Gogol',
  },
  // fontWeight: {  },
  // fontSize: {  },
  padding: {
    container: 16,
  },
  // borderRadius: {  },
  containerWidth: {
    desktop: 1376,
    mobile: 375,
  },
  breakpoints: { desk: 1440 },
  zIndex: {
    header: 10,
    heroVideo: 100,
  },
  transitionDurationAndFunc: {
    all: '400ms cubic-bezier(0.4, 0, 0.2, 1)',
    video: '2500ms cubic-bezier(0.4, 0, 0.2, 1)',
    chronicle: '4000ms cubic-bezier(0.4, 0, 0.2, 1)',
    result: '4000ms cubic-bezier(0.4, 0, 0.2, 1)',
    aboutSlider: '1000ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
  spacing: (value = 1) => value * 4,
};

export default theme;
