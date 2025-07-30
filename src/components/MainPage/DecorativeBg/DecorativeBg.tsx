import { FC } from 'react';
import { GreyBg, WhiteBg } from './DecorativeBg.styled';

const DecorativeBg: FC = () => {
  return (
    <>
      <GreyBg></GreyBg>
      <WhiteBg></WhiteBg>
    </>
  );
};

export default DecorativeBg;
