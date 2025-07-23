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
