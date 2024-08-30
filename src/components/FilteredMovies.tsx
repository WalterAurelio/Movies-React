import { Link } from '@tanstack/react-router';
import { useGetMoviesSearch } from '../services/queries';
import SingleMovie from './SingleMovie';

function FilteredMovies({ query, page }: { query: string; page: number }) {
  const { data, isFetching, error } = useGetMoviesSearch(query, page);

  if (isFetching) return <p>Cargando películas...</p>;
  if (error) return <p>{JSON.stringify(error)}</p>;

  return (
    <>
      <Link
        to='/search'
        search={{
          query: query,
          page: page! - 1,
        }}
        disabled={page === 1}
      >
        Anterior
      </Link>
      <Link
        to='/search'
        search={{
          query: query,
          page: page! + 1,
        }}
        disabled={page === data?.total_pages}
      >
        Siguiente
      </Link>
      <div>
        {data?.results.map(movie => (
          <SingleMovie
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>
    </>
  );
}

export default FilteredMovies;
