import { useContext, useEffect, useState } from 'react';
import { Contexto } from '../App';
import dword_claro from '../assets/dword-claro.png';
import dword_escuro from '../assets/dword-escuro.png';
import Selector from '../components/Selector/Selector';

export default function Navbar() {
    const { theme, setOptions, opt, setOpt } = useContext(Contexto);
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
            <img onClick={() => setOptions(true)} src={theme === 'escuro' ? dword_escuro : dword_claro} alt="dword" />
            <Selector
                opt={opt}
                setOpt={setOpt}
                select_options={[
                    {
                        id: 0,
                        name: 'diário'
                    },
                    {
                        id: 1,
                        name: 'livre'
                    }
                ]}
            />
        </section>
    </nav>
}