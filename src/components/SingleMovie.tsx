import { Link } from '@tanstack/react-router';
import { MovieDiscover } from '../api/movies';
import { useGetGenres } from '../services/queries';
import { movieGenres } from '../utils/utils';

function SingleMovie({ movie }: { movie: MovieDiscover }) {
  const { data } = useGetGenres();

  return (
    <div>
      <Link
        to={`/movies/watch/$movie`}
        params={{
          movie: JSON.stringify({ id: movie.id, title: movie.title }),
        }}
      >
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={`Poster de ${movie.title}`}
        />
      </Link>
      <p>{movie.release_date.slice(0, 4)}</p>
      {movieGenres(data, movie.genre_ids)?.map(genre => (
        <Link
          key={genre.id}
          to='/movies/discover'
          search={{
            page: 1,
            with_genres: [genre.id],
          }}
        >
          {genre.name}
        </Link>
      ))}
      <Link
        to={`/movies/watch/$movie`}
        params={{
          movie: JSON.stringify({ id: movie.id, title: movie.title }),
        }}
      >
        <h3>{movie.title}</h3>
      </Link>
    </div>
  );
}

export default SingleMovie;
