import { FC } from 'react';
import {
  Container,
  Date,
  DateWrapThird,
  Marker,
  MarkerWrap,
  Progress,
  DateWrapFifth,
  DateWrapFirst,
  DateWrapFourth,
  DateWrapSecond,
} from './ChronicleSectionProgressBar.styled';
import { IProps } from './ChronicleSectionProgressBar.types';

const ChronicleSectionProgressBar: FC<IProps> = ({
  contentInView,
  fifthStepInView,
  firstStepInView,
  fourthStepInView,
  secondStepInView,
  thirdStepInView,
}) => {
  return (
    <Container contentInView={contentInView}>
      <DateWrapFirst>
        <Date contentInView={contentInView}>16.07.1990</Date>
      </DateWrapFirst>
      <DateWrapSecond>
        <Date contentInView={contentInView}>23.08.1991</Date>
      </DateWrapSecond>
      <DateWrapThird>
        <Date contentInView={contentInView}>24.08.1991</Date>
      </DateWrapThird>
      <DateWrapFourth>
        <Date contentInView={contentInView}>01.12.1991</Date>
      </DateWrapFourth>
      <DateWrapFifth>
        <Date contentInView={contentInView}>04.08.1991</Date>
      </DateWrapFifth>
      <Progress>
        <MarkerWrap
          fifthStepInView={fifthStepInView}
          firstStepInView={firstStepInView}
          fourthStepInView={fourthStepInView}
          secondStepInView={secondStepInView}
          thirdStepInView={thirdStepInView}
        >
          <Marker></Marker>
        </MarkerWrap>
      </Progress>
    </Container>
  );
};

export default ChronicleSectionProgressBar;
