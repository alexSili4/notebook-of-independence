import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  height: 100%;
  pointer-events: none;
`;

export const TextLeftWrap = styled.div`
  position: absolute;
  top: 43.1vh;
  left: 8.7vw;
  width: 293px;
`;

export const TextLeft = styled.p`
  color: #6983d0;
  font-family: ${({ theme }) => theme.fontFamily.gogol};
  font-size: 28px;
  font-weight: 400;
  line-height: 1.09;
  text-align: left;
`;

export const TextRightWrap = styled.div`
  position: absolute;
  top: 7.6vh;
  left: 58.4vw;
  width: 360px;
`;

export const TextRight = styled.p`
  color: #6983d0;
  font-family: ${({ theme }) => theme.fontFamily.gogol};
  font-size: 28px;
  font-weight: 400;
  line-height: 1.09;
  text-align: left;
`;
