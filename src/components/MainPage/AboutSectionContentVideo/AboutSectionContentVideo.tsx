import { FC } from 'react';
import {
  Container,
  Content,
  Desc,
  // PlayVideoBtn,
  // PlayVideoBtnLineIcon,
  // PlayVideoBtnTitle,
  VideoWrap,
  VideoBg,
  PhotoWrap,
  Photo,
  // Levko,
} from './AboutSectionContentVideo.styled';
// import { BtnClickEvent } from '@/types/types';
// import { makeBlur } from '@/utils';
import photo from '@/images/about/photo-min.jpg';
// import levko from '@/images/about/levko-min.png';
import videoBgPaper from '@/images/about/video-bg-paper-min.jpg';

const AboutSectionContentVideo: FC = () => {
  return (
    <Container>
      <Content>
        <VideoBg src={videoBgPaper} alt='' />
        <VideoWrap>
          <PhotoWrap>
            <Photo src={photo} alt='' />
            {/* <Levko src={levko} alt='' play={play} /> */}
          </PhotoWrap>
          <Desc>фото: Олександр Клименко</Desc>
        </VideoWrap>
      </Content>
      {/* <PlayVideoBtn type='button' onClick={onPlayVideoBtnClick}>
        <PlayVideoBtnTitle>підкинути левка</PlayVideoBtnTitle>
        <PlayVideoBtnLineIcon />
      </PlayVideoBtn> */}
    </Container>
  );
};

export default AboutSectionContentVideo;
