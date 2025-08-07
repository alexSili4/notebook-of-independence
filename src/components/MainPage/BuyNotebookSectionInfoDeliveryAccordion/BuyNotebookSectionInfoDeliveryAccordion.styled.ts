import styled from '@emotion/styled';
import Arrow from '@/icons/buyNotebook/arrow.svg?react';
import {
  IStyledArrowIconProps,
  IStyledElementProps,
} from './BuyNotebookSectionInfoDeliveryAccordion.types';

export const Container = styled.div``;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)}px;
  border: none;
  background-color: transparent;
  padding: 0;
`;

export const BtnTitle = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
`;

export const ArrowIcon = styled(Arrow)<IStyledArrowIconProps>`
  width: 20px;
  height: 20px;
  rotate: ${({ isShowElement }) => (isShowElement ? 180 : 0)}deg;
  transition: rotate ${({ theme }) => theme.transitionDurationAndFunc.all};
`;

export const Element = styled.div<IStyledElementProps>`
  max-height: ${({ isShowElement, scrollHeight }) =>
    isShowElement ? scrollHeight : 0}px;
  padding-left: ${({ theme }) => theme.spacing(3)}px;
  padding-right: ${({ theme }) => theme.spacing(3)}px;
  overflow-y: hidden;
  transition: max-height ${({ theme }) => theme.transitionDurationAndFunc.all};
`;

export const Content = styled.div`
  padding-top: ${({ theme }) => theme.spacing(6)}px;
`;
