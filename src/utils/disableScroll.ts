import preventArrowKeys from './preventArrowKeys';
import preventDefault from './preventDefault';

const disableScroll = () => {
  window.addEventListener('wheel', preventDefault, { passive: false });
  window.addEventListener('touchmove', preventDefault, {
    passive: false,
  });
  window.addEventListener('keydown', preventArrowKeys, {
    passive: false,
  });
  document.body.style.overflow = 'hidden';
};

export default disableScroll;
