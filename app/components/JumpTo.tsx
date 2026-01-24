'use client'

import { useState } from 'react'
import { ExtendedRecordMap, PageBlock } from 'notion-types'
import { useRouter } from 'next/navigation' 

interface Props {
  recordMap: ExtendedRecordMap
  rootPageId: string
}

export default function JumpTo({ recordMap, rootPageId }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  
  const pageBlock = recordMap.block[rootPageId]?.value as PageBlock

  if (!pageBlock) return null

  const contentIds = pageBlock.content || []
  const subPages = contentIds
    .map((id) => recordMap.block[id]?.value)
    .filter((block) => block?.type === 'page') as PageBlock[]

  
  if (subPages.length === 0) return null

  

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 bg-black border border-gray-800 rounded-lg shadow-xl p-4 w-64 max-h-[60vh] overflow-y-auto">
          <h3 className="text-gray-400 text-xs uppercase font-bold mb-3">Course Modules</h3>
          <div className="flex flex-col gap-2">
            {subPages.map((page) => (
              <button
                key={page.id}
                onClick={() => router.push(`/${page.id}`)} 
                className="text-left text-sm text-gray-300 hover:text-white hover:bg-gray-800 p-2 rounded transition-all truncate"
              >
                {page.properties?.title?.[0]?.[0] || 'Untitled Page'}
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white text-black px-6 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform flex items-center gap-2"
      >
        {isOpen ? 'Close' : 'Menu ☰'}
      </button>
    </div>
  )
}