import { createFileRoute } from '@tanstack/react-router'
import GenreFilters from '../../components/GenreFilters';

export const Route = createFileRoute('/movies/')({
  component: Movies
})

function Movies() {
  return (
    <div>
      <h2>Películas</h2>
      <GenreFilters />
    </div>
  );
}