import styled from '@emotion/styled';
import { RiTelegram2Fill } from 'react-icons/ri';

export const Container = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(6)}px;
  align-items: center;
  background-color: rgba(48, 48, 48, 1);
  border-radius: 16px;
  padding: ${({ theme }) => theme.spacing(4)}px;
`;

export const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)}px;
`;

export const Title = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
  letter-spacing: 0px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(10)}px;
  max-width: 214px;
  padding: ${({ theme }) => theme.spacing()}px;
  border-radius: 100px;
  background-image: linear-gradient(180deg, #2aabee 0%, #229ed9 100%),
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  color: #69c2f0;
`;

export const IconWrap = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  background-image: linear-gradient(
    180deg,
    #ffffff 0%,
    rgba(255, 255, 255, 0) 160.42%
  );
  border-radius: 50%;
`;

export const TelegramIcon = styled(RiTelegram2Fill)`
  width: 19px;
  fill: #69c2f0;
  filter: drop-shadow(0.7px 1.04px 1.39px rgba(255, 255, 255, 0.7));
`;

export const Label = styled.span`
  color: #fbfbfb;
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0;
`;

export const ImgWrap = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 72px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 100px;
  }
`;
