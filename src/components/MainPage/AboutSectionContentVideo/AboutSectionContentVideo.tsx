import { FC, useState } from 'react';
import {
  Container,
  Content,
  Desc,
  PlayVideoBtn,
  PlayVideoBtnLineIcon,
  PlayVideoBtnTitle,
  VideoWrap,
  VideoBg,
  PhotoWrap,
  Photo,
  Levko,
} from './AboutSectionContentVideo.styled';
import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';
import photo from '@/images/about/photo.jpg';
import levko from '@/images/about/levko.png';
import videoBgPaper from '@/images/about/video-bg-paper.jpg';

const AboutSectionContentVideo: FC = () => {
  const [play, setPlay] = useState<boolean>(false);

  const onPlayVideoBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    setPlay(true);
  };

  return (
    <Container>
      <Content>
        <VideoBg src={videoBgPaper} alt='' />
        <VideoWrap>
          <PhotoWrap>
            <Photo src={photo} alt='' />
            <Levko src={levko} alt='' play={play} />
          </PhotoWrap>
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
