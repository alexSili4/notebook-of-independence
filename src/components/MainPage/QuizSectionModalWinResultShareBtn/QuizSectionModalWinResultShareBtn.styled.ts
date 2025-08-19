import styled from '@emotion/styled';
import { IoMdShare } from 'react-icons/io';
import { IButtonStyledProps } from './QuizSectionModalWinResultShareBtn.types';

export const Button = styled.button<IButtonStyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)}px;
  width: 100%;
  height: 46px;
  padding: 0;
  background-color: #2f2f2f;
  border: none;
  border-radius: 100px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    display: ${({ isHidden }) => isHidden && 'none'};
  }
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
`;

export const Icon = styled(IoMdShare)`
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors.white};
`;
