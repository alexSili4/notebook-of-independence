import styled from '@emotion/styled';
import sectionBgDesk from '@/images/about/section-preview-bg-desk.jpg';
import sectionBgMob from '@/images/about/section-preview-bg-mob.jpg';

export const Background = styled.div`
  height: 100%;
  background-image: url(${sectionBgMob});
  background-position: 0 0;
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    background-image: url(${sectionBgDesk});
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const TitleWrap = styled.div`
  position: relative;
`;

export const StarImg = styled.img`
  position: absolute;
  top: -176px;
  left: 229px;
  width: 104px;
  height: 80px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    top: 225px;
    left: -154px;
  }
`;

export const BookImg = styled.img`
  position: absolute;
  width: 77px;
  height: 89px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    top: -59px;
    right: -85px;
    width: 98px;
    height: 114px;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.desk - 1}px) {
    bottom: -211px;
    left: 42px;
  }
`;
