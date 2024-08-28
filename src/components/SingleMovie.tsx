import { Link } from '@tanstack/react-router';
import { MovieSearch } from '../api/movies';

function SingleMovie({ movie }: { movie: MovieSearch }) {
  return (
    <Link
      to="/movies/watch/$movieName"
      params={{
        movieName: movie.title,
      }}
    >
      <div>
        <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={`Poster de ${movie.title}`} />
      </div>
      <h3>{movie.title}</h3>
    </Link>
  );
}

export default SingleMovie;
