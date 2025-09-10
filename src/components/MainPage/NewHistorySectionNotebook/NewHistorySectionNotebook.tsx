import { FC, useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import {
  Container,
  Image,
  NotebookWrap,
} from './NewHistorySectionNotebook.styled';
import page1 from '@/images/newHistory/notebook/page-01-min.jpg';
import page2 from '@/images/newHistory/notebook/page-02-min.jpg';
import page3 from '@/images/newHistory/notebook/page-03-min.jpg';
import page4 from '@/images/newHistory/notebook/page-04-min.jpg';
import page5 from '@/images/newHistory/notebook/page-05-min.jpg';
import page6 from '@/images/newHistory/notebook/page-06-min.jpg';
import page7 from '@/images/newHistory/notebook/page-07-min.jpg';
import page8 from '@/images/newHistory/notebook/page-08-min.jpg';
import page9 from '@/images/newHistory/notebook/page-09-min.jpg';
import page10 from '@/images/newHistory/notebook/page-10-min.jpg';
import page11 from '@/images/newHistory/notebook/page-11-min.jpg';
import page12 from '@/images/newHistory/notebook/page-12-min.jpg';
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
          showCover={isDesk ? true : false}
          disableFlipByClick={false}
          showPageCorners
          drawShadow
          usePortrait
          mobileScrollSupport
          autoSize
          useMouseEvents
          clickEventForward
        >
          <Image
            src={page1}
            alt='Зошит Незалежності – проєкт «Сільпо» спільно з родиною Левка Лук’яненка – Фото 4'
          />
          <Image
            src={page2}
            alt='Зошит Незалежності – проєкт «Сільпо» спільно з родиною Левка Лук’яненка – Фото 5'
          />
          <Image
            src={page3}
            alt='Зошит Незалежності – проєкт «Сільпо» спільно з родиною Левка Лук’яненка – Фото 6'
          />
          <Image
            src={page4}
            alt='Зошит Незалежності – проєкт «Сільпо» спільно з родиною Левка Лук’яненка – Фото 7'
          />
          <Image
            src={page5}
            alt='Зошит Незалежності – проєкт «Сільпо» спільно з родиною Левка Лук’яненка – Фото 8'
          />
          <Image
            src={page6}
            alt='Зошит Незалежності – проєкт «Сільпо» спільно з родиною Левка Лук’яненка – Фото 9'
          />
          <Image
            src={page7}
            alt='Зошит Незалежності – проєкт «Сільпо» спільно з родиною Левка Лук’яненка – Фото 10'
          />
          <Image
            src={page8}
            alt='Зошит Незалежності – проєкт «Сільпо» спільно з родиною Левка Лук’яненка – Фото 11'
          />
          <Image
            src={page9}
            alt='Зошит Незалежності – проєкт «Сільпо» спільно з родиною Левка Лук’яненка – Фото 12'
          />
          <Image
            src={page10}
            alt='Зошит Незалежності – проєкт «Сільпо» спільно з родиною Левка Лук’яненка – Фото 13'
          />
          <Image
            src={page11}
            alt='Зошит Незалежності – проєкт «Сільпо» спільно з родиною Левка Лук’яненка – Фото 14'
          />
          <Image
            src={page12}
            alt='Зошит Незалежності – проєкт «Сільпо» спільно з родиною Левка Лук’яненка – Фото 15'
          />
        </HTMLFlipBook>
      </NotebookWrap>
    </Container>
  );
};

export default NewHistorySectionNotebook;
