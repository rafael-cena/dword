import { useContext } from 'react';

import { Contexto } from '../App';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Page({ children }) {
    const { theme } = useContext(Contexto);

    return <main className="page" id={theme}>
        <Navbar />
        {children}
        <Footer />
    </main>
}