import Main from '@MainPageComponents/Main';
import { FC, useState } from 'react';
import AnimatedHeader from '@AnimatedGeneralComponents/AnimatedHeader';
import { useIsDesk } from '@/hooks';

const MainPage: FC = () => {
  const [showFullScreenHeroVideo, setShowFullScreenHeroVideo] =
    useState<boolean>(false);
  const isDesk = useIsDesk();

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
        <Main
          updateShowFullScreenHeroVideo={updateShowFullScreenHeroVideo}
          isDesk={isDesk}
        />
      </main>
    </>
  );
};

export default MainPage;
