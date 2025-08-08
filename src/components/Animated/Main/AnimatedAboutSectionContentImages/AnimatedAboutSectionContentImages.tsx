import { Transition, VariantLabels, Variants } from 'framer-motion';
import { FC } from 'react';
import { IProps } from './AnimatedAboutSectionContentImages.types';
import {
  PhotoWrap,
  PhotoBottomCenterText,
  PhotoBottomLeftText,
  PhotoBottomRightText,
  PhotoTopLeftText,
  PhotoTopRightText,
  Images,
} from './AnimatedAboutSectionContentImages.styled';
import { useAboutSectionContentImages } from '@/hooks';
import AnimatedAboutSectionContentImgPhotoBottomCenterBtn from '@AnimatedMainPageComponents/AnimatedAboutSectionContentImgPhotoBottomCenterBtn';
import AnimatedAboutSectionContentImgDecorativeLines from '@AnimatedMainPageComponents/AnimatedAboutSectionContentImgDecorativeLines';
import AnimatedAboutSectionContentImgDecorativeStar from '@AnimatedMainPageComponents/AnimatedAboutSectionContentImgDecorativeStar';
import AnimatedAboutSectionContentImgDecorativeBg from '@AnimatedMainPageComponents/AnimatedAboutSectionContentImgDecorativeBg';
import AnimatedAboutSectionContentImgPhotoTopLeftBtn from '@AnimatedMainPageComponents/AnimatedAboutSectionContentImgPhotoTopLeftBtn';
import AnimatedAboutSectionContentImgPhotoBottomLeftBtn from '@AnimatedMainPageComponents/AnimatedAboutSectionContentImgPhotoBottomLeftBtn';
import AnimatedAboutSectionContentImgPhotoTopRightBtn from '@AnimatedMainPageComponents/AnimatedAboutSectionContentImgPhotoTopRightBtn';
import AnimatedAboutSectionContentImgPhotoBottomRightBtn from '@AnimatedMainPageComponents/AnimatedAboutSectionContentImgPhotoBottomRightBtn';
import AnimatedAboutSectionContentImgDecorativePhoto from '@AnimatedMainPageComponents/AnimatedAboutSectionContentImgDecorativePhoto';
import AnimatedAboutSectionContentImgText from '@AnimatedMainPageComponents/AnimatedAboutSectionContentImgText';

const AnimatedAboutSectionContentImages: FC<IProps> = ({
  animationDuration,
  inView,
}) => {
  const {
    isFifthStep,
    isFirstStep,
    isFourthStep,
    isSecondStep,
    isThirdStep,
    onFifthBtnClick,
    onFirstBtnClick,
    onFourthBtnClick,
    onSecondBtnClick,
    onThirdBtnClick,
    fifthStepInFocus,
    firstStepInFocus,
    fourthStepInFocus,
    secondStepInFocus,
    thirdStepInFocus,
    onBtnMouseEnter,
  } = useAboutSectionContentImages();

  const animate: VariantLabels = inView ? 'visible' : 'hidden';

  const containerVariants: Variants = {
    hidden: {},
    visible: {},
  };

  const transition: Transition = {
    type: 'spring',
    duration: animationDuration,
    bounce: 0.4,
  };

  const toTopLeftExitVariants: Variants = {
    hidden: {
      x: '-40vw',
      y: '-40lvh',
      transition,
    },
    visible: {
      x: 0,
      y: 0,
      transition,
    },
  };

  const toBottomLeftExitVariants: Variants = {
    hidden: {
      x: '-40vw',
      y: '40lvh',
      transition,
    },
    visible: {
      x: 0,
      y: 0,
      transition,
    },
  };

  const toTopRightExitVariants: Variants = {
    hidden: {
      x: '40vw',
      y: '-40lvh',
      transition,
    },
    visible: {
      x: 0,
      y: 0,
      transition,
    },
  };

  const toOpacityExitVariants: Variants = {
    hidden: {
      opacity: 0,
      transition,
    },
    visible: {
      opacity: 1,
      transition,
    },
  };

  return (
    <Images>
      <PhotoWrap>
        <AnimatedAboutSectionContentImgDecorativeBg
          animate={animate}
          containerVariants={containerVariants}
          elementVariants={toTopLeftExitVariants}
        />
        <AnimatedAboutSectionContentImgDecorativeLines
          animate={animate}
          containerVariants={containerVariants}
          elementVariants={toTopLeftExitVariants}
        />
        <AnimatedAboutSectionContentImgDecorativeStar
          animate={animate}
          containerVariants={containerVariants}
          elementVariants={toTopLeftExitVariants}
        />
        <AnimatedAboutSectionContentImgDecorativePhoto
          animate={animate}
          containerVariants={containerVariants}
          elementVariants={toTopRightExitVariants}
        />
      </PhotoWrap>
      <PhotoWrap>
        <AnimatedAboutSectionContentImgPhotoTopLeftBtn
          onMouseEnter={onBtnMouseEnter}
          isCurrentStep={isThirdStep}
          onClick={onThirdBtnClick}
          animate={animate}
          containerVariants={containerVariants}
          elementVariants={toTopLeftExitVariants}
        />
        <AnimatedAboutSectionContentImgText
          animate={animate}
          containerVariants={containerVariants}
          elementVariants={toOpacityExitVariants}
        >
          <PhotoTopLeftText inFocus={thirdStepInFocus}>
            У 1961-му за створення підпільної партії його засудили до розстрілу:
            72 доби провів у камері смертників. Потім вирок замінили на 15 років
            ув’язнення. З
            <br />
            <br />
            Загалом Лук’яненко провів у тюрмах і таборах 27 років, із них 450
            днів — у карцері.
          </PhotoTopLeftText>
        </AnimatedAboutSectionContentImgText>
      </PhotoWrap>
      <PhotoWrap>
        <AnimatedAboutSectionContentImgPhotoBottomLeftBtn
          onMouseEnter={onBtnMouseEnter}
          isCurrentStep={isFourthStep}
          onClick={onFourthBtnClick}
          animate={animate}
          containerVariants={containerVariants}
          elementVariants={toBottomLeftExitVariants}
          inFocus={fourthStepInFocus}
        />
        <AnimatedAboutSectionContentImgText
          animate={animate}
          containerVariants={containerVariants}
          elementVariants={toOpacityExitVariants}
        >
          <PhotoBottomLeftText inFocus={fourthStepInFocus}>
            У 1990-му став народним депутатом. У серпні 1991 року саме його
            рукою був написаний текст Акта проголошення незалежності України.
            <br />
            <br />
            24 серпня 1991 року документ ухвалила Верховна Рада. У день, коли
            Україна здобула незалежність, Левко Лук’яненко святкував 63-й
            <br />
            день народження.
          </PhotoBottomLeftText>
        </AnimatedAboutSectionContentImgText>
      </PhotoWrap>
      <PhotoWrap>
        <AnimatedAboutSectionContentImgPhotoTopRightBtn
          onMouseEnter={onBtnMouseEnter}
          isCurrentStep={isFifthStep}
          onClick={onFifthBtnClick}
          animate={animate}
          containerVariants={containerVariants}
          elementVariants={toTopRightExitVariants}
        />
        <AnimatedAboutSectionContentImgText
          animate={animate}
          containerVariants={containerVariants}
          elementVariants={toOpacityExitVariants}
        >
          <PhotoTopRightText inFocus={fifthStepInFocus}>
            «Якби моє життя закінчилось прямо зараз, я б знав, що прожив його не
            марно», — сказав він в день ухвалення незалежності.
            <br />
            <br />
            Помер 7 липня 2018 р., не доживши півтора місяці до свого 90-річчя.
            Похований на Байковому
            <br />
            кладовищі.
          </PhotoTopRightText>
        </AnimatedAboutSectionContentImgText>
      </PhotoWrap>
      <PhotoWrap>
        <AnimatedAboutSectionContentImgPhotoBottomCenterBtn
          onMouseEnter={onBtnMouseEnter}
          isCurrentStep={isFirstStep}
          onClick={onFirstBtnClick}
          animate={animate}
          containerVariants={containerVariants}
          elementVariants={toBottomLeftExitVariants}
        />
        <AnimatedAboutSectionContentImgText
          animate={animate}
          containerVariants={containerVariants}
          elementVariants={toOpacityExitVariants}
        >
          <PhotoBottomCenterText inFocus={firstStepInFocus}>
            Левко Лук’яненко — автор Акта проголошення незалежності України.
            <br />
            <br />
            Народився 24 серпня 1928 року в селі на Чернігівщині. Неповнолітнім
            потрапив до армії, де йому приписали зайвий рік — відтоді в
            документах залишився 1927-й як рік народження
          </PhotoBottomCenterText>
        </AnimatedAboutSectionContentImgText>
      </PhotoWrap>
      <PhotoWrap>
        <AnimatedAboutSectionContentImgPhotoBottomRightBtn
          isCurrentStep={isSecondStep}
          onClick={onSecondBtnClick}
          animate={animate}
          containerVariants={containerVariants}
          elementVariants={toOpacityExitVariants}
          onMouseEnter={onBtnMouseEnter}
        />
        <AnimatedAboutSectionContentImgText
          animate={animate}
          containerVariants={containerVariants}
          elementVariants={toOpacityExitVariants}
        >
          <PhotoBottomRightText inFocus={secondStepInFocus}>
            Ще в юності присягнув боротися за незалежну Україну. «Я тоді став і
            поклявся перед небом», — згадував Лук’яненко.
          </PhotoBottomRightText>
        </AnimatedAboutSectionContentImgText>
      </PhotoWrap>
    </Images>
  );
};

export default AnimatedAboutSectionContentImages;
