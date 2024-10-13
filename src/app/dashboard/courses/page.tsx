'use client'

import { Fragment, useState } from 'react'
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels
} from '@headlessui/react'
import { Title } from '@/components/ui/title'
import { TableStack } from '@/components/ui/table'
import { Overview } from '@/sections/overview'

export default function Courses() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="flex items-center justify-between">
        <Title>Lista de cursos</Title>

        <div className="">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="hover:bg inline-flex items-center justify-center gap-2 rounded-md border bg-white p-2"
          >
            Nuevo Curso
          </button>
        </div>
      </div>

      <div className="mt-6">
        <TabGroup>
          <div className="border-b">
            <TabList className="flex gap-4">
              <Tab as={Fragment}>
                <button>Cursos</button>
              </Tab>
            </TabList>
          </div>

          <TabPanels>
            <TabPanel>
              <Overview />
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>

      <TableStack />

      <Dialog
        as="div"
        open={isOpen}
        onClose={() => {}}
        className="relative z-50 focus:outline-none"
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-gray-300/40">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="data-[closed]:transform-[scale(95%)] bg-white/90t w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:opacity-0"
            >
              <DialogTitle as={Title} className="text-base/7 text-black">
                Payment successful
              </DialogTitle>
              <p className="mt-2 text-pretty text-sm/6 text-black/50">
                Your payment has been successfully submitted. We’ve sent you an
                email with all of the details of your order.
              </p>
              <div className="mt-4">
                <button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Got it, thanks!
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}
