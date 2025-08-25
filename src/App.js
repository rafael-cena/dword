import { BrowserRouter, Route, Routes } from "react-router";
import Logus from "./pages/Logus";
import { createContext, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

export const Contexto = createContext();

function App() {
  const [theme, setTheme] = useState('escuro');
  const [options, setOptions] = useState(false);

  useEffect(() => {
    if (options) {
      // Bloqueia scroll
      document.body.style.overflow = "hidden";
    } else {
      // Libera scroll
      document.body.style.overflow = "auto";
    }

    // Cleanup (garante que o scroll volta ao normal ao desmontar o componente)
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [options]);

  return (
    <Contexto.Provider value={{ theme, setTheme, options, setOptions }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Logus />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </Contexto.Provider>
  );
}

export default App;
