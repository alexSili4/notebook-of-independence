import { FC } from 'react';
import {
  Container,
  StyledHeader,
  List,
  ListItem,
  LogoIcon,
  MenuBtn,
  SilpoIcon,
} from './Header.styled';
import { FaGripLines } from 'react-icons/fa';
import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';

const Header: FC = () => {
  const onMenuBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    console.log('onMenuBtnClick');
  };

  return (
    <StyledHeader>
      <Container>
        <List>
          <ListItem>
            <SilpoIcon />
          </ListItem>
          <ListItem>
            <LogoIcon />
          </ListItem>
        </List>
        <MenuBtn type='button' onClick={onMenuBtnClick}>
          <FaGripLines size={19} />
        </MenuBtn>
      </Container>
    </StyledHeader>
  );
};

export default Header;
