import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/movies/$id')({
  component: Movie
});

function Movie() {
  const {id} = Route.useParams();

  return (
    <div>
      Soy la pelicula {id}
    </div>
  );
}