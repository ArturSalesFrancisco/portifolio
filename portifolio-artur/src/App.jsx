import Home from "./pages/Home/Home";
import Projetos from "./pages/Projetos/Projetos";
import { Routes, Route, Link } from 'react-router-dom'

function App(){
  return(
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projetos />} />
      </Routes>
    </>
  )
}

export default App;