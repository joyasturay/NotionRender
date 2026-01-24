'use client'

import { NotionRenderer } from 'react-notion-x'
import { Code } from 'react-notion-x/build/third-party/code'
import { Collection } from 'react-notion-x/build/third-party/collection'
import { ExtendedRecordMap } from 'notion-types'
import JumpTo from './JumpTo'
import 'react-notion-x/src/styles.css' 
import 'prismjs/themes/prism-tomorrow.css' 
import 'katex/dist/katex.min.css' 

interface Props {
  recordMap: ExtendedRecordMap
  rootPageId: string
}

export default function NotionPage({ recordMap, rootPageId }: Props) {
  if (!recordMap) {
    return <div>Loading...</div>
  }

  return (
    <div className="notion-container">
      <NotionRenderer
        recordMap={recordMap}
        fullPage={true}
        darkMode={true}
        rootPageId={rootPageId}
        components={{
          Code,
          Collection,
        }}
          />
          <JumpTo recordMap={recordMap} rootPageId={rootPageId} />
    </div>
  )
}