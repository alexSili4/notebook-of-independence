import { ExternalLinks } from '@/constants';
import { FC } from 'react';
import { Link } from './BuyNotebookLink.styled';

const BuyNotebookLink: FC = () => {
  return (
    <Link
      href={ExternalLinks.buyNotebook}
      target='_blank'
      rel='noopener noreferrer'
    >
      Замовити НА SILPO.UA
    </Link>
  );
};

export default BuyNotebookLink;
