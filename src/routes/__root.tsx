import { createRootRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
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
      <div>Yo estoy siempre...</div>
      <nav>
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
              to='/'
              activeProps={activeProps}
            >
              Categories
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
        </ul>

        <input 
          type='text'
          placeholder='Ingrese película...'
          id='searchMovie'
        />
        <button
          type='button'
        >
          Buscar
        </button>

      </nav>
      <Outlet />
    </>
  );
}