import styled from '@emotion/styled';

export const Title = styled.p`
  width: 100%;
  max-width: 670px;
  color: #2f2f2f;
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 16px;
  font-weight: 600;
  line-height: 1.32;
  text-align: center;
  text-transform: uppercase;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    font-size: 24px;
    font-weight: 700;
  }
`;
