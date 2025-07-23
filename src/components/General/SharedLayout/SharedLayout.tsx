import { FC, Suspense, useState } from 'react';
import { Main } from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';
import Loader from '@GeneralComponents/Loader';
import AnimatedHeader from '@AnimatedGeneralComponents/AnimatedHeader';
import { IOutletContext } from '@/types/types';

const SharedLayout: FC = () => {
  const [showFullScreenHeroVideo, setShowFullScreenHeroVideo] =
    useState<boolean>(false);

  const updateShowFullScreenHeroVideo = (data: boolean) => {
    setShowFullScreenHeroVideo(data);
  };

  const outletContext: IOutletContext = {
    updateShowFullScreenHeroVideo,
  };

  return (
    <>
      <AnimatedHeader
        animationDuration={2.5}
        animationDelay={1}
        showFullScreenHeroVideo={showFullScreenHeroVideo}
      />
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet context={outletContext} />
        </Suspense>
      </Main>
    </>
  );
};

export default SharedLayout;
