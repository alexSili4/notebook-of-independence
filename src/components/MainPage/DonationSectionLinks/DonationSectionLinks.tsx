import { ExternalLinks } from '@/constants';
import { FC } from 'react';
import {
  Container,
  CryptoLink,
  List,
  ListItem,
  MonoLink,
  Title,
} from './DonationSectionLinks.styled';

const DonationSectionLinks: FC = () => {
  return (
    <Container>
      <Title>задонатити на Азов.Супровід</Title>
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
      </List>
    </Container>
  );
};

export default DonationSectionLinks;
