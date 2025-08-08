import { FC, useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import {
  Container,
  Image,
  NotebookWrap,
} from './NewHistorySectionNotebook.styled';
import page1 from '@/images/newHistory/notebook/page-1.jpg';
import page2 from '@/images/newHistory/notebook/page-2.jpg';
import page3 from '@/images/newHistory/notebook/page-3.jpg';
import page4 from '@/images/newHistory/notebook/page-4.jpg';
import page5 from '@/images/newHistory/notebook/page-5.jpg';
import page6 from '@/images/newHistory/notebook/page-6.jpg';
import page7 from '@/images/newHistory/notebook/page-7.jpg';
import page8 from '@/images/newHistory/notebook/page-8.jpg';
import page9 from '@/images/newHistory/notebook/page-9.jpg';
import page10 from '@/images/newHistory/notebook/page-10.jpg';
import page11 from '@/images/newHistory/notebook/page-11.jpg';
import page12 from '@/images/newHistory/notebook/page-12.jpg';
import page13 from '@/images/newHistory/notebook/page-13.jpg';
import page14 from '@/images/newHistory/notebook/page-14.jpg';
import page15 from '@/images/newHistory/notebook/page-15.jpg';
import page16 from '@/images/newHistory/notebook/page-16.jpg';
import { BtnClickEvent, PageFlipOrNull } from '@/types/types';
import NewHistorySectionNotebookControls from '@MainPageComponents/NewHistorySectionNotebookControls';
import { makeBlur } from '@/utils';
import { IProps } from './NewHistorySectionNotebook.types';

const NewHistorySectionNotebook: FC<IProps> = ({ isDesk }) => {
  const bookRef = useRef<PageFlipOrNull>(null);
  const { innerWidth, innerHeight } = window;

  const onPrevPageBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    bookRef.current?.pageFlip().flipPrev();
  };

  const onNextPageBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    bookRef.current?.pageFlip().flipNext();
  };

  return (
    <Container>
      <NotebookWrap>
        <NewHistorySectionNotebookControls
          onNextPageBtnClick={onNextPageBtnClick}
          onPrevPageBtnClick={onPrevPageBtnClick}
        />
        <HTMLFlipBook
          ref={bookRef}
          style={{}}
          className=''
          width={isDesk ? innerWidth * 0.4 : innerWidth * 0.7}
          minWidth={isDesk ? innerWidth * 0.4 : innerWidth * 0.7}
          maxWidth={isDesk ? innerWidth * 0.4 : innerWidth * 0.7}
          height={isDesk ? innerHeight * 0.85 : innerHeight * 0.47}
          minHeight={isDesk ? innerHeight * 0.85 : innerHeight * 0.47}
          maxHeight={isDesk ? innerHeight * 0.85 : innerHeight * 0.47}
          startPage={0}
          size='stretch'
          flippingTime={800}
          startZIndex={0}
          maxShadowOpacity={1}
          swipeDistance={30}
          showCover
          disableFlipByClick={false}
          showPageCorners
          drawShadow
          usePortrait
          mobileScrollSupport
          autoSize
          useMouseEvents
          clickEventForward
        >
          <Image src={page1} alt='' />
          <Image src={page2} alt='' />
          <Image src={page3} alt='' />
          <Image src={page4} alt='' />
          <Image src={page5} alt='' />
          <Image src={page6} alt='' />
          <Image src={page7} alt='' />
          <Image src={page8} alt='' />
          <Image src={page9} alt='' />
          <Image src={page10} alt='' />
          <Image src={page11} alt='' />
          <Image src={page12} alt='' />
          <Image src={page13} alt='' />
          <Image src={page14} alt='' />
          <Image src={page15} alt='' />
          <Image src={page16} alt='' />
        </HTMLFlipBook>
      </NotebookWrap>
    </Container>
  );
};

export default NewHistorySectionNotebook;
