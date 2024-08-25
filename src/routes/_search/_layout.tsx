import { createFileRoute, Outlet, useNavigate } from '@tanstack/react-router'
import * as v from 'valibot'
import SearchInput from '../../components/SearchInput'

const Search = v.object({
  query: v.optional(v.string())
});

type Search = v.InferOutput<typeof Search>;

export const Route = createFileRoute('/_search/_layout')({
  component: Layout,
  validateSearch: (search) => v.parse(Search, search),
});

function Layout() {
  const { query } = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });

  return (
    <div>
      <h2>Buscar película:</h2>
      <SearchInput query={query} navigate={navigate} />

      <Outlet />
    </div>
  );
}