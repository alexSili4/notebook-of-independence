import styled from '@emotion/styled';
import sectionBg from '@/images/chronicle/section-bg.png';
import { IStyledBackgroundProps } from './ChronicleSection.types';

export const Section = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Background = styled.div<IStyledBackgroundProps>`
  height: 100%;
  background-color: ${({ contentInView, theme }) =>
    contentInView ? theme.colors.white : '#6983d0'};
  background-image: url(${sectionBg});
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  transition: background-color
    ${({ theme }) => theme.transitionDurationAndFunc.chronicle};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
