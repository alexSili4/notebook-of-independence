import { FC } from 'react';
import { Title } from './ChronicleSectionContentStepTitle.styled';
import { IProps } from './ChronicleSectionContentStepTitle.types';

const ChronicleSectionContentStepTitle: FC<IProps> = ({ children }) => {
  return <Title>{children}</Title>;
};

export default ChronicleSectionContentStepTitle;
