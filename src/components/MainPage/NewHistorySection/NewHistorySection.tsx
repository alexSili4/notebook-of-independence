import { FC } from 'react';
import { Section, Container } from './NewHistorySection.styled';
import AnimatedNewHistorySectionNotebook from '@AnimatedMainPageComponents/AnimatedNewHistorySectionNotebook';
import { IProps } from './NewHistorySection.types';
import AnimatedNewHistorySectionText from '@AnimatedMainPageComponents/AnimatedNewHistorySectionText';
import AnimatedNewHistorySectionImages from '@AnimatedMainPageComponents/AnimatedNewHistorySectionImages';

const NewHistorySection: FC<IProps> = ({
  animationDuration,
  notebookInView,
  isDesk,
}) => {
  return (
    <Section>
      <Container>
        <AnimatedNewHistorySectionImages
          animationDuration={animationDuration}
          inView={!notebookInView}
          isDesk={isDesk}
        />
        <AnimatedNewHistorySectionText
          animationDuration={animationDuration}
          inView={!notebookInView}
          isDesk={isDesk}
        />
        <AnimatedNewHistorySectionNotebook
          animationDuration={animationDuration}
          inView={notebookInView}
          isDesk={isDesk}
        />
      </Container>
    </Section>
  );
};

export default NewHistorySection;
