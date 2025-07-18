import { FC, useEffect, useRef, useState } from 'react';
import {
  Container,
  Content,
  Desc,
  PlayVideoBtn,
  PlayVideoBtnLineIcon,
  PlayVideoBtnTitle,
  VideoWrap,
} from './AboutSectionContentVideo.styled';
import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';
import aboutVideo from '@/video/about.mp4';
import ReactPlayer from 'react-player';

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
        <VideoWrap>
          <ReactPlayer
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
