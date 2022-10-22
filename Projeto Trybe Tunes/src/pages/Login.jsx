import React from 'react';
import PropTypes from 'prop-types';
import { createUser } from '../services/userAPI';

class Login extends React.Component {
  state = {
    disableButton: true,
    user: '',
    loading: false,
  }

  onInputChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value }, () => {
      const { user } = this.state;
      const minLength = 2;
      if (user.length > minLength) {
        return this.setState({ disableButton: false });
      }
      return this.setState({ disableButton: true });
    });
  };

  utilizaCreate = async (event) => {
    event.preventDefault();
    const { user } = this.state;
    this.setState({
      loading: true,
    });
    await createUser({ name: user });
    const { history } = this.props;
    history.push('/search');
  }

  render() {
    const { disableButton, loading } = this.state;
    return (
      <div data-testid="page-login">
        {
          loading ? <span>Carregando...</span>
            : (
              <form>
                <input
                  type="text"
                  name="user"
                  placeholder="Digite seu nome"
                  data-testid="login-name-input"
                  onChange={ (event) => this.onInputChange(event) }
                />
                <button
                  type="button"
                  disabled={ disableButton }
                  data-testid="login-submit-button"
                  onClick={ this.utilizaCreate }
                >
                  Entrar

                </button>
              </form>
            )
        }
      </div>

    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
