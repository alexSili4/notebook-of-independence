import { FC } from 'react';
import {
  Container,
  ShareBtnsWrap,
  Title,
  Photo,
  Star,
  Light,
  // Button,
  // FacebookIcon,
  // InstagramIcon,
  // LinkedinIcon,
  // List,
  // ListItem,
  // TelegramIcon,
} from './QuizSectionModalWinResultShare.styled';
import photo from '@/images/quiz/questions/photo-min.png';
import star from '@/images/quiz/questions/star-min.png';
import light from '@/images/quiz/questions/light-min.png';
import QuizSectionModalWinResultShareBtn from '@MainPageComponents/QuizSectionModalWinResultShareBtn';

const QuizSectionModalWinResultShare: FC = () => {
  return (
    <Container>
      <Photo
        src={photo}
        alt='Зошит Незалежності – проєкт «Сільпо» спільно з родиною Левка Лук’яненка – Фото 72'
      />
      <Star
        src={star}
        alt='Зошит Незалежності – проєкт «Сільпо» спільно з родиною Левка Лук’яненка – Фото 73'
      />
      <Light
        src={light}
        alt='Зошит Незалежності – проєкт «Сільпо» спільно з родиною Левка Лук’яненка – Фото 74'
      />
      <ShareBtnsWrap>
        <Title>Поділитись результатом</Title>
        {/* <List>
          <ListItem>
            <Button type='button'>
              <LinkedinIcon />
            </Button>
          </ListItem>
          <ListItem>
            <Button type='button'>
              <InstagramIcon />
            </Button>
          </ListItem>
          <ListItem>
            <Button type='button'>
              <TelegramIcon />
            </Button>
          </ListItem>
          <ListItem>
            <Button type='button'>
              <FacebookIcon />
            </Button>
          </ListItem>
        </List> */}
        <QuizSectionModalWinResultShareBtn />
      </ShareBtnsWrap>
    </Container>
  );
};

export default QuizSectionModalWinResultShare;
