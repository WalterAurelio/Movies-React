import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_about/_layout')({
  component: Layout
})

function Layout() {
  return (
    <div>
      <p>Soy Layout de About</p>
      <Outlet />
    </div>
  );
}