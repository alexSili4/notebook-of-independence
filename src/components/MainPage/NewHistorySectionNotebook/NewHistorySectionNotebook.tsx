import { FC, useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import {
  BuyLink,
  Container,
  Image,
  NotebookWrap,
  BuyLinkTitle,
  BuyLinkLineIcon,
} from './NewHistorySectionNotebook.styled';
import page1 from '@/images/newHistory/notebook/page-1.jpg';
import page2 from '@/images/newHistory/notebook/page-2.jpg';
import page3 from '@/images/newHistory/notebook/page-3.jpg';
import page4 from '@/images/newHistory/notebook/page-4.jpg';
import page5 from '@/images/newHistory/notebook/page-5.jpg';
import page6 from '@/images/newHistory/notebook/page-6.jpg';
import { BtnClickEvent, PageFlipOrNull } from '@/types/types';
import NewHistorySectionNotebookControls from '@MainPageComponents/NewHistorySectionNotebookControls';
import { makeBlur } from '@/utils';
import { ExternalLinks } from '@/constants';

const NewHistorySectionNotebook: FC = () => {
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
          width={innerWidth * 0.4}
          minWidth={1}
          maxWidth={innerWidth * 0.4}
          height={innerHeight * 0.85}
          minHeight={1}
          maxHeight={innerHeight * 0.85}
          startPage={0}
          size='stretch'
          flippingTime={800}
          startZIndex={0}
          maxShadowOpacity={1}
          swipeDistance={30}
          showCover={false}
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
        </HTMLFlipBook>
      </NotebookWrap>
      <BuyLink
        href={ExternalLinks.buyNotebook}
        target='_blank'
        rel='noopener noreferrer'
      >
        <BuyLinkTitle>Купити</BuyLinkTitle>
        <BuyLinkLineIcon />
      </BuyLink>
    </Container>
  );
};

export default NewHistorySectionNotebook;
