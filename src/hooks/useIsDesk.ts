import { theme } from '@/constants';
import useMediaQuery from './useMediaQuery';

const useIsDesk = (): boolean => {
  const isDesk = useMediaQuery(theme.breakpoints.desk);

  return isDesk;
};

export default useIsDesk;
