import styled from '@emotion/styled';

export const Container = styled.div``;

export const Content = styled.div`
  position: relative;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 34.8vw;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)}px;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
`;

export const Desc = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 16px;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: 0px;
`;
