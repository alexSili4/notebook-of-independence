import styled from '@emotion/styled';

export const Title = styled.p`
  color: #2f2f2f;
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 16px;
  font-weight: 700;
  line-height: 1.19;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
	font-size: 18px;
	line-height: 1.22;
  }
`;