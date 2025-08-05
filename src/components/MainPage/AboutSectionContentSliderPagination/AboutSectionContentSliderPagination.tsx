import { FC } from 'react';
import {
  Container,
  Button,
  List,
  ListItem,
} from './AboutSectionContentSliderPagination.styled';
import { useSwiper } from 'swiper/react';

const AboutSectionContentSliderPagination: FC = () => {
  const swiper = useSwiper();

  return (
    <Container>
      <List>
        {swiper.slides.map((_, index) => (
          <ListItem key={index}>
            <Button
              type='button'
              onClick={() => {
                swiper.slideTo(index);
              }}
              isActive={swiper.activeIndex === index}
            ></Button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default AboutSectionContentSliderPagination;
