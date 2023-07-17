// import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Welcome from './views/Welcome';
import Home from './views/Home';
import Form from './views/Form';
import Detail from './views/Detail';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Welcome/>}/>
        <Route exact path='/home' element={<Home/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
      </Routes>
    </div>
  )
}

export default App
