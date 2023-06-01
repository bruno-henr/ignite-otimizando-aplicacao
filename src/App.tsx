import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import { useMovies } from './MoviesContext'
import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';

export function App() {
  const { genres, selectedGenreId, selectedGenre, movies } = useMovies();

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar
        genres={genres}
        selectedGenreId={selectedGenreId}
      />

      <Content
        selectedGenre={selectedGenre}
        movies={movies}
      />
    </div>
  )
}