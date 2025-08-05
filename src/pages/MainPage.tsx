import Main from '@MainPageComponents/Main';
import { FC, useState } from 'react';
import AnimatedHeader from '@AnimatedGeneralComponents/AnimatedHeader';

const MainPage: FC = () => {
  const [showFullScreenHeroVideo, setShowFullScreenHeroVideo] =
    useState<boolean>(false);

  const updateShowFullScreenHeroVideo = (data: boolean) => {
    setShowFullScreenHeroVideo(data);
  };

  return (
    <>
      <AnimatedHeader
        animationDuration={2.5}
        animationDelay={1}
        showFullScreenHeroVideo={showFullScreenHeroVideo}
      />
      <main>
        <Main updateShowFullScreenHeroVideo={updateShowFullScreenHeroVideo} />
      </main>
    </>
  );
};

export default MainPage;
