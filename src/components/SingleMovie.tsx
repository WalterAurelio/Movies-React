import { Link } from '@tanstack/react-router';
import { MovieDiscover } from '../api/movies';

function SingleMovie({ movie }: { movie: MovieDiscover }) {
  return (
    <Link
      to={`/movies/watch/$movie`}
      params={{
        movie: JSON.stringify({ id: movie.id, title: movie.title }),
      }}
    >
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={`Poster de ${movie.title}`}
        />
      </div>
      <h3>{movie.title}</h3>
    </Link>
  );
}

export default SingleMovie;
