import { FC } from 'react';
import { Container, Content } from './ChronicleSectionContentPreview.styled';
import AnimatedChronicleSectionContentPreviewLines from '@AnimatedMainPageComponents/AnimatedChronicleSectionContentPreviewLines';
import AnimatedChronicleSectionContentPreviewText from '@AnimatedMainPageComponents/AnimatedChronicleSectionContentPreviewText';
import { IProps } from './ChronicleSectionContentPreview.types';

const ChronicleSectionContentPreview: FC<IProps> = ({
  animationDuration,
  inView,
}) => {
  return (
    <Container>
      <Content>
        <AnimatedChronicleSectionContentPreviewText
          animationDuration={animationDuration}
          inView={inView}
        />
        <AnimatedChronicleSectionContentPreviewLines />
      </Content>
    </Container>
  );
};

export default ChronicleSectionContentPreview;
