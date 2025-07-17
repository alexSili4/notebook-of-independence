import { FC } from 'react';
import {
  Container,
  PhotoBottomLeft,
  PhotoBottomLeftBtn,
  PhotoBottomLeftText,
  PhotoWrap,
  PhotoTopLeft,
  PhotoTopLeftBtn,
  PhotoTopLeftText,
  PhotoTopRightBtn,
  PhotoTopRight,
  PhotoTopRightText,
  PhotoBottomCenterBtn,
  PhotoBottomCenter,
  PhotoBottomCenterText,
  PhotoBottomRightBtn,
  PhotoBottomRight,
  PhotoBottomRightText,
} from './AboutSectionContentImages.styled';
import photoTopLeft from '@/images/about/photo-top-left.png';
import photoBottomLeft from '@/images/about/photo-bottom-left.png';
import photoTopRight from '@/images/about/photo-top-right.png';
import photoBottomCenter from '@/images/about/photo-bottom-center.png';
import photoBottomRight from '@/images/about/photo-bottom-right.png';

const AboutSectionContentImages: FC = () => {
  return (
    <Container>
      <PhotoWrap>
        <PhotoTopLeftBtn type='button'>
          <PhotoTopLeft src={photoTopLeft} alt='' />
        </PhotoTopLeftBtn>
        <PhotoTopLeftText>
          У 1961-му за створення підпільної партії його засудили до розстрілу:
          72 доби провів у камері смертників. Потім вирок замінили на 15 років
          ув’язнення. З
          <br />
          <br />
          Загалом Лук’яненко провів у тюрмах і таборах 27 років, із них 450 днів
          — у карцері.
        </PhotoTopLeftText>
      </PhotoWrap>
      <PhotoWrap>
        <PhotoBottomLeftBtn type='button'>
          <PhotoBottomLeft src={photoBottomLeft} alt='' />
        </PhotoBottomLeftBtn>
        <PhotoBottomLeftText>
          У 1990-му став народним депутатом. У серпні 1991 року саме його рукою
          був написаний текст Акта проголошення незалежності України.
          <br />
          <br />
          24 серпня 1991 року документ ухвалила Верховна Рада. У день, коли
          Україна здобула незалежність, Левко Лук’яненко святкував 63-й
          <br />
          день народження.
        </PhotoBottomLeftText>
      </PhotoWrap>
      <PhotoWrap>
        <PhotoTopRightBtn type='button'>
          <PhotoTopRight src={photoTopRight} alt='' />
        </PhotoTopRightBtn>
        <PhotoTopRightText>
          «Якби моє життя закінчилось прямо зараз, я б знав, що прожив його не
          марно», — сказав він в день ухвалення незалежності.
          <br />
          <br />
          Помер 7 липня 2018 р., не доживши півтора місяці до свого 90-річчя.
          Похований на Байковому
          <br />
          кладовищі.
        </PhotoTopRightText>
      </PhotoWrap>
      <PhotoWrap>
        <PhotoBottomCenterBtn type='button'>
          <PhotoBottomCenter src={photoBottomCenter} alt='' />
        </PhotoBottomCenterBtn>
        <PhotoBottomCenterText>
          Левко Лук’яненко — автор Акта проголошення незалежності України.
          <br />
          <br />
          Народився 24 серпня 1928 року в селі на Чернігівщині. Неповнолітнім
          потрапив до армії, де йому приписали зайвий рік — відтоді в документах
          залишився 1927-й як рік народження
        </PhotoBottomCenterText>
      </PhotoWrap>
      <PhotoWrap>
        <PhotoBottomRightBtn type='button'>
          <PhotoBottomRight src={photoBottomRight} alt='' />
        </PhotoBottomRightBtn>
        <PhotoBottomRightText>
          Ще в юності присягнув боротися за незалежну Україну. «Я тоді став і
          поклявся перед небом», — згадував Лук’яненко. кладовищі.
        </PhotoBottomRightText>
      </PhotoWrap>
    </Container>
  );
};

export default AboutSectionContentImages;
