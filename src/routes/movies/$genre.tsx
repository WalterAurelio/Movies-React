import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/movies/$genre')({
  component: Movie
});

function Movie() {
  const {genre} = Route.useParams();

  return (
    <div>
      Soy la pelicula {genre}
    </div>
  );
}