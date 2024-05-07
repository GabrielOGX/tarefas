import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ComponenteA from './components/MeusComponentes/ComponenteA'
import LoginStatus from './components/MeusComponentes/LoginStatus'
import Cabecalho from './components/MeusComponentes/Cabecalho'
import Rodape from './components/MeusComponentes/Rodape'
import MenuSuperior from './components/MeusComponentes/MenuSuperior'
import'react-bootstrap'
import { BrowserRouter as Router, Route, Routes, Navigate }
from 'react-router-dom'

function App() {
  // código javascript
  const [count, setCount] = useState(0)
 
 // retorno da função que é a visualização do componente
  return (
        <Router> 
          <Routes>
              <Route path="/" element={<MenuSuperior/>}/>
          </Routes>
        </Router>
    
  )
}

export default App
