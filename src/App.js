import { BrowserRouter, Route, Routes } from "react-router";
import DWord from "./pages/DWord";
import { createContext, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

export const Contexto = createContext();

function App() {
  const [theme, setTheme] = useState('escuro');
  const [options, setOptions] = useState(false);
  const [opt, setOpt] = useState(0);

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
    <Contexto.Provider value={{ theme, setTheme, options, setOptions, opt, setOpt }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DWord />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </Contexto.Provider>
  );
}

export default App;
