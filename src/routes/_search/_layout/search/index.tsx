import { createFileRoute } from '@tanstack/react-router'
import FilteredMovies from '../../../../components/FilteredMovies'

export const Route = createFileRoute('/_search/_layout/search/')({
  component: SearchedMovies
});

function SearchedMovies() {
  const {query} = Route.useSearch();

  return (
    <>
      {
        query && <FilteredMovies query={query} />
      }
    </>
  );
}