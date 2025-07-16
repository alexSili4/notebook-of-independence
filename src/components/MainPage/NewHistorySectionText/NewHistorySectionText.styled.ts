import styled from '@emotion/styled';
import DecorativeAccent from '@/icons/newHistory/decorative-accent.svg?react';

export const TextWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(5)}px;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 32px;
  font-weight: 700;
  line-height: 1.4;
  text-align: center;
  text-transform: uppercase;
`;

export const DescWrap = styled.div`
  align-self: center;
  position: relative;
  width: 776px;
`;

export const Desc = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  text-align: center;
`;

export const DescPart = styled.span`
  display: block;
`;

export const DecorativeAccentIcon = styled(DecorativeAccent)`
  position: absolute;
  top: 83px;
  left: 215px;
  width: 360px;
  height: 30px;
`;
