import styled from '@emotion/styled';
import BuyLinkLine from '@/icons/newHistory/buy-link-line.svg?react';

export const Container = styled.div`
  position: absolute;
  /* top: 56.9vh; */
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  padding-top: ${({ theme }) => theme.spacing(5)}px;
  padding-bottom: ${({ theme }) => theme.spacing(6)}px;
`;

export const Image = styled.img`
  width: 43vw;
  height: 92vh;
`;

export const NotebookWrap = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const BuyLink = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 222px;
  height: 46px;
  border-radius: 100px;
  background-color: #2f2f2f;
`;

export const BuyLinkTitle = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
`;

export const BuyLinkLineIcon = styled(BuyLinkLine)`
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  opacity: 0;
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc};

  a:is(:hover, :focus) & {
    opacity: 1;
  }
`;
