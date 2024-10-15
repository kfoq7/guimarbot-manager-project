'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const sections = [
  {
    id: 1,
    to: '/dashboard',
    name: 'Home'
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
  },
  {
    id: 6,
    to: '/dashboard/inbox',
    name: 'Bandeje de entrada'
  }
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden flex-col gap-2 pb-4 md:flex">
      <Link href="/dashboard" className="mb-2 hidden w-64 p-4 md:flex">
        {/* <span className="text-2xl">🎓</span> */}
        <span className="text-4xl font-bold tracking-tighter">Guimarbot</span>
      </Link>

      <nav className="flex-1 space-y-2">
        <ul className="flex flex-col gap-2 overflow-x-hidden overflow-y-hidden px-4">
          {sections.map(({ id, to, name }) => (
            <li key={id} className="flex w-full md:w-auto">
              <Link
                href={to}
                className={cn('block w-full rounded-md px-4 py-3', {
                  'bg-blue-600 text-white': to === pathname
                })}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
