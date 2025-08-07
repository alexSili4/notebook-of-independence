import styled from '@emotion/styled';

export const Container = styled.label`
  display: flex;
  width: 100%;
  height: 100%;
  cursor: pointer;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 288px;
    height: 300px;
  }
`;

export const Input = styled.input`
  position: absolute;
  scale: 0;
`;

export const CheckWrap = styled.span`
  position: absolute;
  top: 19px;
  left: 19px;
  display: flex;
  width: 15px;
  height: 15px;
  border: 1px solid rgba(255, 255, 255, 0.59);
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.32);

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    top: 32px;
    left: 32px;
    width: 24px;
    height: 24px;
  }
`;

export const CheckImg = styled.img`
  position: absolute;
  bottom: 0px;
  left: 50%;
  width: 21px;
  height: 29px;
  opacity: 0;
  translate: -50% 0;
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc.all};

  label:has(input:is(:checked)) & {
    opacity: 1;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    bottom: 5px;
  }
`;
