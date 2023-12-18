import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/Home/Home'

const App: React.FC = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
