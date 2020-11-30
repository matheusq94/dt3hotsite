import React from 'react';
import propTypes from 'prop-types';

import { Container } from './styles';

function PurchaseButton({ purchasePageUrl }) {
  return (
    <Container>
      <a href={purchasePageUrl} rel="noopener noreferrer" target="_blank">
        <button type="button">Comprar agora</button>
      </a>
    </Container>
  );
}

PurchaseButton.defaultProps = {
  purchasePageUrl: '',
};

PurchaseButton.propTypes = {
  purchasePageUrl: propTypes.string,
};

export default PurchaseButton;
