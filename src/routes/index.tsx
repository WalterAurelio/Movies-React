import { createFileRoute } from '@tanstack/react-router'
import Hero from '../layout/Hero';
import MostViewedMovies from '../layout/MostViewedMovies';
// import Featured from '../layout/Featured';
// import Trending from '../layout/Trending';
// import AllMovies from '../layout/AllMovies';

export const Route = createFileRoute('/')({
  component: Index
})

function Index() {

  return (
    <>
      <Hero />
      <MostViewedMovies />
      {/* <Featured /> */}
      {/* <Trending movies={movies} /> */}
      {/* <AllMovies movies={movies} /> */}
    </>
  );
}