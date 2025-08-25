import { useContext } from "react";
import { Link } from "react-router";
import { Contexto } from "../App";

import logus_claro from '../assets/logus-claro.png';
import logus_escuro from '../assets/logus-escuro.png';

export default function Footer() {
    const { theme, setTheme, options } = useContext(Contexto);

    return <footer className="footer" style={options ? { pointerEvents: 'none', filter: 'blur(4px)' } : { pointerEvents: 'all' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h4 className="footer-subtitle">
                Selecione o tema
            </h4>
            <div className="footer-theme">
                <button
                    onClick={() => setTheme('claro')}
                    className={`btn-theme${theme === 'claro' ? ' active' : ''}`}
                >
                    claro
                </button>
                <button
                    onClick={() => setTheme('escuro')}
                    className={`btn-theme${theme === 'escuro' ? ' active' : ''}`}
                >
                    escuro
                </button>
            </div>
        </div>

        <div className="footer-g2">
            <div className="footer-img">
                <img src={theme === 'escuro' ? logus_escuro : logus_claro} alt="logus" />
            </div>
            <div className="footer-link">
                <Link to={'/'}>
                    logus.fun
                </Link>
            </div>
        </div>
    </footer>
}