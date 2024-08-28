import { createFileRoute } from '@tanstack/react-router'
import { getMovieDetailsByName } from '../../api/movies';

export const Route = createFileRoute('/movies/watch/$movieName')({
  component: WatchMovie,
  loader: ({params}) => getMovieDetailsByName(params.movieName)
})

function WatchMovie() {
  const movie = Route.useLoaderData();

  return (
    <div>
      <img 
        src={`https://image.tmdb.org/t/p/w300${movie?.poster_path}`}
        alt={`Poster de ${movie?.title}`}
      />
      <h2>{movie?.title}</h2>
      <p>{movie?.overview}</p>
      <p>{movie?.vote_average}</p>
    </div>
  );
}