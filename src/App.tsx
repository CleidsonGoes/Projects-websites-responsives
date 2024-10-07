import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import SiteOne from './components/Site01'
import PageInitial from './components/PageInitial'

function App() {
  return (
    <Routes>
      <Route path='/site01' element={<SiteOne/>} />
      <Route path='/' element={<PageInitial/>} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
}

export default App
