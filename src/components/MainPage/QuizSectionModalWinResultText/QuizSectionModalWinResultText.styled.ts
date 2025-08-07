import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  height: 74.1vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #fffad2;
  padding-top: 8.2vh;
  padding-bottom: 7.8vh;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 50%;
    height: 100%;
    padding-top: 6.5lvh;
    padding-bottom: 8.5lvh;
  }
`;

export const HashtagWrap = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing(3)}px;
  border-radius: 100px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    padding: ${({ theme: { spacing } }) => `${spacing(3)}px ${spacing(4)}px`};
  }
`;

export const Hashtag = styled.p`
  color: #404040;
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 11.71px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    font-size: 16px;
    font-weight: 700;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export const TextImg = styled.img`
  max-height: 24.4lvh;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    max-height: 26.9lvh;
  }
`;

export const CharacteristicWrap = styled.div`
  flex-shrink: 0;
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  width: 237px;
  min-height: 135px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme: { spacing } }) =>
    `${spacing(10)}px ${spacing(7)}px ${spacing(9)}px`};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 313px;
    min-height: 174px;
    padding: ${({ theme: { spacing } }) =>
      `${spacing(14)}px ${spacing(9)}px ${spacing(10)}px`};
  }
`;

export const TotalScoreWrap = styled.div`
  position: absolute;
  top: -27px;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-color: #2f2f2f;
  border-radius: 50%;
  translate: -50% 0;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    top: -37px;
    width: 80px;
    height: 80px;
  }
`;

export const TotalScoreText = styled.p`
  display: flex;
  gap: 1px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 21.83px;
  font-weight: 800;
  line-height: 1.32;
  text-align: left;
  text-transform: uppercase;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    gap: 2px;
    font-size: 28.77px;
  }
`;

export const TotalScoreTextPart = styled.span``;

export const CharacteristicText = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fontFamily.gogol};
  font-size: 26px;
  font-weight: 400;
  line-height: 0.75;
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    font-size: 34.26px;
  }
`;

export const TextLine = styled.div`
  position: absolute;
  left: 50%;
  width: 194px;
  height: 1px;
  background-color: #d6d6d6;
  translate: -50% 0;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 255px;
  }
`;

export const TextLineTop = styled(TextLine)`
  top: 55px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    top: 75px;
  }
`;

export const TextLineCenter = styled(TextLine)`
  top: 75px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    top: 100px;
  }
`;

export const TextLineBottom = styled(TextLine)`
  top: 95px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    top: 125px;
  }
`;

export const StarMobImg = styled.img`
  position: absolute;
  top: -38px;
  left: 15px;
  width: 102px;
  height: 79px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    display: none;
  }
`;
