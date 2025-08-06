import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fffad2;
  padding-top: 6.5lvh;
  padding-bottom: 8.5lvh;
`;

export const HashtagWrap = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme: { spacing } }) => `${spacing(3)}px ${spacing(4)}px`};
  border-radius: 100px;
`;

export const Hashtag = styled.p`
  color: #404040;
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export const TextImg = styled.img`
  max-height: 26.9lvh;
`;

export const CharacteristicWrap = styled.div`
  flex-shrink: 0;
  position: relative;
  width: 313px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme: { spacing } }) =>
    `${spacing(14)}px ${spacing(9)}px ${spacing(10)}px`};
`;

export const TotalScoreWrap = styled.div`
  position: absolute;
  top: -37px;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background-color: #2f2f2f;
  border-radius: 50%;
  translate: -50% 0;
`;

export const TotalScoreText = styled.p`
  display: flex;
  gap: 2px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 28.77px;
  font-weight: 800;
  line-height: 1.32;
  text-align: left;
  text-transform: uppercase;
`;

export const TotalScoreTextPart = styled.span``;

export const CharacteristicText = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fontFamily.gogol};
  font-size: 34.26px;
  font-weight: 400;
  line-height: 0.75;
  text-align: center;
`;

export const TextLine = styled.div`
  position: absolute;
  left: 50%;
  width: 255px;
  height: 1px;
  background-color: #d6d6d6;
  translate: -50% 0;
`;

export const TextLineTop = styled(TextLine)`
  top: 75px;
`;

export const TextLineCenter = styled(TextLine)`
  top: 100px;
`;

export const TextLineBottom = styled(TextLine)`
  top: 125px;
`;
