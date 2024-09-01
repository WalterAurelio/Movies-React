import SingleMovie from '../components/SingleMovie';
import { useGetMoviesDiscoverInfinite } from '../services/queries';

function MostViewedMovies() {
  const { data, isFetching, error, hasNextPage, fetchNextPage } = useGetMoviesDiscoverInfinite('vote_count.desc');
  const movies = data?.pages.flatMap(page => page.results);

  return (
    <section>
      <h2>Most Viewed</h2>

      <ul>
        {
          movies?.map(movie =>
            <SingleMovie 
              key={movie.id}
              movie={movie}
            />
          )
        }
      </ul>

      <button
        type='button'
        disabled={isFetching || !hasNextPage}
        onClick={() => fetchNextPage()}
      >
        { isFetching ? 'Cargando...' : 'Cargar más'}
      </button>
    </section>
  );
}
export default MostViewedMovies;
