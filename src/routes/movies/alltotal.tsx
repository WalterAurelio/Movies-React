import { createFileRoute } from '@tanstack/react-router';
import SingleMovie from '../../components/SingleMovie';
import { useGetMoviesDiscover, useGetMoviesDiscoverPaginated } from '../../services/queries';

export const Route = createFileRoute('/movies/alltotal')({
  component: AllMovies,
});

function AllMovies() {
  const { data, error, isFetching } = useGetMoviesDiscover();
  // const { data, error, isFetching } = useGetMoviesDiscoverPaginated();
  


  if (isFetching) return <p>Cargando todas las películas...</p>;
  if (error) return <p>{JSON.stringify(error)}</p>;

  return (
    <div>
      {/* <h2>Todas las películas</h2>
      <ul>
        {data?.map(movie => (
          <li key={movie.id}>
            <SingleMovie movie={movie} />
          </li>
        ))}
      </ul>
      <button
        type='button'
        onClick={() => {

        }}
      >
        Siguiente
      </button> */}
    </div>
  );
}
