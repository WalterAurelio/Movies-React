import { createFileRoute } from '@tanstack/react-router'
import { getMovieByName } from '../../../../../api/movies';

export const Route = createFileRoute('/_movies/_layout/movies/watch/$movieName')({
  component: WatchMovie,
  loader: ({params}) => getMovieByName(params.movieName)
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