import { FC } from 'react';
import { Button } from './AboutSectionContentImagesBtn.styled';
import { IProps } from './AboutSectionContentImagesBtn.types';

const AboutSectionContentImagesBtn: FC<IProps> = ({
  onMouseEnter,
  children,
}) => {
  return (
    <Button type='button' onMouseEnter={onMouseEnter}>
      {children}
    </Button>
  );
};

export default AboutSectionContentImagesBtn;
