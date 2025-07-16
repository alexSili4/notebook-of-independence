import { FC } from 'react';
import arrowPrev from '@/images/newHistory/arrow-prev.png';
import arrowNext from '@/images/newHistory/arrow-next.png';
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
        <Image src={arrowPrev} alt='' />
      </Button>
      <Button type='button' onClick={onNextPageBtnClick}>
        <Image src={arrowNext} alt='' />
      </Button>
    </Container>
  );
};

export default NewHistorySectionNotebookControls;
