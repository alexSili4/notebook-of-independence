import styled from '@emotion/styled';

export const Photo = styled.img`
  position: absolute;
  z-index: 10;
  top: -40px;
  left: -209px;
  width: 371px;
  height: 276px;
`;

export const PageLight = styled.img`
  position: absolute;
  top: -53px;
  right: -83px;
  width: 295px;
  height: 371px;
`;

export const PageDark = styled.img`
  position: absolute;
  z-index: 10;
  top: -36px;
  right: -265px;
  width: 493px;
  height: 517px;
`;

export const TextWrap = styled.div`
  position: absolute;
  z-index: 10;
  top: 246px;
  left: -173px;
  width: 333px;
`;

export const Text = styled.p`
  color: #404040;
  font-family: ${({ theme }) => theme.fontFamily.gogol};
  font-size: 20px;
  font-weight: 400;
  line-height: 1.1;
  text-align: center;
`;
