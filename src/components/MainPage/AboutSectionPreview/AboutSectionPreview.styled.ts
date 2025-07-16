import styled from '@emotion/styled';
import sectionBg from '@/images/about/section-bg.jpg';

export const Background = styled.div`
  height: 100%;
  background-image: url(${sectionBg});
  background-position: 0 0;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const TitleWrap = styled.div`
  position: relative;
`;

export const Title = styled.h2`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing()}px;
  width: 1027px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 133.13px;
  font-weight: 500;
  line-height: 0.88;
  letter-spacing: -6px;
  text-align: center;
  text-transform: uppercase;
`;

export const TitlePart = styled.span``;

export const PhotoLeftWrap = styled.div`
  position: absolute;
  top: -82px;
  left: -162px;
`;

export const PhotoLeft = styled.img`
  width: 348px;
  height: 327px;
`;

export const StarImg = styled.img`
  position: absolute;
  left: 1px;
  bottom: -88px;
  width: 126px;
  height: 126px;
`;

export const PhotoRightWrap = styled.div`
  position: absolute;
  top: 32px;
  right: -139px;
`;

export const PhotoRight = styled.img`
  width: 360px;
  height: 259px;
`;

export const BookImg = styled.img`
  position: absolute;
  top: -101px;
  left: 221px;
  width: 122px;
  height: 139px;
`;
