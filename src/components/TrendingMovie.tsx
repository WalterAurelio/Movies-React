import { MovieSearch } from '../api/movies';

function TrendingMovie({ movie }: { movie: MovieSearch }) {
  return (
    <div>
      <p>{movie.title}</p>
      <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={`Poster de ${movie.title}`} />
    </div>
  );
}

export default TrendingMovie;
