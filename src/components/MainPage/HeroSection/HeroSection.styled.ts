import styled from '@emotion/styled';
import independenceBg from '@/images/hero/independence-bg.jpg';

export const Section = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Background = styled.div`
  height: 100%;
  background-image: url(${independenceBg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding-top: 14.6vh;
  padding-bottom: 16.9vh;
`;

export const TextWrap = styled.div`
  position: relative;
  width: 545px;
`;
