import Home from "./pages/Home/Home";
import Projetos from "./pages/Projetos/Projetos";
import DetalhesProjeto from "./pages/DetalhesProjeto/DetalhesProjeto";
import { Routes, Route } from 'react-router-dom'

function App(){
  return(
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/projetos/:id" element={<DetalhesProjeto />} />
      </Routes>
    </>
  )
}

export default App;