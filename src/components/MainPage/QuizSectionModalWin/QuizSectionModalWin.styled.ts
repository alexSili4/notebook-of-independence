import styled from '@emotion/styled';
import sectionBgDesk from '@/images/quiz/questions/section-bg-desk.png';
import sectionBgMob from '@/images/quiz/questions/section-bg-mob.png';

export const Container = styled.div`
  height: 100%;
`;

export const Background = styled.div`
  position: relative;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  background-image: url(${sectionBgMob});
  background-position: 0 0;
  background-size: 100% 100%;
  background-repeat: no-repeat;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    background-image: url(${sectionBgDesk});
  }
`;
