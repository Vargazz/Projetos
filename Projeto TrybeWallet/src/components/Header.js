import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  sumDespesas = () => {
    const { expenses } = this.props;
    const exchange = expenses.map(({ value, currency, exchangeRates }) => (
      value * exchangeRates[currency].ask
    ));
    const soma = exchange.reduce((acc, curr) => curr + acc, 0).toFixed(2);
    return soma;
  };

  render() {
    const { email } = this.props;
    return (
      <div>
        <span data-testid="email-field">{ email }</span>
        <span data-testid="total-field">
          { this.sumDespesas() }
        </span>
        <span data-testid="header-currency-field">BRL</span>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.any,
  expenses: PropTypes.shape({
    map: PropTypes.func,
  }),
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  exchangeRates: state.wallet.exchangeRates,
});

export default connect(mapStateToProps)(Header);
