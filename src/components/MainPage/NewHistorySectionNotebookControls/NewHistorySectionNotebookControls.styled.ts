import styled from '@emotion/styled';

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-left: ${({ theme }) => theme.spacing(4)}px;
  padding-right: ${({ theme }) => theme.spacing(4)}px;
  transform: translateY(-50%);

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    padding-left: ${({ theme }) => theme.spacing(7)}px;
    padding-right: ${({ theme }) => theme.spacing(7)}px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 35px;
  background-color: transparent;
  padding: 0;
  border: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 74px;
    height: 79px;
  }
`;

export const Image = styled.img`
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc.all};

  button:is(:hover, :focus) > & {
    opacity: 0.7;
  }
`;
