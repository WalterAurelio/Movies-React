import { createFileRoute } from '@tanstack/react-router';
import Hero from '../layout/Hero';
import MostViewedMovies from '../layout/MostViewedMovies';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <MostViewedMovies />
    </>
  );
}
