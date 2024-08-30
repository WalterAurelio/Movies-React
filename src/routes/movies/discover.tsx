import { createFileRoute, Link } from '@tanstack/react-router';
import { useGetMoviesDiscoverPaginated } from '../../services/queries';
import SingleMovie from '../../components/SingleMovie';

export const Route = createFileRoute('/movies/discover')({
  component: DiscoverMovies,
  validateSearch: (search: Record<string, unknown>): { page: number } => {
    return {
      page: search.page as number,
    };
  },
});

function DiscoverMovies() {
  const { page } = Route.useSearch();
  const { data, isFetching, error } = useGetMoviesDiscoverPaginated(page.toString());

  if (isFetching) return <p>Cargando películas página {page}</p>;
  if (error) return <p>{JSON.stringify(error)}</p>;

  console.log(data);

  return (
    <div>
      <Link
        to="/movies/discover"
        search={{
          page: page - 1,
        }}
      >
        Anterior
      </Link>
      <Link
        to="/movies/discover"
        search={{
          page: page + 1,
        }}
      >
        Siguiente
      </Link>
      <div>
        {
          data?.map(movie => 
            <SingleMovie 
              key={movie.id}
              movie={movie}
            />
          )
        }
      </div>
    </div>
  );
}
