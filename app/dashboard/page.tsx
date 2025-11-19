import React from 'react'

export default function DashboardPage() {
  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-white">Welcome to Your Dashboard</h1>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Stats Grid */}
          <div className="glass-card p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-neutral-400">Active Entities</h3>
              <span className="text-2xl font-bold text-aurum-cyan">0</span>
            </div>
            <p className="mt-2 text-xs text-neutral-500">No entities yet. Create your first entity to get started.</p>
          </div>

          <div className="glass-card p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-neutral-400">Documents</h3>
              <span className="text-2xl font-bold text-aurum-cyan">0</span>
            </div>
            <p className="mt-2 text-xs text-neutral-500">Your document vault is ready for your first upload.</p>
          </div>

          <div className="glass-card p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-neutral-400">Compliance</h3>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/40">
                Up to Date
              </span>
            </div>
            <p className="mt-2 text-xs text-neutral-500">All compliance items are current.</p>
          </div>
        </div>

        {/* Under Construction Notice */}
        <div className="mt-8 glass-card p-6">
          <h2 className="text-lg font-semibold text-white mb-3">🚧 Dashboard Under Construction</h2>
          <p className="text-sm text-neutral-300 mb-4">
            We're building your comprehensive dashboard with all the features from the build specs:
          </p>
          <ul className="space-y-2 text-sm text-neutral-400">
            <li>• Multi-entity management</li>
            <li>• Document vault with AI generation</li>
            <li>• Virtual mail center (scan, bundle, forward)</li>
            <li>• Market Me dashboard (90-day automation)</li>
            <li>• Credit Builder (business & personal)</li>
            <li>• MY GPT floating assistant</li>
            <li>• Compliance tracking calendar</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
