import { useShallow } from 'zustand/react/shallow';
import { useTopMovieStore } from '../store/topRatedMovieStore';
import { useGetGenres, useGetMovieDetails } from '../services/queries';
import humanizeDuration from 'humanize-duration';
import { Link } from '@tanstack/react-router';

const shortHumanizer = humanizeDuration.humanizer({
  language: 'shortEn',
  languages: {
    shortEn: {
      y: () => 'y',
      mo: () => 'mo',
      w: () => 'w',
      d: () => 'd',
      h: () => 'hr',
      m: () => 'mins',
      s: () => 's',
      ms: () => 'ms',
    },
  },
});

function SelectedTopMovie() {
  const { data: genres } = useGetGenres();
  const { data } = useGetMovieDetails(533535);
  const { movie } = useTopMovieStore(
    useShallow(state => ({
      movie: state.movie,
    }))
  );

  const mainGenre = (id: number | undefined) => {
    if (id) {
      const filteredGenre = genres?.find(genre => genre.id === id);
      return filteredGenre?.name;
    }
  };

  const movieRuntime = () => {
    const runtime = movie ? movie?.runtime : data?.runtime;
    return shortHumanizer(runtime! * 60 * 1000);
  };

  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w500/${movie ? movie.backdrop_path : data?.backdrop_path}`} />
      <h2>{movie ? movie.title : data?.title}</h2>
      <div>
        <p>{movie ? movie.release_date.slice(0, 4) : data?.release_date.slice(0, 4)}</p>
        <p>{movie ? mainGenre(movie.genres[0].id) : mainGenre(data?.genres[0].id)}</p>
        <p>{movieRuntime()}</p>
      </div>
      <Link
        to='/movies/watch/$movie'
        params={{
          movie: JSON.stringify({ id: movie?.id, title: movie?.title })
        }}
      >
        Watch Now
      </Link>
      <button type='button'>Add to Playlist</button>
    </div>
  );
}

export default SelectedTopMovie;
