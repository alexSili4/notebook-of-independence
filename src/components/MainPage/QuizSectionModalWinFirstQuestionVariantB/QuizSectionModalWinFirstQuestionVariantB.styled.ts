import styled from '@emotion/styled';

export const Container = styled.div`
  position: absolute;
  rotate: 4.68deg;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    bottom: 25px;
    left: 274px;
    rotate: -11.11deg;
    transition: translate ${({ theme }) => theme.transitionDurationAndFunc.all};

    &:has(input:is(:hover, :focus)) {
      translate: 0 -30px;
    }
  }

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.desk - 1}px) {
    top: 0;
    right: 0;
    width: 50%;
    height: 50%;
  }
`;
