import { BrowserRouter } from 'react-router-dom'
import './App.css'
import HeaderAndBackground from './components/HeaderAndBackground/HeaderAndBackground'
import AppRoutes from './pages/routes'

function App() {


  return (
    <div className='App'>
      <div className='App-bg'>

        <AppRoutes />
      </div>
      {/* <HeaderAndBackground /> */}





    </div>
  )
}

export default App
