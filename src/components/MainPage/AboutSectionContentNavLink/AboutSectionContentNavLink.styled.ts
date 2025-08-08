import styled from '@emotion/styled';
import wayLink from '@/images/about/way-link.png';

export const Container = styled.span`
  display: block;
  width: 290px;
  height: 156px;
  background-image: url(${wayLink});
  background-position: 0 0;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding-left: ${({ theme }) => theme.spacing(36)}px;
  padding-top: ${({ theme }) => theme.spacing(21)}px;
`;
