import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

export const InputFilter = () => {
  return (
    <div className="space-x-2">
      <div className="inline-flex items-center justify-center gap-4 rounded-md border border-gray-800/80 bg-white px-1.5 py-1">
        <MagnifyingGlassIcon className="size-6" />

        <input
          type="text"
          placeholder="Busca por un curso"
          className="bg-transparent outline-none"
        />
      </div>
    </div>
  )
}
