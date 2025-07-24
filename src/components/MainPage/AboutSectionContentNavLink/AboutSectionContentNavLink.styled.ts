import styled from '@emotion/styled';
import wayLink from '@/images/about/way-link.png';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: flex;
`;

export const Container = styled.span`
  width: 290px;
  height: 156px;
  background-image: url(${wayLink});
  background-position: 0 0;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding-left: ${({ theme }) => theme.spacing(36)}px;
  padding-top: ${({ theme }) => theme.spacing(21)}px;
`;

export const TextWrap = styled.span`
  position: relative;
`;

export const Text = styled.span`
  color: #f1cc7d;
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  text-align: left;
  text-transform: uppercase;
`;

export const ArrowImg = styled.img`
  position: absolute;
  top: -6px;
  left: 94px;
  width: 30px;
  height: 37px;
  transition: rotate ${({ theme }) => theme.transitionDurationAndFunc.all};
  transform-origin: top right;

  a:is(:hover, :focus) & {
    rotate: -15.24deg;
  }
`;
