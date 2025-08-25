import { useContext, useEffect, useState } from 'react';
import { Contexto } from '../App';
import logus_claro from '../assets/logus-claro.png';
import logus_escuro from '../assets/logus-escuro.png';

export default function Navbar() {
    const { theme, setOptions } = useContext(Contexto);
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const controlNavbar = () => {
            if (window.scrollY > lastScrollY) {
                setShow(false);
            } else {
                setShow(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', controlNavbar);
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);

    return <nav>
        <section className={`navbar ${show ? 'show' : 'hide'}`}>
            <img onClick={() => setOptions(true)} src={theme === 'escuro' ? logus_escuro : logus_claro} alt="logus" />
            logus
        </section>
    </nav>
}