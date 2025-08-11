import styled from '@emotion/styled';
import sectionBgMob from '@/images/chronicle/section-bg-mob-min.png';
import sectionBgDesk from '@/images/chronicle/section-bg-desk-min.png';
import { IStyledBackgroundProps } from './ChronicleSection.types';

export const Section = styled.section`
  width: 100%;
  height: 100%;
`;

export const Background = styled.div<IStyledBackgroundProps>`
  height: 100%;
  background-color: ${({ contentInView, theme }) =>
    contentInView ? theme.colors.white : '#6983d0'};
  background-image: url(${sectionBgMob});
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  transition: background-color
    ${({ theme }) => theme.transitionDurationAndFunc.chronicle};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    background-image: url(${sectionBgDesk});
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
