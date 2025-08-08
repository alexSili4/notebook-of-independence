import styled from '@emotion/styled';

export const Container = styled.div`
  position: absolute;
  rotate: -3.36deg;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    top: 14px;
    right: 292px;
    rotate: 9.5deg;
    transition: translate ${({ theme }) => theme.transitionDurationAndFunc.all};

    &:has(input:is(:hover, :focus)) {
      translate: 0 -30px;
    }
  }

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.desk - 1}px) {
    bottom: 0;
    right: 0;
    width: 50%;
    height: 50%;
  }
`;
