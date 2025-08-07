import { FC } from 'react';
import {
  Section,
  Background,
  Container,
  Notebook,
} from './BuyNotebookSection.styled';
import notebook from '@/images/buyNotebook/notebook.jpg';
import BuyNotebookSectionInfo from '@MainPageComponents/BuyNotebookSectionInfo';
import { IProps } from './BuyNotebookSection.types';

const BuyNotebookSection: FC<IProps> = ({ isDesk }) => {
  return (
    <Section>
      <Background>
        <Container>
          <Notebook src={notebook} alt='' />
          <BuyNotebookSectionInfo isDesk={isDesk} />
        </Container>
      </Background>
    </Section>
  );
};

export default BuyNotebookSection;
