import styled from '@emotion/styled';
import sectionBg from '@/images/about/section-content-bg.jpg';

export const Container = styled.div`
  position: relative;
  height: 100%;
`;

export const Background = styled.div`
  position: relative;
  height: 100%;
  background-image: url(${sectionBg});
  background-position: 0 0;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Content = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
`;

export const DecorativeShape = styled.div`
  position: absolute;
  top: 0;
  left: -1vw;
  width: 50.5vw;
  height: 100%;
  background-color: #f1cc7d;
  rotate: 2.07deg;
`;
