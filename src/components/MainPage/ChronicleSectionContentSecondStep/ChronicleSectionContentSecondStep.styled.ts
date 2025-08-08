import styled from '@emotion/styled';

export const TextWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18lvh;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    gap: ${({ theme }) => theme.spacing(18)}px;
  }
`;

export const Date = styled.p`
  color: #e4bb60;
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 130px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -6px;
  text-transform: uppercase;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    font-size: 320px;
    letter-spacing: -7px;
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4lvh;
  width: 343px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 582px;
  }
`;

export const Text = styled.p`
  color: #2f2f2f;
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  text-align: center;
`;
