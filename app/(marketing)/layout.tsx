import React from 'react'
// import { Navigation } from '@/components/marketing/navigation'
// import { Footer } from '@/components/marketing/footer'
// import { ChatbotWidget } from '@/components/marketing/chatbot-widget'

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative min-h-screen bg-neutral-950 text-neutral-50">
      {/* Background Accents */}
      <div className="pointer-events-none fixed inset-0 opacity-60">
        <div className="absolute -top-40 -right-32 h-80 w-80 rounded-full bg-aurum-cyan/10 blur-3xl" />
        <div className="absolute top-40 -left-10 h-96 w-96 rounded-full bg-aurum-cyan/10 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-64 w-64 rounded-full bg-neutral-700/40 blur-2xl" />
      </div>

      {/* Navigation */}
      {/* <Navigation /> */}
      <div className="sticky top-0 z-40">
        <div className="section-container pt-4 pb-3">
          <nav className="glass-nav px-4 py-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-aurum-cyan/60 bg-neutral-900/80">
                  <span className="text-xs font-semibold tracking-wider uppercase text-aurum-cyan">AA</span>
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-sm font-semibold tracking-wider uppercase text-neutral-50">Aurum Advisement</span>
                  <span className="text-[10px] tracking-wider uppercase text-neutral-400">Formation & Credit</span>
                </div>
              </div>
              <div className="text-xs text-neutral-400">Navigation Coming Soon</div>
            </div>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="relative">{children}</main>

      {/* Footer */}
      {/* <Footer /> */}
      <footer className="border-t border-white/10 bg-neutral-950/95 py-8">
        <div className="section-container">
          <div className="text-center text-xs text-neutral-500">
            © 2025 Aurum Advisement, Inc. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Chatbot Widget */}
      {/* <ChatbotWidget /> */}
    </div>
  )
}
