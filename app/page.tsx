'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { parsePageId } from 'notion-utils'

export default function Home() {
  const [url, setUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    const cleanId = parsePageId(url)

    if (!cleanId) {
      alert('Invalid Notion URL')
      setIsLoading(false)
      return
    }

    router.push(`/${cleanId}`)
  }

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-gray-800 overflow-hidden font-sans">
      
      {/* 1. Background Grid Effect */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }} 
      />
      
      {/* 2. Radial Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800/20 via-black to-black pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        
        {/* Badge */}
        <div className="mb-6 px-3 py-1 rounded-full border border-gray-700 bg-gray-900/50 text-xs font-mono text-gray-400 backdrop-blur-sm">
          OPEN SOURCE • v1.0
        </div>

        {/* Hero Text */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-center mb-6 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
          Notion to Website.
          <br />
          <span className="text-4xl md:text-6xl text-gray-600">Instantly.</span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl text-center max-w-2xl mb-10">
          Turn any Notion page into a blazing fast, static website. 
          <br className="hidden md:block"/>
          Includes automatic sidebar navigation for courses and docs.
        </p>
        
        {/* Search Box */}
        <form onSubmit={handleSubmit} className="w-full max-w-xl group relative">
          <div className={`absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-lg opacity-30 blur transition duration-1000 group-hover:duration-200 ${isLoading ? 'opacity-100' : 'group-hover:opacity-75'}`}></div>
          <div className="relative flex items-center bg-black rounded-lg border border-gray-800 p-2">
            <input 
              type="text" 
              placeholder="Paste your public Notion link..." 
              className="flex-1 bg-transparent p-3 text-white placeholder-gray-500 focus:outline-none"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              disabled={isLoading}
            />
            <button 
              type="submit"
              disabled={isLoading}
              className="px-6 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200 transition-colors disabled:opacity-50"
            >
              {isLoading ? 'Building...' : 'Render →'}
            </button>
          </div>
        </form>

        {/* Feature Grid (Great for Screenshot Density) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-center max-w-4xl">
          <FeatureCard 
            title="Blazing Fast" 
            desc="Built on Next.js 15 App Router for static edge performance." 
          />
          <FeatureCard 
            title="Course Mode" 
            desc="Auto-detects sub-pages to generate a sidebar navigation." 
          />
          <FeatureCard 
            title="Open Source" 
            desc="Clone, deploy, and host on Vercel for free. No subscriptions." 
          />
        </div>
      </div>
    </div>
  )
}

// Simple Helper Component for the cards
function FeatureCard({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="p-6 rounded-xl border border-gray-800 bg-gray-900/30 backdrop-blur-sm hover:border-gray-600 transition-colors">
      <h3 className="font-bold text-lg mb-2 text-white">{title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
    </div>
  )
}