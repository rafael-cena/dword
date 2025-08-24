import { useContext } from 'react';
import { Contexto } from '../App';
import logus_claro from '../assets/logus-claro.png';
import logus_escuro from '../assets/logus-escuro.png';

export default function Navbar() {
    const { theme } = useContext(Contexto);
    
    return <nav>
        <section className="navbar">
            <img src={theme === 'escuro' ? logus_escuro : logus_claro} alt="logus" />
            game mode
        </section>
    </nav>
}