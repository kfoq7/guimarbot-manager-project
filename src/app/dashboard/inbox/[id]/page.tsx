'use client'

import { Title } from '@/components/ui/title'

export default function InboxId({ params }: { params: { id: string } }) {
  const { id } = params

  return (
    <>
      <div className="border-b">
        <Title className="mb-2">Bandeja de entrada</Title>
      </div>

      <div className="mt-8 w-full rounded-lg bg-gray-50 p-6 text-gray-900 shadow-sm">
        <div className="mb-4 border-b border-gray-300 pb-4">
          <Title className="mb-2 text-2xl font-bold text-gray-800">
            Titulo
          </Title>
          <div className="text-sm text-gray-500">ID: {id}</div>
        </div>

        <div className="mb-4">
          <div className="text-sm text-gray-600">
            <strong>Author:</strong> Mazapan
          </div>
          <div className="mt-1 text-sm text-gray-600">
            <strong>Asunto:</strong> Asusnto
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <p className="text-gray-700">
            <strong>Mensaje:</strong> Detalle del mensaje goes here. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla.
            Curabitur feugiat, tortor non consequat finibus, justo purus auctor
            massa, nec semper lorem quam in massa.
          </p>
        </div>
      </div>
    </>
  )
}
