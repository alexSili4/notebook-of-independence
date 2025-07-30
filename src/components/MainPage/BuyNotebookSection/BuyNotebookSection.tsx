import { FC } from 'react';
import {
  Section,
  Background,
  Container,
  Notebook,
} from './BuyNotebookSection.styled';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import notebook from '@/images/buyNotebook/notebook.jpg';
import BuyNotebookSectionInfo from '@MainPageComponents/BuyNotebookSectionInfo';

const BuyNotebookSection: FC = () => {
  return (
    <Section>
      <GeneralContainer>
        <Background>
          <Container>
            <Notebook src={notebook} alt='' />
            <BuyNotebookSectionInfo />
          </Container>
        </Background>
      </GeneralContainer>
    </Section>
  );
};

export default BuyNotebookSection;
