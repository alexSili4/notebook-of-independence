import styled from '@emotion/styled';
import Accent from '@/icons/quiz/questions/accent.svg?react';

export const Button = styled.button`
  flex-shrink: 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 222px;
  height: 46px;
  padding: 0;
  border: none;
  border-radius: 100px;
  background-color: #2f2f2f;
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
`;

export const AccentIcon = styled(Accent)`
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  width: 234px;
  opacity: 0;
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc.all};

  button:is(:hover, :focus) > & {
    opacity: 1;
  }
`;
