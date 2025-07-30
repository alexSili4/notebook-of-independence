import Viber from '@/icons/notebook/viber.svg?react';
import Facebook from '@/icons/notebook/facebook.svg?react';
import Telegram from '@/icons/notebook/telegram.svg?react';
import Instagram from '@/icons/notebook/instagram.svg?react';
import Discord from '@/icons/notebook/discord.svg?react';
import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(6)}px;
`;

export const ListItem = styled.li``;

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: #2f2f2f;
`;

export const ViberIcon = styled(Viber)`
  width: 29px;
`;

export const DiscordIcon = styled(Discord)`
  width: 34px;
`;

export const FacebookIcon = styled(Facebook)`
  width: 17px;
`;

export const InstagramIcon = styled(Instagram)`
  width: 28px;
`;

export const TelegramIcon = styled(Telegram)`
  width: 27px;
`;
