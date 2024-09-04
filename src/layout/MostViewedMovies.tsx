import { useEffect, useMemo } from 'react';
import SingleMovie from '../components/SingleMovie';
import { useGetMoviesDiscoverInfinite } from '../services/queries';
import { Link } from '@tanstack/react-router';
import { useQueryClient } from '@tanstack/react-query';

function MostViewedMovies() {
  const queryClient = useQueryClient();
  const { data, isFetching, fetchNextPage } = useGetMoviesDiscoverInfinite('vote_count.desc');
  const movies = data?.pages.flatMap(page => page.results);
  let memoNumber = useMemo(() => {
    return 0;
  }, []);

  useEffect(() => {
    return () => {
      queryClient.removeQueries({ queryKey: ['mostViewedMovies'], exact: true });
    };
  }, [queryClient]);

  return (
    <section>
      <h2>Most Viewed</h2>

      <ul>
        {movies?.map(movie => {
          memoNumber += 1;
          return (
            <SingleMovie
              key={movie.id}
              movie={movie}
            />
          );
        })}
      </ul>

      {memoNumber <= 20 ? (
        <button
          type='button'
          disabled={isFetching || memoNumber > 20}
          onClick={() => fetchNextPage()}
        >
          {isFetching ? 'Cargando...' : 'Cargar más'}
        </button>
      ) : (
        <Link
          to='/movies/discover'
          search={{
            page: 1,
          }}
        >
          Ver más
        </Link>
      )}
    </section>
  );
}

export default MostViewedMovies;
