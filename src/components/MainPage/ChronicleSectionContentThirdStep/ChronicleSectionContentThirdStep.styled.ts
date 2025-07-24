import styled from '@emotion/styled';

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(18)}px;
`;

export const Date = styled.p`
  color: #6983d0;
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 320px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -8px;
  text-transform: uppercase;
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)}px;
  width: 545px;
`;

export const Title = styled.p`
  color: #2f2f2f;
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 18px;
  font-weight: 700;
  line-height: 1.22;
`;

export const Text = styled.p`
  color: #2f2f2f;
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  text-align: center;
`;
