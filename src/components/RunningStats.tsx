interface StatItem {
  label: string
  value: string
}

export default function RunningStats({ stats }: { stats: StatItem[] }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map(stat => (
        <div
          key={stat.label}
          className="border border-gray-200 rounded-xl p-4 hover:bg-gray-50 transition-colors"
        >
          <h3 className="text-sm font-medium text-gray-500">{stat.label}</h3>
          <p className="text-2xl font-bold mt-1">{stat.value}</p>
        </div>
      ))}
    </div>
  )
}