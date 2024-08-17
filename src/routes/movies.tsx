import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/movies')({
  component: Movies
})

function Movies() {
  return (
    <div>Soy la página Movies</div>
  );
}