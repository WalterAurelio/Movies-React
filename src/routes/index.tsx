import { createFileRoute } from '@tanstack/react-router'
import Hero from '../layout/Hero';
import Featured from '../layout/Featured';
import Trending from '../layout/Trending';
import { getMovies } from '../api/movies';
import AllMovies from '../layout/AllMovies';

export const Route = createFileRoute('/')({
  component: Index,
  loader: getMovies
})

function Index() {
  const movies = Route.useLoaderData();

  return (
    <>
      <Hero />
      <Featured />
      {/* <Trending movies={movies} /> */}
      <AllMovies movies={movies} />
    </>
  );
}