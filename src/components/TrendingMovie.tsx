import { MovieDiscover } from '../api/movies';

function TrendingMovie({ movie }: { movie: MovieDiscover }) {
  return (
    <div>
      <p>{movie.title}</p>
      <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={`Poster de ${movie.title}`} />
    </div>
  );
}

export default TrendingMovie;
