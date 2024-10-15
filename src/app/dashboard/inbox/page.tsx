'use client'

import { Title } from '@/components/ui/title'
import { data } from './data'
import { useRouter } from 'next/navigation'

export default function Inbox() {
  const router = useRouter()

  return (
    <>
      <div className="">
        <Title>Bandeja de entrada</Title>
      </div>

      <div className="mt-8 w-full rounded-lg bg-[#2e2e2e] py-2">
        <div className="px-3 py-2 text-white">Inbox</div>

        <div className="max-h-[80vh] overflow-y-auto">
          <ul className="flex w-full flex-col bg-transparent">
            {data.map(({ id, author, title, date }) => (
              <li
                key={id}
                onClick={() => router.push(`/dashboard/inbox/${id}`)}
                className="w-full cursor-pointer border-b border-gray-700 px-3 py-2.5 transition-colors duration-200 hover:bg-gray-700"
              >
                <div className="flex items-center text-white">
                  <div className="flex w-28 max-w-28 pr-4">
                    <span className="truncate font-bold">{author}</span>
                  </div>

                  <div className="flex flex-1 items-center justify-between">
                    <div className="flex max-w-[75%] items-center space-x-2">
                      <h2 className="font-bold">{title}</h2>

                      <p className="truncate text-gray-400">
                        - Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Officia dolor voluptatem aperiam modi qui?
                        Eligendi optio soluta, exercitationem repellat fugit
                        voluptatem.
                      </p>
                    </div>

                    <div className="w-24 text-right md:w-36">
                      <span className="text-gray-400">{date}</span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
