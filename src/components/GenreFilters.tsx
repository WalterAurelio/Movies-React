import { Link } from '@tanstack/react-router';
import { useGetGenres } from '../services/queries';

function GenreFilters() {
  const { data } = useGetGenres();

  return (
    <div>
      {data?.map(genre => (
        <Link
          key={genre.id}
          to="/movies/discover"
          search={{
            page: 1,
            with_genres: [genre.id],
          }}
        >
          {genre.name}
        </Link>
      ))}
    </div>
  );
}

export default GenreFilters;
