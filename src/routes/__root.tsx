import { Link, Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import '../styles/__root.scss'
import { QueryClient } from '@tanstack/react-query'

type QueryContext = {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<QueryContext>()({
  component: Main
})

const activeProps = {
  style: {
    fontWeight: 'bold'
  }
}

function Main() {
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
              to='/movies'
              activeProps={activeProps}
            >
              Movies
            </Link>
          </li>
          <li>
            <Link
              to='/search'
              activeProps={activeProps}
            >
              Search
            </Link>
          </li>
          <li>
            <Link
              to='/playlist'
              activeProps={activeProps}
            >
              My Playlist
            </Link>
          </li>
          <li>
            <Link
              to='/about'
              activeProps={activeProps}
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}