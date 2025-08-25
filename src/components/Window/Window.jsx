import { useContext, useState } from 'react';
import { Contexto } from '../../App';
import './index.css';

export default function Window({ children }) {
    const { setOptions } = useContext(Contexto);
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const [move, setMove] = useState(false);
    const [windowStyle, setWindowStyle] = useState({
        borderRadius: '20px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    });

    const handleMouseDown = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setOffset({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
        setMove(true);
    };

    const handleMouseMove = (e) => {
        if (move) {
            let { clientX, clientY } = e;

            if (clientX - offset.x < 0)
                clientX = offset.x;
            if (clientY - offset.y < 0)
                clientY = offset.y;

            setWindowStyle({
                borderRadius: '20px',
                top: `${clientY - offset.y}px`,
                left: `${clientX - offset.x}px`
            })
        }
    }

    const handleTouchStart = (e) => {
        const touch = e.touches[0];
        const rect = document.getElementById('window').getBoundingClientRect();
        setOffset({
            x: touch.clientX - rect.left,
            y: touch.clientY - rect.top
        });
        setMove(true);
    }

    const handleTouchMove = (e) => {
        if (move) {
            let { clientX, clientY } = e.touches[0];

            if (clientX - offset.x < 0)
                clientX = offset.x;
            if (clientY - offset.y < 0)
                clientY = offset.y;

            setWindowStyle({
                borderRadius: '20px',
                top: `${clientY - offset.y}px`,
                left: `${clientX - offset.x}px`
            })
        }
    }

    window.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
            setOptions(false);
        }
    })

    return (
        <section id='window' className='window' style={windowStyle}>
            <section className="w-nav"
                style={!move ? {} : { cursor: 'grabbing' }}
                onMouseUp={() => setMove(false)}
                onMouseLeave={() => setMove(false)}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onTouchEnd={() => setMove(false)}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
            >
                <span className='btn-close' onClick={() => setOptions(false)}>
                    X
                </span>
            </section>
            <article className='w-container'>
                {children}
            </article>
        </section>
    );
}