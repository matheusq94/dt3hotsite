import React from 'react';
import propTypes from 'prop-types';

import SwiperCore, { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import './swiper.css';

import rhinowhite from '../../assets/rhino-white.png';
import rhinored from '../../assets/rhino-red.png';
import rhinoblack from '../../assets/rhino-black.png';
import rhinoblue from '../../assets/rhino-blue.png';

import { Container, SliderContainer } from './styles';

function SliderSection({ path }) {
  SwiperCore.use([Navigation, Autoplay]);
  const chairs = [
    {
      src: rhinored,
      alt: 'Cadeira Rhino Vermelha',
    },
    {
      src: rhinoblue,
      alt: 'Cadeira Rhino Azul',
    },
    {
      src: rhinowhite,
      alt: 'Cadeira Rhino Branca',
    },
    {
      src: rhinoblack,
      alt: 'Cadeira Rhino Preta',
    },
  ];

  return (
    <Container id={path}>
      <Swiper
        slidesPerView={1}
        navigation
        loop
        breakpoints={{
          900: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
          1280: { slidesPerView: 3 },
        }}
      >
        {chairs.map(chair => (
          <SwiperSlide>
            <SliderContainer>
              <div>
                <img src={chair.src} alt={chair.alt} />
              </div>
            </SliderContainer>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

SliderSection.defaultProps = {
  path: 'colors',
};

SliderSection.propTypes = {
  path: propTypes.string,
};

export default SliderSection;
