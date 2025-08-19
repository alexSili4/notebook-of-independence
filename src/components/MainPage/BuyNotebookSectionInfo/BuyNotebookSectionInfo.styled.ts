import styled from '@emotion/styled';
import AccentDesk from '@/icons/buyNotebook/accent-desk.svg?react';
import AccentMob from '@/icons/buyNotebook/accent-mob.svg?react';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 38.9vw;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.desk - 1}px) {
    flex-grow: 1;
    justify-content: space-between;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    gap: ${({ theme }) => theme.spacing(6)}px;
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    gap: ${({ theme }) => theme.spacing(6)}px;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 24px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -2.26px;
  text-transform: uppercase;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    font-size: 44px;
    font-weight: 700;
  }
`;

export const TextWrap = styled.div`
  position: relative;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.desk - 1}px) {
    width: 343px;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
`;

export const AccentIconMob = styled(AccentMob)`
  position: absolute;
  top: 44px;
  left: -1px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    display: none;
  }
`;

export const AccentIconDesk = styled(AccentDesk)`
  position: absolute;
  top: -1px;
  left: 44px;
  width: 162px;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.desk - 1}px) {
    display: none;
  }
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
  gap: ${({ theme }) => theme.spacing(6)}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    gap: ${({ theme }) => theme.spacing(8)}px;
  }
`;

export const BuyInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    gap: ${({ theme }) => theme.spacing(17)}px;
  }
`;

export const BuyLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 46px;
  border-radius: 100px;
  background-color: #6983d0;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    height: 56px;
  }
`;

export const BuyDesc = styled.p`
  color: rgba(0, 0, 0, 0.32);
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 18.92px;
  font-weight: 900;
  line-height: 1;
  letter-spacing: -1.05px;
  text-transform: uppercase;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    display: none;
  }
`;
