import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

class Search extends React.Component {
  state = {
    disableButton: true,
    artist: '',
    loading: '',
    albums: [],
    searchArtist: '',
    resultadoPesquisa: false,
  }

  onInputChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value }, () => {
      const { artist } = this.state;
      const minLength = 2;
      if (artist.length >= minLength) {
        return this.setState({ disableButton: false });
      }
      return this.setState({ disableButton: true });
    });
  };

  searchButton = (event) => {
    event.preventDefault();
    const { artist } = this.state;
    this.setState({
      loading: true,
      searchArtist: artist },
    async () => {
      const data = await searchAlbumsAPI(artist);
      this.setState({
        albums: data,
        artist: '',
        loading: false,
        resultadoPesquisa: true,
      });
    });
  };
  ;

  render() {
    const { disableButton, loading, albums, resultadoPesquisa,
      searchArtist, artist } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <form>
          <input
            type="text"
            name="artist"
            value={ artist }
            placeholder="Nome do Artista"
            data-testid="search-artist-input"
            onChange={ this.onInputChange }
          />
          <button
            disabled={ disableButton }
            type="submit"
            data-testid="search-artist-button"
            onClick={ this.searchButton }
          >
            Pesquisar

          </button>
        </form>
        {loading && <p>Carregando...</p>}
        {resultadoPesquisa === true
          ? <p>{`Resultado de álbuns de: ${searchArtist}`}</p> : (
            ''
          )}
        {albums.length <= 0 ? <p>Nenhum álbum foi encontrado</p>
          : albums.map((element) => (
            <div key={ element.trackCount }>
              <img src={ element.artworkUrl100 } alt={ element.artistId } />
              <p>{ element.collectionName }</p>
              <p>{ element.artistName }</p>
              <Link
                to={ `/album/${element.collectionId}` }
                data-testid={ `link-to-album-${element.collectionId}` }
              >
                <button
                  type="button"
                >
                  Músicas
                </button>
              </Link>
            </div>
          ))}
      </div>
    );
  }
}

export default Search;
