import { IUseIsFirsRender } from '@/types/hooks.types';
import { useRef } from 'react';

const useIsFirsRender = (): IUseIsFirsRender => {
  const isFirstRenderRef = useRef<boolean>(true);
  const isFirstRender = isFirstRenderRef.current;

  const updateIsFirsRender = () => {
    isFirstRenderRef.current = false;
  };

  return {
    isFirstRender,
    updateIsFirsRender,
  };
};

export default useIsFirsRender;
