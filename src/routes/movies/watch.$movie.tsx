import { createFileRoute } from '@tanstack/react-router';
import { useGetMovieDetailsById } from '../../services/queries';

type MovieEssentials = {
  id: number;
  title: string;
};

export const Route = createFileRoute('/movies/watch/$movie')({
  component: WatchMovie,
});

function WatchMovie() {
  const { movie } = Route.useParams();
  const movieObject: MovieEssentials = JSON.parse(movie);
  const { data, isFetching, error } = useGetMovieDetailsById(movieObject.id);

  console.log(data);

  if (isFetching) return <p>Cargando detalles de la película...</p>;
  if (error) return <p>{JSON.stringify(error)}</p>;

  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w300${data?.poster_path}`} alt={`Poster de ${data?.title}`} />
      <h2>{data?.title}</h2>
      <p>{data?.overview}</p>
    </div>
  );
}
