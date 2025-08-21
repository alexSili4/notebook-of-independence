import { ExternalLinks } from '@/constants';
import { FC } from 'react';
import {
  Container,
  Copyright,
  GeneralInfo,
  SunLink,
  Text,
  Content,
  LinksList,
  Link,
  PhotosLinks,
  Desk,
} from './DonationSectionPaymentDetailsDevelopers.styled';

const DonationSectionPaymentDetailsDevelopers: FC = () => {
  return (
    <Container>
      <Content>
        <Text>
          Ми дуже цінуємо авторів і намагалися вказати всіх. Якщо ви знаєте
          когось, хто опинився без позначення, повідомте нам — ми з радістю
          виправимо це і відмітимо авторів.
        </Text>
        <LinksList>
          <Link
            href='https://drive.google.com/file/d/1MR6xzAThcefX7jBynderKV06QrxAiXkJ/view?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
          >
            Фото з архіву сімʼї Лук'яненків
          </Link>
          <Link
            href='https://drive.google.com/file/d/1fNOtu_R4mmO43PBjkzChJ_8bDzYqJUG5/view'
            target='_blank'
            rel='noopener noreferrer'
          >
            Фото Олександра Клименка
          </Link>
          <Link
            href='https://youtu.be/iJjqjaWlXCw?si=2a6qCC88dXf2bh91'
            target='_blank'
            rel='noopener noreferrer'
          >
            Відео з YouTube, анонімний користувач
          </Link>
        </LinksList>
        <PhotosLinks>
          <Desk>Фотографії відомих діячів:</Desk>
          <Link
            href='https://uinp.gov.ua/istorychnyy-kalendar/gruden/24/1937-narodyvsya-vyacheslav-chornovil'
            target='_blank'
            rel='noopener noreferrer'
          >
            uinp.gov.ua
          </Link>
          <Link
            href='https://kyivcity.gov.ua/news/'
            target='_blank'
            rel='noopener noreferrer'
          >
            КМДА новини
          </Link>
          <Link
            href='https://www.istpravda.com.ua/short/2023/12/3/163425/'
            target='_blank'
            rel='noopener noreferrer'
          >
            фейсбук Леонтія Сандуляка
          </Link>
        </PhotosLinks>
      </Content>
      <GeneralInfo>
        <Copyright>© Silpo, 2025</Copyright>
        <SunLink
          href={ExternalLinks.sun}
          target='_blank'
          rel='noopener noreferrer'
        >
          Зроблено Сонцем ●
        </SunLink>
      </GeneralInfo>
    </Container>
  );
};

export default DonationSectionPaymentDetailsDevelopers;
