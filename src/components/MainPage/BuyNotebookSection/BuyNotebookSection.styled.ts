import styled from '@emotion/styled';
import sectionBgDesk from '@/images/buyNotebook/section-bg-desk-min.png';
import sectionBgMob from '@/images/buyNotebook/section-bg-mob-min.png';

export const Section = styled.section`
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    height: 100%;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.desk - 1}px) {
    min-height: 100lvh;
  }
`;

export const Background = styled.div`
  height: 100%;
  background-color: #3a3a3a;
  background-image: url(${sectionBgMob});
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    background-image: url(${sectionBgDesk});
  }

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.desk - 1}px) {
    min-height: 100lvh;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: ${({ theme }) => theme.spacing(4)}px;
  padding-bottom: ${({ theme }) => theme.spacing(8)}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    flex-direction: row;
    justify-content: space-between;
    padding-top: ${({ theme }) => theme.spacing(22)}px;
    padding-bottom: ${({ theme }) => theme.spacing(30)}px;
    padding-left: ${({ theme }) => theme.spacing(25)}px;
    padding-right: ${({ theme }) => theme.spacing(33)}px;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.desk - 1}px) {
    gap: ${({ theme }) => theme.spacing(8)}px;
    min-height: 100lvh;
  }
`;

export const Notebook = styled.img`
  height: 235px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    height: 100%;
  }
`;
