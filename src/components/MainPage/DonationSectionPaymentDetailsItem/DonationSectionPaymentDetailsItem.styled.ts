import { FaCheck } from 'react-icons/fa6';
import Copy from '@/icons/donation/copy.svg?react';
import styled from '@emotion/styled';
import { IStyledIconProps } from './DonationSectionPaymentDetailsItem.types';

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)}PX;
`;

export const Title = styled.p`
  color: #2f2f2f;
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;
  text-transform: uppercase;
`;

export const Text = styled.p`
  color: #2f2f2f;
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
`;

export const CopyBtn = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background-color: transparent;
`;

export const CopyIcon = styled(Copy)<IStyledIconProps>`
  width: 24px;
  height: 24px;
  opacity: ${({ copySuccess }) => (copySuccess ? 0 : 1)};
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc.all};
`;

export const FaCheckIcon = styled(FaCheck)<IStyledIconProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 24px;
  height: 24px;
  color: rgba(47, 47, 47, 0.6);
  translate: -50% -50%;
  opacity: ${({ copySuccess }) => (copySuccess ? 1 : 0)};
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc.all};
`;
