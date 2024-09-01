import { useGetMoviesDiscover } from '../services/queries';
import SingleTopMovie from './SingleTopMovie';

function TopRatedMovies() {
  const { data, error, isFetching } = useGetMoviesDiscover(1, undefined, 'popularity.desc');
  let contador = 0;

  if (isFetching) return <p>Cargando Top Rated...</p>;
  if (error) return <p>{JSON.stringify(error)}</p>;

  return (
    <ul>
      {data?.results.map(movie => {
        if (contador < 9) {
          contador += 1;
          return (
            <SingleTopMovie
              key={movie.id}
              movie={movie}
            />
          );
        }
      })}
    </ul>
  );
}
export default TopRatedMovies;
