import './App.css'
import SiteOne from './components/Site01'

function App() {
  return (
    <>
      <h2>Selecione um site</h2>
      <div className="card">
        <button>Site 01
        </button>
        <button>Site 02
        </button>
        <button>Site 03
        </button>
      </div>
      <SiteOne/>
    </>
  )
}

export default App
