'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { parsePageId } from 'notion-utils'

export default function Home() {
  const [url, setUrl] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const pageId = parsePageId(url)
    if (!url) {
      alert("Invalid url")
      return
    }
    router.push(`/${pageId}`)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
      <h1 className="text-4xl font-bold mb-8">Notion Renderer</h1>
      
      <form onSubmit={handleSubmit} className="w-full max-w-lg flex gap-2">
        <input 
          type="text" 
          placeholder="Paste your Notion link here..." 
          className="flex-1 p-4 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:border-blue-500 text-white"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button 
          type="submit"
          className="bg-blue-600 px-6 py-4 rounded font-bold hover:bg-blue-700 transition"
        >
          Render
        </button>
      </form>
      
      <p className="mt-4 text-gray-500 text-sm">
        Example: https://notion.so/your-page-id...
      </p>
    </div>
  )
}