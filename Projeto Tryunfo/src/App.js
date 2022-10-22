import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      hasTrunfo: false,
      cardsDeck: [],
    };
  }

  onInputChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    }, () => {
      const { cardName, cardDescription, cardRare,
        cardImage, cardAttr1, cardAttr2, cardAttr3 } = this.state;
      const maxAttribute = 90;
      const maxPoints = 210;
      if (cardName.length === 0 || cardDescription.length === 0
        || cardImage.length === 0 || cardRare.length === 0) {
        return this.setState({ isSaveButtonDisabled: true });
      }
      if (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) > maxPoints) {
        return this.setState({ isSaveButtonDisabled: true });
      }
      if (cardAttr1 > maxAttribute || cardAttr2 > maxAttribute
      || cardAttr3 > maxAttribute) {
        return this.setState({ isSaveButtonDisabled: true });
      }
      if (cardAttr1 < 0 || cardAttr2 < 0 || cardAttr3 < 0) {
        return this.setState({ isSaveButtonDisabled: true });
      }
      return this.setState({ isSaveButtonDisabled: false });
    });
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const { cardTrunfo, cardsDeck } = this.state;
    const stateCard = this.state;
    cardsDeck.push(stateCard);
    this.setState(({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    }), () => { this.checkedTrunfo(cardTrunfo); });
  }

  checkedTrunfo = (cardTrunfo) => {
    if (cardTrunfo === true) { return this.setState({ hasTrunfo: true }); }
    return this.setState({ hasTrunfo: false });
  };

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
      isSaveButtonDisabled,
      hasTrunfo,
      cardsDeck,
    } = this.state;

    return (
      <div className="div-header">
        <h1>Tryunfo</h1>
        <section className="div-card">
          <Form
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
          />
          <Card
            onInputChange={ this.onInputChange }
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </section>
        <section className="deck">
          {cardsDeck.map((card, index) => (
            <Card
              key={ index }
              cardName={ card.cardName }
              cardDescription={ card.cardDescription }
              cardAttr1={ card.cardAttr1 }
              cardAttr2={ card.cardAttr2 }
              cardAttr3={ card.cardAttr3 }
              cardImage={ card.cardImage }
              cardRare={ card.cardRare }
              cardTrunfo={ card.cardTrunfo }
            />
          ))}
        </section>

      </div>

    );
  }
}

export default App;
