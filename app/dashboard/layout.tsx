import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { userId } = auth()

  // Protect dashboard routes - require authentication
  if (!userId) {
    redirect('/sign-in')
  }

  return (
    <div className="flex min-h-screen bg-neutral-950">
      {/* Sidebar */}
      <aside className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex flex-col flex-grow border-r border-white/10 bg-neutral-900/50 backdrop-blur-xl pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-aurum-cyan/60 bg-neutral-900/80">
                  <span className="text-xs font-semibold tracking-wider uppercase text-aurum-cyan">AA</span>
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-sm font-semibold tracking-wider uppercase text-neutral-50">Aurum</span>
                  <span className="text-[10px] tracking-wider uppercase text-neutral-400">Dashboard</span>
                </div>
              </div>
            </div>
            <nav className="mt-8 flex-1 px-2 space-y-1">
              <div className="text-xs font-medium uppercase tracking-wider text-neutral-500 px-3 mb-2">
                Navigation Coming Soon
              </div>
            </nav>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top Bar */}
        <header className="w-full">
          <div className="relative z-10 flex-shrink-0 h-16 bg-neutral-900/50 backdrop-blur-xl border-b border-white/10 flex">
            <div className="flex-1 flex justify-between px-4 sm:px-6 lg:px-8">
              <div className="flex-1 flex items-center">
                <h1 className="text-lg font-semibold text-white">Dashboard</h1>
              </div>
              <div className="ml-4 flex items-center space-x-4">
                <span className="text-sm text-neutral-400">User Menu Coming Soon</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          {children}
        </main>
      </div>

      {/* MY GPT Widget (Floating) - Coming Soon */}
      {/* <MyGPTWidget /> */}
    </div>
  )
}
