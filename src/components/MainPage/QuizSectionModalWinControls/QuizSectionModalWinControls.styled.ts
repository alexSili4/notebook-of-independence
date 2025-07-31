import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme: { spacing } }) => `${spacing(4)}px ${spacing(15)}px`};
`;

export const GoBackBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background-color: transparent;
  border: none;
`;

export const GoBackImg = styled.img`
  width: 56px;
  height: 56px;
`;

export const CloseModalWinBtn = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing()}px;
  padding: 0;
  border: none;
  background-color: transparent;
`;

export const CloseModalWinBtnTitle = styled.span`
  color: #2f2f2f;
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
`;

export const CloseImg = styled.img`
  width: 24px;
  height: 24px;
`;
