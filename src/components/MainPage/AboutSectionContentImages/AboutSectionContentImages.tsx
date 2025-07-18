import { FC } from 'react';
import {
  Container,
  PhotoBottomLeft,
  PhotoBottomLeftText,
  PhotoWrap,
  PhotoTopLeft,
  PhotoTopLeftText,
  PhotoTopRight,
  PhotoTopRightText,
  PhotoBottomCenter,
  PhotoBottomCenterText,
  PhotoBottomRight,
  PhotoBottomRightText,
  PhotoTopLeftMarker,
  PhotoTopLeftBtnWrap,
  Button,
  PhotoBottomLeftBtnWrap,
  PhotoTopRightBtnWrap,
  PhotoBottomRightBtnWrap,
  PhotoBottomCenterBtnWrap,
  PhotoBottomLeftMarker,
  PhotoTopRightMarker,
  PhotoBottomCenterMarker,
  PhotoBottomRightMarker,
  DecorativeBackground,
  DecorativeLines,
  DecorativeStar,
  DecorativePhoto,
} from './AboutSectionContentImages.styled';
import photoTopLeft from '@/images/about/photo-top-left.png';
import photoBottomLeft from '@/images/about/photo-bottom-left.png';
import photoTopRight from '@/images/about/photo-top-right.png';
import photoBottomCenter from '@/images/about/photo-bottom-center.png';
import photoBottomRight from '@/images/about/photo-bottom-right.png';
import { IProps } from './AboutSectionContentImages.types';
import AboutSectionContentImagesMarker from '@MainPageComponents/AboutSectionContentImagesMarker';
import decorativeBackground from '@/images/about/decorative-background.png';
import decorativeLines from '@/images/about/decorative-lines.png';
import decorativeStar from '@/images/about/decorative-star.png';
import decorativePhoto from '@/images/about/decorative-photo.png';

const AboutSectionContentImages: FC<IProps> = ({
  incrementCurrentStep,
  currentStep,
}) => {
  const isFirstStep = currentStep === 1;
  const isSecondStep = currentStep === 2;
  const isThirdStep = currentStep === 3;
  const isFourthStep = currentStep === 4;
  const isFifthStep = currentStep === 5;

  const onFirstBtnMouseEnter = () => {
    incrementCurrentStep(isFirstStep);
  };

  const onSecondBtnMouseEnter = () => {
    incrementCurrentStep(isSecondStep);
  };

  const onThirdBtnMouseEnter = () => {
    incrementCurrentStep(isThirdStep);
  };

  const onFourthBtnMouseEnter = () => {
    incrementCurrentStep(isFourthStep);
  };

  const onFifthBtnMouseEnter = () => {
    incrementCurrentStep(isFifthStep);
  };

  return (
    <Container>
      <PhotoWrap>
        <DecorativeBackground src={decorativeBackground} alt='' />
        <DecorativeLines src={decorativeLines} alt='' />
        <DecorativeStar src={decorativeStar} alt='' />
        <DecorativePhoto src={decorativePhoto} alt='' />
      </PhotoWrap>
      <PhotoWrap>
        <PhotoTopLeftBtnWrap>
          <Button type='button' onMouseEnter={onThirdBtnMouseEnter}>
            <PhotoTopLeft src={photoTopLeft} alt='' />
          </Button>
          <PhotoTopLeftMarker>
            <AboutSectionContentImagesMarker isCurrentStep={isThirdStep} />
          </PhotoTopLeftMarker>
        </PhotoTopLeftBtnWrap>
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
        <PhotoBottomLeftBtnWrap>
          <Button type='button' onMouseEnter={onFourthBtnMouseEnter}>
            <PhotoBottomLeft src={photoBottomLeft} alt='' />
          </Button>
          <PhotoBottomLeftMarker>
            <AboutSectionContentImagesMarker isCurrentStep={isFourthStep} />
          </PhotoBottomLeftMarker>
        </PhotoBottomLeftBtnWrap>
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
        <PhotoTopRightBtnWrap>
          <Button type='button' onMouseEnter={onFifthBtnMouseEnter}>
            <PhotoTopRight src={photoTopRight} alt='' />
          </Button>
          <PhotoTopRightMarker>
            <AboutSectionContentImagesMarker isCurrentStep={isFifthStep} />
          </PhotoTopRightMarker>
        </PhotoTopRightBtnWrap>
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
        <PhotoBottomCenterBtnWrap>
          <Button type='button' onMouseEnter={onFirstBtnMouseEnter}>
            <PhotoBottomCenter src={photoBottomCenter} alt='' />
          </Button>
          <PhotoBottomCenterMarker>
            <AboutSectionContentImagesMarker isCurrentStep={isFirstStep} />
          </PhotoBottomCenterMarker>
        </PhotoBottomCenterBtnWrap>
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
        <PhotoBottomRightBtnWrap>
          <Button type='button' onMouseEnter={onSecondBtnMouseEnter}>
            <PhotoBottomRight src={photoBottomRight} alt='' />
          </Button>
          <PhotoBottomRightMarker>
            <AboutSectionContentImagesMarker isCurrentStep={isSecondStep} />
          </PhotoBottomRightMarker>
        </PhotoBottomRightBtnWrap>
        <PhotoBottomRightText>
          Ще в юності присягнув боротися за незалежну Україну. «Я тоді став і
          поклявся перед небом», — згадував Лук’яненко. кладовищі.
        </PhotoBottomRightText>
      </PhotoWrap>
    </Container>
  );
};

export default AboutSectionContentImages;
