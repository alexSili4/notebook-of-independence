import { FC } from 'react';
import {
  Section,
  Background,
  Container,
  Notebook,
} from './BuyNotebookSection.styled';
import notebook from '@/images/buyNotebook/notebook.jpg';
import BuyNotebookSectionInfo from '@MainPageComponents/BuyNotebookSectionInfo';

const BuyNotebookSection: FC = () => {
  return (
    <Section>
      <Background>
        <Container>
          <Notebook src={notebook} alt='' />
          <BuyNotebookSectionInfo />
        </Container>
      </Background>
    </Section>
  );
};

export default BuyNotebookSection;
