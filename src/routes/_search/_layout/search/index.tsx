import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_search/_layout/search/')({
  component: () => <div>Holis, soy Search, no Layout</div>
})