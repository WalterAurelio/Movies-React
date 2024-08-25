import { createFileRoute, Outlet, Link } from '@tanstack/react-router'
import GenreFilters from '../../components/GenreFilters';

export const Route = createFileRoute('/_movies/_layout')({
  component: Layout
})

function Layout() {
  return (
    <div>
      <h2>Soy el Layout de Movies</h2>
      <Link
        to='/movies'
      >
        Todos
      </Link>
      <GenreFilters />
      <Outlet />
    </div>
  );
}