import { FC } from 'react';
import {
  Section,
  Background,
  Container,
  TextWrap,
  Text,
  LinksWrap,
  LogoIcon,
} from './NotebookSection.styled';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import NotebookSectionLinks from '@MainPageComponents/NotebookSectionLinks';
import AnimatedNotebookSectionPhoto from '@AnimatedMainPageComponents/AnimatedNotebookSectionPhoto';
import { IProps } from './NotebookSection.types';

const NotebookSection: FC<IProps> = ({
  animationBounce,
  animationDuration,
  inView,
}) => {
  return (
    <Section>
      <GeneralContainer>
        <Background>
          <Container>
            <AnimatedNotebookSectionPhoto
              animationBounce={animationBounce}
              animationDuration={animationDuration}
              inView={inView}
            />
            <TextWrap>
              <Text>
                Левко Лукʼяненко провів 27 років у радянських тюрмах та на
                засланні. Його сила духу та волі вражала.
                <br />
                <br />
                «Зошит незалежності» створений, щоб підтримати тих, хто пройшов
                російський полон. Увесь прибуток буде переказаний ГО
                «Азов.Супровід» на реабілітацію звільнених українських
                військових та їхніх родин.
              </Text>
              <LinksWrap>
                <LogoIcon />
                <NotebookSectionLinks />
              </LinksWrap>
            </TextWrap>
          </Container>
        </Background>
      </GeneralContainer>
    </Section>
  );
};

export default NotebookSection;
