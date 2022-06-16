import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import PaginaContacto from "./pages/PaginaContacto";

function App() {
  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contacto" element={<PaginaContacto />} />
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
