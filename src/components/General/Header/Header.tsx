import { FC } from 'react';
import {
  Container,
  StyledHeader,
  List,
  ListItem,
  LogoIcon,
  SilpoIcon,
} from './Header.styled';

const Header: FC = () => {
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
          <ListItem>
            <SilpoIcon isFake />
          </ListItem>
        </List>
        {/* <MenuBtn type='button' onClick={onMenuBtnClick}>
          <FaGripLines size={19} />
        </MenuBtn> */}
      </Container>
    </StyledHeader>
  );
};

export default Header;
