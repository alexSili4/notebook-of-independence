import styled from '@emotion/styled';
import {
  IStyledCloseImgProps,
  IStyledCloseModalWinBtnTitleProps,
  IStyledGoBackBtnProps,
} from './QuizSectionModalWinControls.types';

export const Container = styled.div`
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${({ theme: { spacing } }) => `${spacing(2)}px ${spacing(4)}px`};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    padding: ${({ theme: { spacing } }) => `${spacing(4)}px ${spacing(15)}px`};
  }
`;

export const GoBackBtn = styled.button<IStyledGoBackBtnProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background-color: transparent;
  border: none;
  opacity: ${({ showResult }) => (showResult ? 0 : 1)};
  pointer-events: ${({ showResult }) => (showResult ? 'none' : 'all')};
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc.result};
`;

export const GoBackImg = styled.img`
  width: 48px;
  height: 48px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 56px;
    height: 56px;
  }
`;

export const CloseModalWinBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  border: none;
  background-color: transparent;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    gap: ${({ theme }) => theme.spacing()}px;
  }
`;

export const CloseModalWinBtnTitle = styled.span<IStyledCloseModalWinBtnTitleProps>`
  color: ${({ showResult, theme }) =>
    showResult ? theme.colors.white : '#2f2f2f'};
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
  transition: color ${({ theme }) => theme.transitionDurationAndFunc.result};
`;

export const CloseImgWrap = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CloseImg = styled.img<IStyledCloseImgProps>`
  width: 24px;
  height: 24px;
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc.result};
`;

export const CloseDarkImg = styled(CloseImg)`
  opacity: ${({ showResult }) => (showResult ? 0 : 1)};
`;

export const CloseLightImg = styled(CloseImg)`
  position: absolute;
  top: 50%;
  left: 50%;
  opacity: ${({ showResult }) => (showResult ? 1 : 0)};
  translate: -50% -50%;
`;
