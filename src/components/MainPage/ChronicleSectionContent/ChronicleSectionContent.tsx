import { FC } from 'react';
import { Container } from './ChronicleSectionContent.styled';
import ChronicleSectionContentPreview from '@/components/MainPage/ChronicleSectionContentPreview';
import { IProps } from './ChronicleSectionContent.types';
// import ChronicleSectionContentFirstStep from '@/components/MainPage/ChronicleSectionContentFirstStep';
// import ChronicleSectionContentSecondStep from '@/components/MainPage/ChronicleSectionContentSecondStep';
// import ChronicleSectionContentThirdStep from '@/components/MainPage/ChronicleSectionContentThirdStep';
// import ChronicleSectionContentFourthStep from '@/components/MainPage/ChronicleSectionContentFourthStep';
// import ChronicleSectionContentFifthStep from '@/components/MainPage/ChronicleSectionContentFifthStep';

const ChronicleSectionContent: FC<IProps> = ({
  animationDuration,
  sectionInView,
}) => {
  return (
    <Container>
      <ChronicleSectionContentPreview
        animationDuration={animationDuration}
        inView={sectionInView}
      />
      {/* <ChronicleSectionContentFirstStep /> */}
      {/* <ChronicleSectionContentSecondStep /> */}
      {/* <ChronicleSectionContentThirdStep /> */}
      {/* <ChronicleSectionContentFourthStep /> */}
      {/* <ChronicleSectionContentFifthStep /> */}
    </Container>
  );
};

export default ChronicleSectionContent;
