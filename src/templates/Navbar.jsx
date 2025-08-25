import { useContext } from 'react';
import { Contexto } from '../App';
import logus_claro from '../assets/logus-claro.png';
import logus_escuro from '../assets/logus-escuro.png';

export default function Navbar() {
    const { theme, setOptions } = useContext(Contexto);
    
    return <nav>
        <section className="navbar">
            <img onClick={() => setOptions(true)} src={theme === 'escuro' ? logus_escuro : logus_claro} alt="logus" />
            logus
        </section>
    </nav>
}