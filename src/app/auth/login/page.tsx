'use client'

import { useRouter } from 'next/navigation'

export default function Login() {
  const navigation = useRouter()

  const handleOnSubmit = () => {
    navigation.push('/dashboard')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-28">
      <h1 className="mx-auto max-w-[20ch] text-balance text-center text-5xl font-bold tracking-tighter md:text-7xl md:leading-[1.16]">
        Inicia Sesion
      </h1>

      <div className="mx-auto mt-6 w-full max-w-md rounded-md border px-5 py-4">
        <form className="space-y-4" onSubmit={handleOnSubmit}>
          <div className="w-full">
            <label className="block">Nombre de usuario</label>
            <input
              className="w-full rounded-md border border-gray-500/20 px-3 py-2 outline-none"
              type="text"
            />
          </div>
          <div className="w-full">
            <label className="block">Contraseña</label>
            <input
              type="password"
              className="w-full rounded-md border border-gray-500/20 px-3 py-2 outline-none"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full rounded-md bg-black px-3 py-2 text-center font-semibold text-white hover:bg-gray-900"
            >
              Iniciar Sesión
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}
