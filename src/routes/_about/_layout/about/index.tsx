import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_about/_layout/about/')({
  component: () => <div>Hello /_about/_layout/about/!</div>
})