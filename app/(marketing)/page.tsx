import React from 'react'

export default function HomePage() {
  return (
    <div className="section-container py-20">
      {/* Hero Section */}
      <section className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-neutral-900/70 px-3 py-1.5 shadow-inner shadow-neutral-950/60 backdrop-blur-md mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-aurum-cyan shadow-[0_0_0_4px_rgba(129,216,208,0.3)]" />
          <span className="text-[11px] font-medium uppercase tracking-wider text-neutral-300">
            Formation & Credit Building Platform
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto">
          Build Your Business Empire with{' '}
          <span className="text-gradient">Aurum Advisement</span>
        </h1>

        <p className="mt-6 text-lg text-neutral-300 max-w-2xl mx-auto">
          Complete business formation, marketing automation, and credit building — all in one powerful platform.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button className="gradient-button">
            Get Started
            <span className="ml-2">→</span>
          </button>
          <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-neutral-900/70 px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-neutral-100 transition hover:border-aurum-cyan/70 hover:bg-white/5">
            View Pricing
          </button>
        </div>
      </section>

      {/* Placeholder for more sections */}
      <section className="mt-32 text-center">
        <div className="glass-card p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-4">
            🏗️ Site Under Construction
          </h2>
          <p className="text-neutral-300 mb-6">
            The Aurum Advisement platform is being built with Next.js 15, Supabase, and cutting-edge AI automation.
          </p>
          <div className="text-sm text-neutral-400 space-y-2">
            <p>✅ Project Structure: <span className="text-aurum-cyan">Complete</span></p>
            <p>✅ Configuration Files: <span className="text-aurum-cyan">Complete</span></p>
            <p>🚧 Components: <span className="text-aurum-gold">In Progress</span></p>
            <p>🚧 API Routes: <span className="text-aurum-gold">In Progress</span></p>
            <p>🚧 Database Schema: <span className="text-aurum-gold">In Progress</span></p>
          </div>
        </div>
      </section>
    </div>
  )
}
