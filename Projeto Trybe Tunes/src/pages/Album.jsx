import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import CardMusic from '../components/CardMusic';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';

class Album extends React.Component {
  state = {
    favorite: [],
    musics: [],
    musicsInfo: {},
    loading: false,
  }

  componentDidMount() {
    this.usagetMusics();
  }

  usagetMusics = () => {
    const { match: { params: { id } } } = this.props;
    this.setState(async () => {
      const data = await getMusics(id);
      const salva = await getFavoriteSongs();
      this.setState({ musicsInfo: data[0], musics: data, favorite: salva });
    });
  }

  // utilizaFav = async ({ target: { checked } }) => {
    utilizaFav = async (checked, musics) => {
      // const { musics } = this.props;
      // const { trackId } = musics;

      this.setState({ loading: true });
      if (checked) await removeSong(musics);
      if (!checked) await addSong(musics); getFavoriteSongs();
      this.setState({ loading: false });
    }

    render() {
      const { musicsInfo, musics, favorite, loading } = this.state;
      return (
        <div data-testid="page-album">
          <Header />

          <div className="album-cover">
            <img src={ musicsInfo.artworkUrl100 } alt={ musicsInfo.collectionName } />
            <h2 data-testid="artist-name">{ musicsInfo.artistName }</h2>
            <h3 data-testid="album-name">{ musicsInfo.collectionName }</h3>
          </div>
          { musics.map((element, index) => (
            element.trackName ? <CardMusic
              key={ index }
              musics={ element }
              trackName={ element.trackName }
              previewUrl={ element.previewUrl }
              trackId={ element.trackId }
              favorite={ favorite }
              loading={ loading }
              onChange={ this.utilizaFav }
              checked={ favorite.some((song) => song.trackId === element.trackId) }
            /> : ''
          ))}
        </div>
      );
    }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}.isRequired;

export default Album;
