'use client'

import { Fragment } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { cn } from '@/lib/utils'
import { Overview } from '@/sections/overview'
import { Title } from '@/components/ui/title'

const tabs = [
  {
    id: 'resumen',
    name: 'Resume'
  },
  {
    id: 'cursos',
    name: 'Cursos'
  },
  {
    id: 'asignaciones',
    name: 'Asiganaciones'
  }
]

export default function Dashboard() {
  return (
    <>
      <div className="flex items-center justify-between">
        <Title>Bienvendio de vuelta, Mazapan</Title>

        <button className="inline-flex items-center justify-center gap-2 rounded-md border bg-background p-2">
          <span className="">Notificaciones</span>
          <span className="">R</span>
        </button>
      </div>

      <div className="mt-6">
        <TabGroup>
          <div className="border-b">
            <TabList className="flex gap-y-4">
              {tabs.map(({ id, name }) => (
                <Tab key={id} as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={cn(
                        'border-b-2 px-4 py-2 font-medium outline-none',
                        {
                          'border-gray-800': selected
                        }
                      )}
                    >
                      {name}
                    </button>
                  )}
                </Tab>
              ))}
            </TabList>
          </div>

          <TabPanels className="mt-4">
            <TabPanel as={Fragment}>
              <Overview />
            </TabPanel>
            <TabPanel>Content 2</TabPanel>
            <TabPanel>Content 3</TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </>
  )
}
