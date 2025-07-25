import { FC } from 'react';
import { Container, Content } from './ChronicleSectionContentPreview.styled';
import AnimatedChronicleSectionContentPreviewLines from '@AnimatedMainPageComponents/AnimatedChronicleSectionContentPreviewLines';
import AnimatedChronicleSectionContentPreviewText from '@AnimatedMainPageComponents/AnimatedChronicleSectionContentPreviewText';
import { IProps } from './ChronicleSectionContentPreview.types';

const ChronicleSectionContentPreview: FC<IProps> = ({
  animationDuration,
  inView,
  animationBounce,
}) => {
  return (
    <Container>
      <Content>
        <AnimatedChronicleSectionContentPreviewText
          animationDuration={animationDuration}
          inView={inView}
          animationBounce={animationBounce}
        />
        <AnimatedChronicleSectionContentPreviewLines
          animationDuration={animationDuration / 2}
          inView={inView}
        />
      </Content>
    </Container>
  );
};

export default ChronicleSectionContentPreview;
