import { FC } from 'react';
import {
  Button,
  Icon,
  Title,
} from './QuizSectionModalWinResultShareBtn.styled';
import { IProps } from './QuizSectionModalWinResultShareBtn.types';

const QuizSectionModalWinResultShareBtn: FC<IProps> = ({
  isHidden = false,
}) => {
  const onBtnClick = async () => {
    const title = document.title;
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url,
          text: 'Успішно виконано Виклик від Левка! 🇺🇦 Це була чудова можливість перевірити знання з історії Незалежності України. Хочеш дізнатися, як добре ти знаєш нашу історію? Прийми виклик від Левка і пройди тест за посиланням',
        });
      } catch (error) {
        console.log('Відміна або помилка:', error);
      }
    } else {
      alert('Web Share API не підтримується у вашому браузері');
    }
  };

  return (
    <Button type='button' onClick={onBtnClick} isHidden={isHidden}>
      <Title>Поділитись результатом</Title>
      <Icon />
    </Button>
  );
};

export default QuizSectionModalWinResultShareBtn;
