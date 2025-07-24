import { FC } from 'react';
import {
  Container,
  Content,
} from './ChronicleSectionContentStepContainer.styled';
import { IProps } from './ChronicleSectionContentStepContainer.types';

const ChronicleSectionContentStepContainer: FC<IProps> = ({ children }) => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
};

export default ChronicleSectionContentStepContainer;
