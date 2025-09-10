import { FC } from 'react';
import arrowPrev from '@/images/newHistory/arrow-prev-min.png';
import arrowNext from '@/images/newHistory/arrow-next-min.png';
import {
  Container,
  Button,
  Image,
} from './NewHistorySectionNotebookControls.styled';
import { IProps } from './NewHistorySectionNotebookControls.types';

const NewHistorySectionNotebookControls: FC<IProps> = ({
  onNextPageBtnClick,
  onPrevPageBtnClick,
}) => {
  return (
    <Container>
      <Button type='button' onClick={onPrevPageBtnClick}>
        <Image
          src={arrowPrev}
          alt='Зошит Незалежності – проєкт «Сільпо» спільно з родиною Левка Лук’яненка – Фото 16'
        />
      </Button>
      <Button type='button' onClick={onNextPageBtnClick}>
        <Image
          src={arrowNext}
          alt='Зошит Незалежності – проєкт «Сільпо» спільно з родиною Левка Лук’яненка – Фото 17'
        />
      </Button>
    </Container>
  );
};

export default NewHistorySectionNotebookControls;
