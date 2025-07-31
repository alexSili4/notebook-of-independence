import styled from '@emotion/styled';
import sectionBg from '@/images/quiz/questions/section-bg.png';

export const Container = styled.div`
  height: 100%;
`;

export const Background = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  background-image: url(${sectionBg});
  background-position: 0 0;
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(7)}px;
  height: 100%;
`;
