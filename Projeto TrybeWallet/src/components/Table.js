import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteExpense } from '../redux/actions/index';

class Table extends Component {
  handleDeleteButton = ({ target: { id } }) => {
    const { expenses, dispatch } = this.props;
    const deletedExpenses = expenses.filter((expense) => expense.id !== parseInt(id, 10));
    dispatch(deleteExpense(deletedExpenses));
  };

  render() {
    const { expenses } = this.props;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((element) => (
              <tr key={ element.id }>
                <td>{element.description}</td>
                <td>{element.tag}</td>
                <td>{element.method}</td>
                <td>{Number(element.value).toFixed(2)}</td>
                <td>{element.exchangeRates[element.currency].name}</td>
                <td>{Number(element.exchangeRates[element.currency].ask).toFixed(2)}</td>
                <td>
                  {(element.exchangeRates[element.currency].ask
                   * element.value).toFixed(2)}

                </td>
                <td>Real</td>
                <td>
                  <button type="button">Editar</button>
                  /
                  <button
                    type="button"
                    data-testid="delete-btn"
                    id={ element.id }
                    onClick={ this.handleDeleteButton }
                  >
                    Excluir

                  </button>

                </td>
              </tr>))}

          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.shape({
    map: PropTypes.func,
  }),
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
