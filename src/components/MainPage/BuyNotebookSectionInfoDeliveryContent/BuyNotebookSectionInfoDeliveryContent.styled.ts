import styled from '@emotion/styled';
import Delivery from '@/icons/buyNotebook/delivery.svg?react';
import Package from '@/icons/buyNotebook/package.svg?react';

export const Container = styled.div`
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
