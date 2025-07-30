import styled from '@emotion/styled';
import sectionBg from '@/images/buyNotebook/section-bg.png';

export const Section = styled.section`
  width: 100%;
  height: 100%;
`;

export const Background = styled.div`
  height: 100%;
  background-color: #3a3a3a;
  background-image: url(${sectionBg});
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding-top: ${({ theme }) => theme.spacing(22)}px;
  padding-bottom: ${({ theme }) => theme.spacing(30)}px;
  padding-left: ${({ theme }) => theme.spacing(25)}px;
  padding-right: ${({ theme }) => theme.spacing(33)}px;
`;

export const Notebook = styled.img`
  height: 100%;
`;
