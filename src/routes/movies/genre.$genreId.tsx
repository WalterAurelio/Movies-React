import { createFileRoute } from '@tanstack/react-router';
import SingleMovie from '../../components/SingleMovie';
import { useGetMoviesDiscoverByGenre } from '../../services/queries';

export const Route = createFileRoute('/movies/genre/$genreId')({
  component: MoviesByGenre,
});

function MoviesByGenre() {
  const { genreId } = Route.useParams();
  const { data, isFetching, error } = useGetMoviesDiscoverByGenre(genreId);

  if (isFetching) return <p>Cargando películas por género...</p>;
  if (error) return <p>{JSON.stringify(error)}</p>;

  return (
    <>
      <h3>{data?.genreName}</h3>
      <ul>{data?.movies.map(movie => <SingleMovie key={movie.id} movie={movie} />)}</ul>
    </>
  );
}
