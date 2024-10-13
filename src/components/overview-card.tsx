export const OverviewCard = () => {
  return (
    <div className="bg-card rounded-lg border bg-white p-4 shadow-sm">
      <div className="flex flex-row items-center justify-between space-y-0 pb-2">
        <p className="text-sm font-medium">Total Courses</p>
        <span className="text-sm">📚</span>
      </div>
      <div>
        <div className="text-2xl font-bold">4</div>
        <p className="text-muted-foreground text-xs">
          2 in progress, 2 completed
        </p>
      </div>
    </div>
  )
}
