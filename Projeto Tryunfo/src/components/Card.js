import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div className="contorno">
        <div className="div-newcard">
          <img src={ cardImage } alt={ cardName } data-testid="image-card" />
          <h3 data-testid="name-card">
            { cardName }
          </h3>
          <br />
          <br />
          <span data-testid="description-card">{ cardDescription }</span>
          <br />
          <span data-testid="attr1-card">
            Attr1........
            { cardAttr1 }
          </span>
          <br />
          <span data-testid="attr2-card">
            Attr2........
            { cardAttr2 }
          </span>
          <br />
          <span data-testid="attr3-card">
            Attr3........
            { cardAttr3 }
          </span>
          <br />
          <span data-testid="rare-card">
            Raridade:
            {' '}
            { cardRare }
          </span>
          <br />
          {cardTrunfo === true ? <span data-testid="trunfo-card">Super Trunfo</span> : ''}

        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
