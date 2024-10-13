'use client'

import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
  flexRender
} from '@tanstack/react-table'
import { InputFilter } from './input-filter'

const columns: ColumnDef<{ id: number }>[] = [
  {
    accessorKey: 'id',
    header: 'ID'
    // size: 10
    // cell: () => <div className="flex">Hello</div>
  },
  {
    accessorKey: 'nombre',
    header: 'Nombre'
    // size: 50,
    // cell: () => {}
  }
]

export const TableStack = () => {
  const table = useReactTable({
    data: [{ id: 123 }, { id: 124 }, { id: 125 }],
    columns,
    state: {},
    getCoreRowModel: getCoreRowModel()
  })

  return (
    <div className="my-6 w-full">
      <InputFilter />

      <div className="relative mt-2 overflow-x-auto rounded-md border">
        <table className="w-full py-2 text-left text-sm md:text-base">
          <thead className="rounded-md border-b bg-white/80">
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id} className="px-4 py-2 capitalize">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row, i) => (
                <tr key={row.id} className={'bg-gray-50/20'}>
                  {row.getVisibleCells().map(cell => (
                    <td key={cell.id} className="px-3.5 py-2">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr className="h-32 text-center">
                <td colSpan={12}>No Recoard Found!</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
