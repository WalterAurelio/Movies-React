import { createFileRoute, Link, Outlet } from '@tanstack/react-router';
import GenreFilters from '../components/GenreFilters';

export const Route = createFileRoute('/movies')({
  component: Movies,
});

function Movies() {
  const aux = 1;

  return (
    <div>
      <h2>Soy el layout de movies todo en uno.</h2>
      <Link to="/movies/all/$page" params={{page: aux.toString()}}>Todas</Link>
      <GenreFilters />
      <Outlet />
    </div>
  );
}
