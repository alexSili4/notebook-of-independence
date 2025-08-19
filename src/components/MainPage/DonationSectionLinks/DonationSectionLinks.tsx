import { ExternalLinks } from '@/constants';
import { FC } from 'react';
import {
  Container,
  CryptoLink,
  List,
  ListItem,
  MonoLink,
  Title,
  GoBackBtn,
} from './DonationSectionLinks.styled';
import { IProps } from './DonationSectionLinks.types';

const DonationSectionLinks: FC<IProps> = ({ onGoBackBtnClick }) => {
  return (
    <Container>
      <Title>задонатити на "ГО «Азов.Супровід»"</Title>
      <List>
        <ListItem>
          <MonoLink
            href={ExternalLinks.mono}
            target='_blank'
            rel='noopener noreferrer'
          >
            monobank
          </MonoLink>
        </ListItem>
        <ListItem>
          <CryptoLink
            href={ExternalLinks.crypto}
            target='_blank'
            rel='noopener noreferrer'
          >
            КРИПТОБАНКА
          </CryptoLink>
        </ListItem>
        <ListItem>
          <GoBackBtn type='button' onClick={onGoBackBtnClick}>
            повернутися нагору
          </GoBackBtn>
        </ListItem>
      </List>
    </Container>
  );
};

export default DonationSectionLinks;
