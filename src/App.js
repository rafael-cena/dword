import { BrowserRouter, Route, Routes } from "react-router";
import Logus from "./pages/Logus";
import { createContext, useState } from "react";

export const Contexto = createContext();

function App() {
  const [theme, setTheme] = useState('escuro');
  
  return (
    <Contexto.Provider value={{ theme, setTheme }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Logus />} />
        </Routes>
      </BrowserRouter>
    </Contexto.Provider>
  );
}

export default App;
