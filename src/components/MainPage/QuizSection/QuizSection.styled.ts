import styled from '@emotion/styled';
import sectionBg from '@/images/quiz/section-bg.jpg';

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
  background-image: url(${sectionBg});
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

export const Container = styled.div`
  position: relative;
  height: 100%;
  padding-top: 16.7ssvh;
`;
