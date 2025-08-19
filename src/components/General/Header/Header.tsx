import { FC } from 'react';
import {
  Container,
  StyledHeader,
  Content,
  LogoIcon,
  SilpoIcon,
  XIcon,
} from './Header.styled';

const Header: FC = () => {
  return (
    <StyledHeader>
      <Container>
        <Content>
          <SilpoIcon />
          <XIcon />
          <LogoIcon />
          <XIcon isFake />
          <SilpoIcon isFake />
        </Content>
        {/* <MenuBtn type='button' onClick={onMenuBtnClick}>
          <FaGripLines size={19} />
        </MenuBtn> */}
      </Container>
    </StyledHeader>
  );
};

export default Header;
