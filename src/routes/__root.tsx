import { Link, Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import '../styles/__root.scss';
import { QueryClient } from '@tanstack/react-query';
import { useMovieNameStore } from '../store/movieNameStore';

type QueryContext = {
  queryClient: QueryClient;
};

export const Route = createRootRouteWithContext<QueryContext>()({
  component: Main,
});

const activeProps = {
  style: {
    fontWeight: 'bold',
  },
};

function Main() {
  const { setMovieName } = useMovieNameStore();

  return (
    <>
      <nav className='navbar'>
        <ul>
          <li>
            <Link
              to='/'
              activeProps={activeProps}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to='/movies/discover'
              activeProps={activeProps}
              search={{
                page: 1,
              }}
            >
              Movies
            </Link>
          </li>
          <li>
            <Link
              to='/search'
              activeProps={activeProps}
              onClick={() => setMovieName('')}
            >
              Search
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}
