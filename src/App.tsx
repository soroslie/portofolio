import './App.css'
import { Routes, Route } from 'react-router-dom'
import ResumePage from './pages/Resume/Resume'
import Layout from './components/layout/Layout'
import HomePage from './pages/Home/Home'

const App: React.FC = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path='/soros-lie' element={<Layout />}>
          <Route path='/soros-lie' element={<HomePage />} />
        </Route>
        <Route path='/soros-lie/resume' element={<ResumePage />}></Route>
      </Routes>
    </div>
  )
}

export default App
