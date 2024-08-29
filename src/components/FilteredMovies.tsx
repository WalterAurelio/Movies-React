import { useEffect } from 'react';
import { useGetMoviesDiscoverByName } from '../services/queries';
import SingleMovie from './SingleMovie';

function FilteredMovies({ query }: { query: string }) {
  const { data, isFetching, error, refetch } = useGetMoviesDiscoverByName(query);

  useEffect(() => {
    refetch();
  }, [query, refetch]);

  if (isFetching) return <p>Cargando películas...</p>;
  if (error) return <p>{JSON.stringify(error)}</p>;

  return <div>{data?.map(movie => <SingleMovie key={movie.id} movie={movie} />)}</div>;
}

export default FilteredMovies;
