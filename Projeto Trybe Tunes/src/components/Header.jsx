import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';

class Header extends React.Component {
    state = {
      loading: false,
      name: '',
    }

    componentDidMount() {
      this.usaGetUser();
    }

    usaGetUser = async () => {
      this.setState({ loading: true });
      const userName = await getUser();
      this.setState({ name: userName.name, loading: false });
    }

    render() {
      const { loading, name } = this.state;
      return (
        <div>
          { loading ? <span>Carregando...</span>
            : (
              <header data-testid="header-component">
                <ul>
                  <li>
                    <Link data-testid="link-to-search" to="/search">Pesquisa</Link>
                  </li>
                  <li>
                    <Link data-testid="link-to-favorites" to="/favorites">Favoritos</Link>
                  </li>
                  <li>
                    <Link data-testid="link-to-profile" to="/profile">Perfil</Link>
                  </li>
                </ul>
                <h2 data-testid="header-user-name">{ name }</h2>
              </header>
            )}
        </div>
      );
    }
}

export default Header;
