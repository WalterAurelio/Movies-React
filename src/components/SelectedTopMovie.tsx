import { useShallow } from 'zustand/react/shallow';
import { useTopMovieStore } from '../store/topRatedMovieStore';
import { useGetGenres, useGetMovieDetails } from '../services/queries';
import { movieRuntime, mainGenre } from '../utils/utils';
import { Link } from '@tanstack/react-router';

function SelectedTopMovie() {
  const { data: genres } = useGetGenres();
  const { data } = useGetMovieDetails(533535);
  const { movie } = useTopMovieStore(
    useShallow(state => ({
      movie: state.movie,
    }))
  );

  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w500/${movie ? movie.backdrop_path : data?.backdrop_path}`} />
      <h2>{movie ? movie.title : data?.title}</h2>
      <div>
        <p>{movie ? movie.release_date.slice(0, 4) : data?.release_date.slice(0, 4)}</p>
        <p>{movie ? mainGenre(genres, movie.genres[0].id) : mainGenre(genres, data?.genres[0].id)}</p>
        <p>{movieRuntime(movie, data)}</p>
      </div>
      <Link
        to='/movies/watch/$movie'
        params={{
          movie: JSON.stringify({ id: movie ? movie?.id : data?.id, title: movie ? movie?.title : data?.id })
        }}
      >
        Watch Now
      </Link>
      <button type='button'>Add to Playlist</button>
    </div>
  );
}

export default SelectedTopMovie;
