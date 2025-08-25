import { useContext } from "react";
import { Link } from "react-router";
import { Contexto } from "../App";

import dword_claro from '../assets/dword-claro.png';
import dword_escuro from '../assets/dword-escuro.png';

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
                <img src={theme === 'escuro' ? dword_escuro : dword_claro} alt="dword" />
            </div>
            <div className="footer-link">
                <Link to={'/'}>
                    dWord.fun
                </Link>
            </div>
        </div>
    </footer>
}