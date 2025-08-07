import { IUseAccordionElement } from '@/types/hooks.types';
import { NumberOrNull } from '@/types/types';
import { useEffect, useRef, useState } from 'react';

const useAccordionElement = (): IUseAccordionElement => {
  const [isShowElement, setIsShowElement] = useState<boolean>(false);
  const [elementScrollHeight, setElementScrollHeight] =
    useState<NumberOrNull>(null);
  const elementRef = useRef<HTMLDivElement>(null);

  const updateElementScrollHeight = () => {
    const scrollHeight = elementRef.current?.scrollHeight;

    if (scrollHeight) {
      setElementScrollHeight(scrollHeight);
    }
  };

  const toggleIsShowElement = () => {
    setIsShowElement((prevState) => !prevState);
  };

  useEffect(() => {
    updateElementScrollHeight();
  }, []);

  useEffect(() => {
    window.addEventListener('resize', updateElementScrollHeight);

    return () => {
      window.removeEventListener('resize', updateElementScrollHeight);
    };
  }, []);

  return {
    isShowElement,
    elementRef,
    elementScrollHeight,
    toggleIsShowElement,
  };
};

export default useAccordionElement;
