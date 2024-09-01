import { useGetMoviesDiscover } from '../services/queries';
import { useTopMovieStore } from '../store/topRatedMovieStore';

function TopRatedMovies() {
  const { data, error, isFetching } = useGetMoviesDiscover(1, undefined, 'popularity.desc');
  const { setMovie } = useTopMovieStore();
  let contador = 0;

  if (isFetching) return <p>Cargando Top Rated...</p>;
  if (error) return <p>{JSON.stringify(error)}</p>;

  return (
    <ul>
      {data?.results.map(movie => {
        if (contador < 9) {
          contador += 1;
          return (
            <li
              key={movie.id}
              onClick={() => setMovie(movie)}
            >
              <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} />
            </li>
          );
        }
      })}
    </ul>
  );
}
export default TopRatedMovies;
