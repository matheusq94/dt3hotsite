import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';

import {
  Container,
  ImageAndProduct,
  ImageContainer,
  ProductPresentation,
} from './styles';

import PurchaseButton from '../Buttons/PurchaseButton';
import rhino from '../../assets/rhino-red.png';

function HeroSection({ path }) {
  const [chairImageIsVisible, setChairImageVisibility] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setChairImageVisibility(true);
    }, 300);
  }, []);

  return (
    <Container id={path}>
      <div>
        <ImageAndProduct chairVisibility={chairImageIsVisible}>
          <ImageContainer>
            <img src={rhino} alt="" />
          </ImageContainer>
          <ProductPresentation>
            <span>Elite Series</span>
            <h1>Rhino</h1>
            <p>
              Conforto, durabilidade e design. Com novas tecnologias em sua
              estrutura, a Rhino chega pra revolucionar o mercado de cadeiras
              gamer.
            </p>
            <div>
              <PurchaseButton purchasePageUrl="https://www.dt3sports.com.br/loja/elite-series/cadeira-gamer-dt3sports-rhino/" />
            </div>
          </ProductPresentation>
        </ImageAndProduct>
      </div>
    </Container>
  );
}

HeroSection.defaultProps = {
  path: 'home',
};

HeroSection.propTypes = {
  path: propTypes.string,
};

export default HeroSection;
