import { FC, useState } from 'react';
import {
  Container,
  Content,
  Desc,
  PlayVideoBtn,
  PlayVideoBtnLineIcon,
  PlayVideoBtnTitle,
  StyledReactPlayer,
  VideoWrap,
  VideoBg,
} from './AboutSectionContentVideo.styled';
import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';
import aboutVideo from '@/video/about.mp4';
import videoBgPaper from '@/images/about/video-bg-paper.jpg';

const AboutSectionContentVideo: FC = () => {
  const [play, setPlay] = useState<boolean>(false);

  const onPlayVideoBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    setPlay(true);
  };

  const onVideoEnded = () => {
    setPlay(false);
  };

  return (
    <Container>
      <Content>
        <VideoBg src={videoBgPaper} alt='' />
        <VideoWrap>
          <StyledReactPlayer
            src={aboutVideo}
            playing={play}
            onEnded={onVideoEnded}
            muted
          />
          <Desc>фото: Олександр Клименко</Desc>
        </VideoWrap>
      </Content>
      <PlayVideoBtn type='button' onClick={onPlayVideoBtnClick}>
        <PlayVideoBtnTitle>підкинути левка</PlayVideoBtnTitle>
        <PlayVideoBtnLineIcon />
      </PlayVideoBtn>
    </Container>
  );
};

export default AboutSectionContentVideo;
