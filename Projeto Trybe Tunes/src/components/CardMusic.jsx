import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';

class CardMusic extends Component {
  // state = {
  //   loading: false,
  // }

  // utilizaFav = async ({ target: { checked } }) => {
  //   const { musics } = this.props;
  //   const { trackId } = musics;

  //   this.setState({ loading: true });
  //   if (checked) await addSong(trackId); getFavoriteSongs(trackId);
  //   if (!checked) await removeSong(musics);
  //   this.setState({ loading: false });
  // }

  render() {
    const { musics, checked, loading, onChange } = this.props;
    const { trackName, previewUrl, trackId } = musics;
    // const { loading } = this.state;
    return (
      <div>

        <p>{ trackName }</p>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
          .
        </audio>

        <form>
          <label htmlFor="favorites">
            <input
              name="favorites"
              type="checkbox"
              checked={ checked }
              data-testid={ `checkbox-music-${trackId}` }
              id={ trackId }
              onChange={ () => onChange(checked, musics) }
            />
            Favoritar
          </label>
        </form>
        { loading && <p>Carregando...</p> }
      </div>
    );
  }
}

CardMusic.propTypes = {
  trackName: PropTypes.string,
  previewUrl: PropTypes.string,
  trackId: PropTypes.string,
  musics: PropTypes.string,
}.isRequired;

export default CardMusic;
