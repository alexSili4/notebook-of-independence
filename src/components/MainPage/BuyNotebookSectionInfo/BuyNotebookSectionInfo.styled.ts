import styled from '@emotion/styled';
import Accent from '@/icons/buyNotebook/accent.svg?react';
import Delivery from '@/icons/buyNotebook/delivery.svg?react';
import Package from '@/icons/buyNotebook/package.svg?react';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)}px;
  width: 38.9vw;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)}px;
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)}px;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 44px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -2.26px;
  text-transform: uppercase;
`;

export const TextWrap = styled.div`
  position: relative;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
`;

export const AccentIcon = styled(Accent)`
  position: absolute;
  top: -1px;
  left: 44px;
  width: 162px;
`;

export const Price = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 28px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -1px;
  text-transform: uppercase;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)}px;
`;

export const DescWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)}px;
`;

export const Desc = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)}px;
`;

export const DeliveryIcon = styled(Delivery)`
  flex-shrink: 0;
  width: 16px;
`;

export const DescText = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
`;

export const PackageIcon = styled(Package)`
  flex-shrink: 0;
  width: 16px;
`;

export const BuyInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)}px;
`;

export const BuyLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  border-radius: 100px;
  background-color: #6983d0;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
`;

export const BuyDesc = styled.p`
  color: rgba(0, 0, 0, 0.32);
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 31.21px;
  font-weight: 900;
  line-height: 1;
  letter-spacing: -1.9px;
  text-transform: uppercase;
`;
