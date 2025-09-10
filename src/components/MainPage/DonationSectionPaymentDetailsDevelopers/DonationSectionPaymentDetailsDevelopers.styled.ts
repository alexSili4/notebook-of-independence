import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #303030;
  padding: ${({ theme }) => theme.spacing(4)}px;
  padding-bottom: ${({ theme }) => theme.spacing(24)}px;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.desk - 1}px) {
    gap: ${({ theme }) => theme.spacing(4)}px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    position: absolute;
    z-index: 10;
    left: 0;
    bottom: 0;
    padding-top: ${({ theme }) => theme.spacing(8)}px;
    padding-bottom: ${({ theme }) => theme.spacing(8)}px;
    padding-left: ${({ theme }) => theme.spacing(20)}px;
    padding-right: ${({ theme }) => theme.spacing(20)}px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
  }
`;

export const Text = styled.p`
  color: #959595;
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
  letter-spacing: 0px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 464px;
    font-size: 16px;
  }
`;

export const GeneralInfo = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.desk - 1}px) {
    justify-content: space-between;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    gap: ${({ theme }) => theme.spacing(4)}px;
  }
`;

export const LinksList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)}px;
`;

export const Link = styled.a`
  color: #959595;
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
  letter-spacing: 0px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    font-size: 16px;
  }
`;

export const PhotosLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Desk = styled.p`
  color: #959595;
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
  letter-spacing: 0px;
`;

export const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.4;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    font-family: ${({ theme }) => theme.fontFamily.inter};
    font-size: 14px;
  }
`;

export const SunLink = styled.a`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    font-size: 14px;
  }
`;
