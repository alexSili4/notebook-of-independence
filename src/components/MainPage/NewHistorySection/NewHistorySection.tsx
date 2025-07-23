import { FC } from 'react';
import { Section, Container } from './NewHistorySection.styled';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import AnimatedNewHistorySectionNotebook from '@AnimatedMainPageComponents/AnimatedNewHistorySectionNotebook';
import { IProps } from './NewHistorySection.types';
import AnimatedNewHistorySectionText from '@AnimatedMainPageComponents/AnimatedNewHistorySectionText';
import AnimatedNewHistorySectionImages from '@AnimatedMainPageComponents/AnimatedNewHistorySectionImages';

const NewHistorySection: FC<IProps> = ({
  animationDuration,
  notebookInView,
}) => {
  return (
    <Section>
      <GeneralContainer>
        <Container>
          <AnimatedNewHistorySectionImages
            animationDuration={animationDuration}
            inView={!notebookInView}
          />
          <AnimatedNewHistorySectionText
            animationDuration={animationDuration}
            inView={!notebookInView}
          />
          <AnimatedNewHistorySectionNotebook
            animationDuration={animationDuration}
            inView={notebookInView}
          />
        </Container>
      </GeneralContainer>
    </Section>
  );
};

export default NewHistorySection;
