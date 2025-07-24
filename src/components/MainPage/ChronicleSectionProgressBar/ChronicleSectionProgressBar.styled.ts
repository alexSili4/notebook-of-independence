import styled from '@emotion/styled';
import {
  IStyledContainerProps,
  IStyledDateProps,
  IStyledMarkerWrapProps,
} from './ChronicleSectionProgressBar.types';
import { getChronicleSectionMarkerTranslate } from '@/utils';

export const Container = styled.div<IStyledContainerProps>`
  flex-shrink: 0;
  position: relative;
  height: 78px;
  border-top: 1px solid;
  border-color: ${({ contentInView }) =>
    contentInView ? '#D9D9D9' : 'rgba(255, 255, 255, 0.24)'};
  transition: border-color
    ${({ theme }) => theme.transitionDurationAndFunc.chronicle};
`;

export const Date = styled.p<IStyledDateProps>`
  color: ${({ contentInView, theme: { colors } }) =>
    contentInView ? '#6983D0' : colors.white};
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  transition: color ${({ theme }) => theme.transitionDurationAndFunc.chronicle};
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
      getChronicleSectionMarkerTranslate({
        fifthStepInView,
        fourthStepInView,
        thirdStepInView,
        secondStepInView,
        firstStepInView,
      })}
    0;
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

export const DateWrapFirst = styled(DateWrap)`
  left: 10%;
`;

export const DateWrapSecond = styled(DateWrap)`
  left: 30%;
`;

export const DateWrapThird = styled(DateWrap)`
  left: 50%;
`;

export const DateWrapFourth = styled(DateWrap)`
  left: 70%;
`;

export const DateWrapFifth = styled(DateWrap)`
  left: 90%;
`;
