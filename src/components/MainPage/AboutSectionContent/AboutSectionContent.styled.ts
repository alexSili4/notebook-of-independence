import styled from '@emotion/styled';
import sectionBgDesk from '@/images/about/section-content-bg-desk.jpg';
import sectionBgMob from '@/images/about/section-content-bg-mob.jpg';

export const Container = styled.div`
  position: relative;
  height: 100%;
`;

export const Background = styled.div`
  position: relative;
  height: 100%;
  background-image: url(${sectionBgMob});
  background-position: 0 0;
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    background-image: url(${sectionBgDesk});
  }
`;

export const Content = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
`;
