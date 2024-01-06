import React, { useState } from 'react'
import { useDebounceFn, useMount } from 'ahooks'

import { getLanguageIdentificationModel } from '../../src'

import type { IdentifyLangVector } from '../../src'

export default function Examples() {
  const [input, setInput] = useState('Hello, world.')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<IdentifyLangVector[] | null>(null)

  const handleDetect = useDebounceFn(async () => {
    setLoading(true)
    const languageIdentificationModel = await getLanguageIdentificationModel()
    await languageIdentificationModel.load()
    const result = await languageIdentificationModel.identifyVerbose(input)
    setResult(result)
    setLoading(false)
  })

  useMount(() => {
    handleDetect.run()
  })

  return (
    <div className='flex flex-col p-2 gap-2'>
      <textarea
        className='placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md px-2 py-1 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
        value={input}
        onChange={(event) => {
          setInput(event.target.value)
          handleDetect.run()
        }}
        rows={8}
      />
      <p className='px-2 py-2 font-semibold text-sm'>
        Lang: {loading ? 'loading...' : !result ? 'noop' : result[0].lang}
      </p>
      {result && (
        <ul className='px-2 font-mono'>
          {result.map((item, index) => {
            return (
              <li key={item.lang}>
                <span>{index}.</span> {item.lang} - {item.possibility}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
