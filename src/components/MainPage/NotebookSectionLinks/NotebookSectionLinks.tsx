import { ExternalLinks } from '@/constants';
import { FC } from 'react';
import {
  List,
  FacebookIcon,
  InstagramIcon,
  Link,
  ListItem,
  TelegramIcon,
  XIcon,
} from './NotebookSectionLinks.styled';

const NotebookSectionLinks: FC = () => {
  return (
    <List>
      <ListItem>
        <Link href={ExternalLinks.x} target='_blank' rel='noopener noreferrer'>
          <XIcon />
        </Link>
      </ListItem>
      <ListItem>
        <Link
          href={ExternalLinks.instagram}
          target='_blank'
          rel='noopener noreferrer'
        >
          <InstagramIcon />
        </Link>
      </ListItem>
      <ListItem>
        <Link
          href={ExternalLinks.telegram}
          target='_blank'
          rel='noopener noreferrer'
        >
          <TelegramIcon />
        </Link>
      </ListItem>
      <ListItem>
        <Link
          href={ExternalLinks.facebook}
          target='_blank'
          rel='noopener noreferrer'
        >
          <FacebookIcon />
        </Link>
      </ListItem>
    </List>
  );
};

export default NotebookSectionLinks;
