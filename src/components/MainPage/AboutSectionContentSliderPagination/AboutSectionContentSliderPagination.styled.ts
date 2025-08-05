import styled from '@emotion/styled';
import { IStyledButtonProps } from './AboutSectionContentSliderPagination.types';

export const Container = styled.div`
  position: absolute;
  z-index: 100;
  bottom: 0;
  left: 0;
  width: 100%;
  padding-top: ${({ theme }) => theme.spacing(4)}px;
  padding-bottom: ${({ theme }) => theme.spacing(4)}px;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(2)}px;
`;

export const ListItem = styled.li``;

export const Button = styled.button<IStyledButtonProps>`
  display: flex;
  width: 10px;
  height: 10px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background-color: ${({ isActive }) =>
    isActive ? '#F1CC7D' : ' rgba(241, 204, 125, 0.59)'};
  transition: background-color
    ${({ theme }) => theme.transitionDurationAndFunc.aboutSlider};
`;
