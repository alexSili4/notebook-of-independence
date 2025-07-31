import styled from '@emotion/styled';

export const Container = styled.label`
  display: flex;
  width: 288px;
  height: 300px;
  cursor: pointer;
`;

export const Input = styled.input`
  position: absolute;
  scale: 0;
`;

export const CheckWrap = styled.span`
  position: absolute;
  top: 32px;
  left: 32px;
  display: flex;
  width: 24px;
  height: 24px;
  border: 1.33px solid rgba(255, 255, 255, 0.59);
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.32);
`;

export const CheckImg = styled.img`
  position: absolute;
  bottom: 5px;
  left: 50%;
  width: 21px;
  height: 29px;
  opacity: 0;
  translate: -50% 0;
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc.all};

  label:has(input:is(:checked)) & {
    opacity: 1;
  }
`;
