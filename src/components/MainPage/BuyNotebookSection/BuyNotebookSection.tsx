import { FC } from 'react';
import {
  Section,
  Background,
  Container,
  Notebook,
  Content,
  NotebookDesc,
} from './BuyNotebookSection.styled';
import notebook from '@/images/newHistory/notebook/page-01-min.jpg';
import BuyNotebookSectionInfo from '@MainPageComponents/BuyNotebookSectionInfo';
import { IProps } from './BuyNotebookSection.types';

const BuyNotebookSection: FC<IProps> = ({ isDesk }) => {
  return (
    <Section>
      <Background>
        <Container>
          <Content>
            <Notebook src={notebook} alt='' />
            <NotebookDesc>Весь прибуток НА "ГО «Азов.Супровід»"</NotebookDesc>
          </Content>
          <BuyNotebookSectionInfo isDesk={isDesk} />
        </Container>
      </Background>
    </Section>
  );
};

export default BuyNotebookSection;
