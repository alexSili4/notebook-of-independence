import styled from '@emotion/styled';
import {
  IStyledContainerProps,
  IStyledDateProps,
  IStyledDateWrapProps,
  IStyledMarkerWrapProps,
  IStyledContentProps,
} from './ChronicleSectionProgressBar.types';
import {
  getChronicleSectionMarkerTranslateDesk,
  getChronicleSectionMarkerTranslateMob,
  getChronicleSectionProgressBarTranslate,
} from '@/utils';

export const Container = styled.div<IStyledContainerProps>`
  flex-shrink: 0;
  position: relative;
  height: 74px;
  border-top: 1px solid;
  border-color: ${({ contentInView }) =>
    contentInView ? '#D9D9D9' : 'rgba(255, 255, 255, 0.24)'};
  transition: border-color
    ${({ theme }) => theme.transitionDurationAndFunc.chronicle};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    height: 78px;
  }
`;

export const Content = styled.div<IStyledContentProps>`
  height: 100%;
  transition: translate
    ${({ theme }) => theme.transitionDurationAndFunc.chronicle};

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.desk - 1}px) {
    width: 200%;
    translate: ${({
        fifthStepInView,
        fourthStepInView,
        thirdStepInView,
        secondStepInView,
        firstStepInView,
      }) =>
        getChronicleSectionProgressBarTranslate({
          fifthStepInView,
          fourthStepInView,
          thirdStepInView,
          secondStepInView,
          firstStepInView,
        })}
      0;
  }
`;

export const Date = styled.p<IStyledDateProps>`
  color: ${({ contentInView, theme: { colors } }) =>
    contentInView ? '#6983D0' : colors.white};
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
  transition: color ${({ theme }) => theme.transitionDurationAndFunc.chronicle};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    font-size: 18px;
  }
`;

export const Progress = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

export const MarkerWrap = styled.div<IStyledMarkerWrapProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transition: translate
    ${({ theme }) => theme.transitionDurationAndFunc.chronicle};
  translate: ${({
      fifthStepInView,
      fourthStepInView,
      thirdStepInView,
      secondStepInView,
      firstStepInView,
    }) =>
      getChronicleSectionMarkerTranslateMob({
        fifthStepInView,
        fourthStepInView,
        thirdStepInView,
        secondStepInView,
        firstStepInView,
      })}
    0;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    translate: ${({
        fifthStepInView,
        fourthStepInView,
        thirdStepInView,
        secondStepInView,
        firstStepInView,
      }) =>
        getChronicleSectionMarkerTranslateDesk({
          fifthStepInView,
          fourthStepInView,
          thirdStepInView,
          secondStepInView,
          firstStepInView,
        })}
      0;
  }
`;

export const Marker = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 14px;
  height: 14px;
  background-color: #f1cc7d;
  border-radius: 50%;
  translate: -50% -50%;
`;

export const DateWrap = styled.div`
  position: absolute;
  top: 50%;
  translate: -50% -50%;
`;

export const DateWrapFirst = styled(DateWrap)<IStyledDateWrapProps>`
  left: 0;
  transition: translate
    ${({ theme }) => theme.transitionDurationAndFunc.chronicle};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    left: 10%;
  }

  /* @media screen and (max-width: ${({ theme }) =>
    theme.breakpoints.desk - 1}px) {
    translate: ${({ contentInView }) => (contentInView ? '-50%' : 0)} -50%;
  } */
`;

export const DateWrapSecond = styled(DateWrap)`
  left: 25%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    left: 30%;
  }
`;

export const DateWrapThird = styled(DateWrap)`
  left: 50%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    left: 50%;
  }
`;

export const DateWrapFourth = styled(DateWrap)`
  left: 75%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    left: 70%;
  }
`;

export const DateWrapFifth = styled(DateWrap)`
  left: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    left: 90%;
  }
`;
