import { Sidebar } from '@/components/sidebar'

export default function Layout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 bg-[#f6f6f6] p-8">{children}</main>
    </div>
  )
}
