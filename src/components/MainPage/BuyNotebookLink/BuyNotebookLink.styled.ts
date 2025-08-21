import styled from '@emotion/styled';

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 46px;
  border-radius: 100px;
  background-color: #6983d0;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
  pointer-events: all;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    height: 56px;
  }
`;
