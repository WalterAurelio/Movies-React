import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/playlist')({
  component: () => <div>Hello /playlist!</div>
})