import { OverviewCard } from '@/components/overview-card'

export const Overview = () => {
  return (
    <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <OverviewCard />
      <OverviewCard />
      <OverviewCard />
      <OverviewCard />
    </section>
  )
}
