import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img src="" className="logo" alt="logo" />
        <a href="" target="_blank">
          <img src="" className="logo" alt="logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code>
        </p>
      </div>
    </>
  )
}

export default App
