import { useContext } from "react";
import { Link } from "react-router";
import { Contexto } from "../App";

import logus_claro from '../assets/logus-claro.png';
import logus_escuro from '../assets/logus-escuro.png';

export default function Footer() {
    const { theme } = useContext(Contexto);

    return <footer className="footer">
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