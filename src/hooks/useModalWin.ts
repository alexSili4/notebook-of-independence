import { IUseModalWinProps } from '@/types/hooks.types';
import { ElementOrNull } from '@/types/types';
import { useEffect } from 'react';

const useModalWin = ({
  setModalWinState,
  showModalWin,
}: IUseModalWinProps): ElementOrNull => {
  const modalRoot = document.querySelector('#modal-root');

  useEffect(() => {
    const hideModalWin = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        setModalWinState();
      }
    };

    if (showModalWin) {
      window.addEventListener('keydown', hideModalWin);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', hideModalWin);
    };
  }, [setModalWinState, showModalWin]);

  return modalRoot;
};

export default useModalWin;
