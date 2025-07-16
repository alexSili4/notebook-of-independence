import { FC } from 'react';
import { Section, Container } from './NewHistorySection.styled';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import NewHistorySectionImages from '@MainPageComponents/NewHistorySectionImages';
import NewHistorySectionText from '@MainPageComponents/NewHistorySectionText';
import NewHistorySectionNotebook from '@MainPageComponents/NewHistorySectionNotebook';

const NewHistorySection: FC = () => {
  return (
    <Section>
      <GeneralContainer>
        <Container>
          <NewHistorySectionImages />
          <NewHistorySectionText />
          <NewHistorySectionNotebook />
        </Container>
      </GeneralContainer>
    </Section>
  );
};

export default NewHistorySection;
