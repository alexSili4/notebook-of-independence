import { FC } from 'react';
import {
  Container,
  ShareBtnsWrap,
  Title,
  List,
  ListItem,
  Button,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TelegramIcon,
  Photo,
  Star,
  Light,
} from './QuizSectionModalWinResultShare.styled';
import photo from '@/images/quiz/questions/photo.png';
import star from '@/images/quiz/questions/star.png';
import light from '@/images/quiz/questions/light.png';

const QuizSectionModalWinResultShare: FC = () => {
  return (
    <Container>
      <Photo src={photo} alt='' />
      <Star src={star} alt='' />
      <Light src={light} alt='' />
      <ShareBtnsWrap>
        <Title>Поділитись результатом</Title>
        <List>
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
        </List>
      </ShareBtnsWrap>
    </Container>
  );
};

export default QuizSectionModalWinResultShare;
