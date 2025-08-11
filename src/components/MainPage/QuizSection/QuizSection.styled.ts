import styled from '@emotion/styled';
import sectionBgDesk from '@/images/quiz/section-bg-desk-min.jpg';
import sectionBgMob from '@/images/quiz/section-bg-mob-min.jpg';

export const Section = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Background = styled.div`
  height: 100%;
  background-color: #6983d0;
  background-image: url(${sectionBgMob});
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    background-image: url(${sectionBgDesk});
  }
`;

export const Container = styled.div`
  position: relative;
  height: 100%;
  padding-top: 21.8vh;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    padding-top: 16.7vh;
  }
`;
