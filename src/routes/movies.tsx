import { createFileRoute, Link, Outlet } from '@tanstack/react-router';
import GenreFilters from '../components/GenreFilters';

export const Route = createFileRoute('/movies')({
  component: Movies,
});

function Movies() {
  return (
    <div>
      <h2>Soy el layout de movies todo en uno.</h2>
      <Link
        to='/movies/discover'
        search={{
          page: 1,
        }}
      >
        Todas
      </Link>
      <GenreFilters />
      <Outlet />
    </div>
  );
}
