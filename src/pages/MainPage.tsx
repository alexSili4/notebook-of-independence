import { IMainPageOutletContext } from '@/types/types';
import Main from '@MainPageComponents/Main';
import { FC } from 'react';
import { useOutletContext } from 'react-router-dom';

const MainPage: FC = () => {
  const { updateShowFullScreenHeroVideo } =
    useOutletContext<IMainPageOutletContext>();

  return <Main updateShowFullScreenHeroVideo={updateShowFullScreenHeroVideo} />;
};

export default MainPage;
