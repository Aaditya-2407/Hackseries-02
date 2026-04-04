import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white">
      <div className="flex gap-8 mb-8">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="h-24 p-4 hover:drop-shadow-[0_0_2em_#646cffaa] transition-all" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="h-24 p-4 hover:drop-shadow-[0_0_2em_#61dafbaa] transition-all animate-spin [animation-duration:20s]" alt="React logo" />
        </a>
      </div>
      <h1 className="text-5xl font-bold mb-4">Vite + React</h1>
      <div className="p-8">
        <button
          className="px-6 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white font-mono text-lg hover:border-violet-500 transition-colors cursor-pointer"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p className="mt-4 text-gray-400">
          Edit <code className="bg-gray-800 px-2 py-1 rounded text-sm">src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-gray-500">Click on the Vite and React logos to learn more</p>
    </div>
  )
}

export default App
