import { createFileRoute, Link } from '@tanstack/react-router';
import { useGetMoviesDiscover } from '../../services/queries';
import SingleMovie from '../../components/SingleMovie';
import * as v from 'valibot';

const DiscoverFilters = v.object({
  page: v.nonOptional(v.number()),
  with_genres: v.optional(v.array(v.number())),
});

export const Route = createFileRoute('/movies/discover')({
  component: DiscoverMovies,
  validateSearch: search => v.parse(DiscoverFilters, search),
});

function DiscoverMovies() {
  const { page, with_genres } = Route.useSearch();
  const { data, isFetching, error } = useGetMoviesDiscover(page, with_genres);

  if (isFetching) return <p>Cargando películas página {page}</p>;
  if (error) return <p>{JSON.stringify(error)}</p>;

  return (
    <div>
      <Link
        to="/movies/discover"
        search={{
          page: page - 1,
          with_genres: with_genres,
        }}
        disabled={page === 1}
      >
        Anterior
      </Link>
      <Link
        to="/movies/discover"
        search={{
          page: page + 1,
          with_genres: with_genres,
        }}
        disabled={page === data?.total_pages}
      >
        Siguiente
      </Link>
      <div>{data?.results.map(movie => <SingleMovie key={movie.id} movie={movie} />)}</div>
    </div>
  );
}
