import { MovieDiscover } from '../api/movies';
import { useGetMovieDetails } from '../services/queries';
import { useTopMovieStore } from '../store/topRatedMovieStore';

function SingleTopMovie({ movie }: { movie: MovieDiscover }) {
  const { data } = useGetMovieDetails(movie.id);
  const { setMovie } = useTopMovieStore();

  return (
    <li
      key={movie.id}
      onClick={() => setMovie(data)}
    >
      <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} />
    </li>
  );
}
export default SingleTopMovie;
