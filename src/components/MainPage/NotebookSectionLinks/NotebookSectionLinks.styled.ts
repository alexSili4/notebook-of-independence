import Viber from '@/icons/notebook/viber.svg?react';
import Facebook from '@/icons/notebook/facebook.svg?react';
import Telegram from '@/icons/notebook/telegram.svg?react';
import Instagram from '@/icons/notebook/instagram.svg?react';
import Discord from '@/icons/notebook/discord.svg?react';
import styled from '@emotion/styled';
import { FaXTwitter } from 'react-icons/fa6';

export const List = styled.ul`
  display: flex;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    gap: ${({ theme }) => theme.spacing(6)}px;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.desk - 1}px) {
    justify-content: space-between;
  }
`;

export const ListItem = styled.li``;

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #2f2f2f;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 56px;
    height: 56px;
  }
`;

export const ViberIcon = styled(Viber)`
  width: 25px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 29px;
  }
`;

export const DiscordIcon = styled(Discord)`
  width: 29px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 34px;
  }
`;

export const FacebookIcon = styled(Facebook)`
  width: 15px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 17px;
  }
`;

export const InstagramIcon = styled(Instagram)`
  width: 24px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 28px;
  }
`;

export const TelegramIcon = styled(Telegram)`
  width: 23px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 27px;
  }
`;

export const XIcon = styled(FaXTwitter)`
  width: 23px;
  height: 23px;
  color: ${({ theme }) => theme.colors.white};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 27px;
    height: 27px;
  }
`;
