import styled from '@emotion/styled';

export const DeskContainer = styled.div`
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.desk - 1}px) {
    display: none;
  }
`;
