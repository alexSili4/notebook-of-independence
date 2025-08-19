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

export const Content = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing(5)}px;
    height: 100%;
  }
`;

export const Notebook = styled.img`
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.desk - 1}px) {
    height: 235px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    height: 100%;
    aspect-ratio: 2126 / 2516;
  }
`;

export const NotebookDesc = styled.p`
  color: rgba(0, 0, 0, 0.32);
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-weight: 900;
  font-size: 28.68px;
  line-height: 1;
  letter-spacing: -1.74px;
  text-transform: uppercase;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.desk - 1}px) {
    display: none;
  }
`;
