declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}

interface ITheme {
  colors: {
    white: string;
  };
  fontFamily: { inter: string; gogol: string };
  padding: {
    container: number;
  };
  containerWidth: {
    desktop: number;
    mobile: number;
  };
  zIndex: {
    header: number;
    heroVideo: number;
  };
  transitionDurationAndFunc: { all: string; chronicle: string };
  spacing: (value?: number) => number;
}

const theme: ITheme = {
  colors: {
    white: '#ffffff',
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
  zIndex: {
    header: 10,
    heroVideo: 100,
  },
  transitionDurationAndFunc: {
    all: '400ms cubic-bezier(0.4, 0, 0.2, 1)',
    chronicle: '4000ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
  spacing: (value = 1) => value * 4,
};

export default theme;
