import { FC } from 'react';
import { AnimatePresence, Transition, Variants } from 'framer-motion';
import QuizSectionModalWin from '@MainPageComponents/QuizSectionModalWin';
import { Container } from './AnimatedQuizSectionModalWin.styled';
import { IProps } from './AnimatedQuizSectionModalWin.types';
import { useModalWin } from '@/hooks';
import ModalWin from '@GeneralComponents/ModalWin';
import { questions } from '@/constants';

const AnimatedQuizSectionModalWin: FC<IProps> = ({
  showModalWin,
  setModalWinState,
}) => {
  const modalRoot = useModalWin({
    setModalWinState,
    showModalWin,
  });

  const transition: Transition = { duration: 2.5, type: 'spring', bounce: 0.4 };

  const variants: Variants = {
    initial: {
      y: '100%',
      transition,
    },
    animate: {
      y: 0,
      transition,
    },
    exit: {
      y: '100%',
      transition: { ...transition, bounce: 0, duration: 2 },
    },
  };

  return (
    <AnimatePresence>
      {showModalWin && (
        <ModalWin modalRoot={modalRoot}>
          <Container
            variants={variants}
            initial='initial'
            animate='animate'
            exit='exit'
          >
            <QuizSectionModalWin
              setModalWinState={setModalWinState}
              questions={questions}
            />
          </Container>
        </ModalWin>
      )}
    </AnimatePresence>
  );
};

export default AnimatedQuizSectionModalWin;
