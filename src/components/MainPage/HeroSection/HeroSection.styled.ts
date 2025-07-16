import styled from '@emotion/styled';
import PersonalSignature from '@/icons/hero/personal-signature.svg?react';
import independenceBg from '@/images/hero/independence-bg.jpg';

export const Section = styled.section``;

export const Background = styled.div`
  height: 100%;
  background-image: url(${independenceBg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding-top: 14.6vh;
  padding-bottom: 16.9vh;
`;

export const Title = styled.h1`
  color: #6983d0;
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 165.9px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -6.1px;
  text-align: left;
  text-transform: uppercase;
`;

export const TextWrap = styled.div`
  position: relative;
  width: 545px;
`;

export const Desc = styled.p`
  color: #2f2f2f;
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  text-align: center;
`;

export const PersonalSignatureIcon = styled(PersonalSignature)`
  position: absolute;
  top: 27px;
  left: 50%;
  transform: translateX(-50%);
`;
