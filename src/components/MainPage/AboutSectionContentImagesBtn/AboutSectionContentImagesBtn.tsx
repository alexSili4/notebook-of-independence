import { FC } from 'react';
import { Button } from './AboutSectionContentImagesBtn.styled';
import { IProps } from './AboutSectionContentImagesBtn.types';

const AboutSectionContentImagesBtn: FC<IProps> = ({
  onClick,
  children,
  onMouseEnter,
}) => {
  return (
    <Button type='button' onClick={onClick} onMouseEnter={onMouseEnter}>
      {children}
    </Button>
  );
};

export default AboutSectionContentImagesBtn;
