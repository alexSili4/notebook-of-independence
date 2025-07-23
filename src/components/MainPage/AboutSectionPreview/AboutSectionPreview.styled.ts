import styled from '@emotion/styled';
import sectionBg from '@/images/about/section-preview-bg.jpg';

export const Background = styled.div`
  height: 100%;
  background-image: url(${sectionBg});
  background-position: 0 0;
  background-size: cover;
  background-repeat: no-repeat;
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
  top: 208px;
  left: -162px;
  width: 126px;
  height: 126px;
`;

export const BookImg = styled.img`
  position: absolute;
  top: -70px;
  right: -98px;
  width: 122px;
  height: 139px;
`;
