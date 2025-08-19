import { FC } from 'react';
import {
  Container,
  Content,
  Desc,
  Text,
  TextWrap,
} from './AzovSectionText.styled';
import AnimatedAzovSectionTextQuote from '@AnimatedMainPageComponents/AnimatedAzovSectionTextQuote';
import { IProps } from './AzovSectionText.types';

const AzovSectionText: FC<IProps> = ({ animationDuration, inView }) => {
  return (
    <Container>
      <Content>
        <AnimatedAzovSectionTextQuote
          animationDuration={animationDuration}
          inView={inView}
        />
        <TextWrap>
          <Text>
            "ГО «Азов.Супровід»" – громадська організація та частина 12-ї
            бригади спеціального призначення «Азов» Національної гвардії
            України. Основна задача ГО – турбота про поранених бійців бригади.
            "ГО «Азов.Супровід»" був створений на вимогу Положення про служби
            супроводу військовослужбовців Міністерства внутрішніх справ України.
            Це перша та найбільш успішна подібна служба в НГУ. Служба супроводу
            «Азову» є частиною медичної служби бригади «Азов» задля забезпечення
            безперервності роботи з пораненим бійцем на всьому шляху лікування
            та реабілітації.
          </Text>
          <Desc>- ГО "Азов.Супровід"</Desc>
        </TextWrap>
      </Content>
    </Container>
  );
};

export default AzovSectionText;
