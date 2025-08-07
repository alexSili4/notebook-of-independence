import { FC } from 'react';
import BuyNotebookSectionInfoDeliveryContent from '@MainPageComponents/BuyNotebookSectionInfoDeliveryContent';
import {
  Container,
  ArrowIcon,
  BtnTitle,
  Button,
  Element,
  Content,
} from './BuyNotebookSectionInfoDeliveryAccordion.styled';
import { useAccordionElement } from '@/hooks';
import { makeBlur } from '@/utils';
import { BtnClickEvent } from '@/types/types';

const BuyNotebookSectionInfoDeliveryAccordion: FC = () => {
  const {
    elementRef,
    elementScrollHeight,
    isShowElement,
    toggleIsShowElement,
  } = useAccordionElement();

  const onQuestionBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    toggleIsShowElement();
  };

  return (
    <Container>
      <Button type='button' onClick={onQuestionBtnClick}>
        <BtnTitle>Умови доставки</BtnTitle>
        <ArrowIcon isShowElement={isShowElement} />
      </Button>
      <Element
        ref={elementRef}
        scrollHeight={elementScrollHeight}
        isShowElement={isShowElement}
      >
        <Content>
          <BuyNotebookSectionInfoDeliveryContent />
        </Content>
      </Element>
    </Container>
  );
};

export default BuyNotebookSectionInfoDeliveryAccordion;
