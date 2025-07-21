import styled from '@emotion/styled';

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-left: ${({ theme }) => theme.spacing(7)}px;
  padding-right: ${({ theme }) => theme.spacing(7)}px;
  transform: translateY(-50%);
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 74px;
  height: 79px;
  background-color: transparent;
  padding: 0;
  border: none;
`;

export const Image = styled.img`
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc.all};

  button:is(:hover, :focus) > & {
    opacity: 0.7;
  }
`;
