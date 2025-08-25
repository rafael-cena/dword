import { useContext } from "react";
import { Link } from "react-router";
import { Contexto } from "../App";

import logus_claro from '../assets/logus-claro.png';
import logus_escuro from '../assets/logus-escuro.png';

export default function Footer() {
    const { theme, options } = useContext(Contexto);

    return <footer className="footer" style={options ? { pointerEvents: 'none', filter: 'blur(4px)' } : { pointerEvents: 'all' }}>
        <div className="footer-img">
            <img src={theme === 'escuro' ? logus_escuro : logus_claro} alt="logus" />
        </div>
        <div className="footer-link">
            <Link to={'/'}>
                logus.fun
            </Link>
        </div>
    </footer>
}