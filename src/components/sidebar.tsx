import Link from 'next/link'

const sections = [
  {
    id: 1,
    to: '/dashboard',
    name: 'Dashboard'
  },
  {
    id: 2,
    to: '/dashboard/courses',
    name: 'Courses'
  },
  {
    id: 3,
    to: '/dashboard/schedule',
    name: 'Schedule'
  },
  {
    id: 4,
    to: '/dashboard/message',
    name: 'Message'
  },
  {
    id: 5,
    to: '/dashboard/grades',
    name: 'Becas'
  }
]

export function Sidebar() {
  return (
    <aside className="hidden flex-col gap-2 pb-4 md:flex">
      <Link href="/dashboard" className="mb-2 hidden w-64 p-4 md:flex">
        <span className="text-2xl">🎓</span>
        <span className="text-lg font-bold">Academi</span>
      </Link>

      <nav className="flex-1 space-y-2">
        <ul className="flex flex-col gap-8 overflow-x-hidden overflow-y-hidden px-4">
          {sections.map(({ id, to, name }) => (
            <li key={id} className="flex w-full md:w-auto">
              <Link href={to} className="block">
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
