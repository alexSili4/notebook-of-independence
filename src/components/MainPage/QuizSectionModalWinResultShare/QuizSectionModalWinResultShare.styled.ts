import styled from '@emotion/styled';
import resultShareBg from '@/images/quiz/questions/result-share-bg-min.jpg';
import Linkedin from '@/icons/quiz/questions/linkedin.svg?react';
import Facebook from '@/icons/quiz/questions/facebook.svg?react';
import Instagram from '@/icons/quiz/questions/instagram.svg?react';
import Telegram from '@/icons/quiz/questions/telegram.svg?react';

export const Container = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-image: url(${resultShareBg});
  background-position: 0 0;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding-bottom: ${({ theme }) => theme.spacing(24)}px;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.desk - 1}px) {
    display: none;
  }
`;

export const Photo = styled.img`
  position: absolute;
  top: 10.8lvh;
  left: 50%;
  width: 30.6vw;
  height: 43.8lvh;
  translate: -50% 0;
`;

export const Star = styled.img`
  position: absolute;
  top: 39px;
  left: -64px;
  width: 179px;
  height: 146px;
`;

export const Light = styled.img`
  position: absolute;
  top: 28px;
  right: 28px;
  width: 169px;
  height: 162px;
`;

export const ShareBtnsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)}px;
`;

export const Title = styled.p`
  color: #404040;
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(6)}px;
`;

export const ListItem = styled.li``;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  padding: 0;
  background-color: #2f2f2f;
`;

export const LinkedinIcon = styled(Linkedin)`
  width: 18px;
  height: 17px;
`;

export const InstagramIcon = styled(Instagram)`
  width: 24px;
  height: 24px;
`;

export const TelegramIcon = styled(Telegram)`
  width: 23px;
  height: 21px;
`;

export const FacebookIcon = styled(Facebook)`
  width: 15px;
  height: 28px;
`;
