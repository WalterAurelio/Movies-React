import { useMemo } from 'react';
import { useGetMoviesDiscover } from '../services/queries';
import SingleMovie from './SingleMovie';

function YouMayLike() {
  const randomNumber = useMemo(() => {
    return Math.ceil(Math.random() * 10);
  }, []);
  const { data, isFetching, error } = useGetMoviesDiscover(randomNumber);

  console.log(randomNumber);

  if (isFetching) return <p>Cargando YouMayLike...</p>;
  if (error) return <p>{JSON.stringify(error)}</p>;

  return (
    <div>
      <h2>You May Like</h2>
      {data?.results.map(movie => (
        <SingleMovie
          key={movie.id}
          movie={movie}
        />
      ))}
    </div>
  );
}
export default YouMayLike;
