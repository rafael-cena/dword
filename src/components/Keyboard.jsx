import toast from "react-hot-toast";

export default function Keyboard({ position, setPosition, game, setGame, keys, setKeys, response, words, setWin }) {
    // funcao para alteracoes na palavra e gerenciador de clique de posicao

    const handleSubmit = () => {
        let flag = true;

        // verifica 5 digitos
        game[position.row].forEach(item => {
            if (item.letter === '')
                flag = false;
        });

        if (flag) {
            // se 5 digitos, verifica se existe a palavra
            const w = game[position.row].map(obj => obj.letter).join("");
            const pos = words.findIndex(word => word === w);
            if (pos < 0 || pos > words.length) {
                flag = false;
                toast.error('essa palavra não está na Bíblia');
            }
            else {
                // para controlar classes do teclado virtual
                const newKeys = [...keys];
                // para controlar o estilo dos inputs enviados
                const newGame = [...game];
                // para controlar a correção de um submit
                const newResponse = response.map(obj => ({ ...obj }));

                // se existe, verifica se tem letra certa
                newResponse.forEach((item, index) => {
                    newGame[position.row].forEach((it, i) => {
                        if (index === i)
                            if (item.letter === it.letter) {
                                newKeys.forEach(vet => {
                                    vet.forEach(tecla => {
                                        if (tecla.value === it.letter) {
                                            tecla.status = 'certo';
                                            item.status = 'certo';
                                        }
                                    })
                                })
                                it.status = 'certo';
                            }
                            else
                                flag = false;
                    })
                })

                if (!flag) {
                    // se nao ganhou, verifica letras no 'quase'
                    newResponse.forEach(item => {
                        if (item.status === '')
                            newGame[position.row].forEach(it => {
                                if (item.letter === it.letter && it.status === '' && item.status === '')
                                    newKeys.forEach(vet => {
                                        vet.forEach(tecla => {
                                            if (tecla.value === it.letter) {
                                                it.status = 'quase';
                                                item.status = 'quase';
                                                if (tecla.status === '') {
                                                    tecla.status = 'quase';
                                                }
                                            }
                                        })
                                    })
                            })
                    })

                    // e as erradas
                    newGame[position.row].forEach(item => {
                        if (item.status === '') {
                            newKeys.forEach(vet => {
                                vet.forEach(tecla => {
                                    if (tecla.value === item.letter && tecla.status === '')
                                        tecla.status = 'errado';
                                })
                            })
                            item.status = 'errado';
                        }
                    })

                    setPosition(prev => ({
                        column: 0,
                        row: prev.row + 1
                    }));
                    setKeys(newKeys);
                }
                else {
                    setWin(true);
                    setPosition(prev => ({
                        column: 6,
                        row: prev.row
                    }))
                    toast.success('parabéns, a palavra era ' + w);
                    window.scrollTo(0, 200);
                }

                setGame(newGame);
            }
        }
        else {
            toast.error('digite as 5 letras');
        }
    }

    const handleKeyDown = (e) => {
        if (e === 'Tab' || e === 'ArrowRight' || e === 'ArrowLeft' || (e === 'Backspace' && game[position.row][position.column].letter === '')) {
            if ((e === 'Tab' && !e.shiftKey) || e === 'ArrowRight') {
                // Tab normal || ArrowRight
                if (position.column < 4) {
                    setPosition(prev => ({
                        column: prev.column + 1,
                        row: prev.row
                    }))
                }
            }
            if ((e === 'Tab' && e.shiftKey) || e === 'ArrowLeft' || (e === 'Backspace' && game[position.row][position.column].letter === '')) {
                // Shift+Tab || ArrowLeft || Backspace vazio
                if (position.column > 0) {
                    setPosition(prev => ({
                        column: prev.column - 1,
                        row: prev.row
                    }))
                }
            }
        }
        else if (e === 'Backspace' && game[position.row][position.column].letter !== '') {
            const newGame = [...game];
            newGame[position.row][position.column].letter = '';
            setGame(newGame);
        }
        else if (/^[a-zA-Z]$/.test(e)) {
            const newGame = [...game];
            newGame[position.row][position.column].letter = e.toUpperCase();
            setGame(newGame);
            setPosition(prev => (
                prev.column < 4 ?
                    {
                        column: prev.column + 1,
                        row: prev.row
                    }
                    :
                    prev
            ))
        }
        else if (e === 'Enter') {
            handleSubmit();
        }
    }

    return (
        <section className="keyboard">
            {
                keys.map(itens => {
                    return <div style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem', alignItems: 'center', justifyContent: 'center' }}>
                        {
                            itens.map(item => {
                                if (item.value === "↲")
                                    return <span
                                        className={`keyboard-key ${item.status}`}
                                        id={item.value}
                                        name={item.value}
                                        onClick={handleSubmit}
                                        key={item.id}
                                    >
                                        {item.value}
                                    </span>
                                else if (item.value === "←")
                                    return <span
                                        className={`keyboard-key special ${item.status}`}
                                        id={item.value}
                                        name={item.value}
                                        onClick={() => {
                                            handleKeyDown('Backspace')
                                        }}
                                        key={item.id}
                                    >
                                        {item.value}
                                    </span>
                                else
                                    return <span
                                        className={`keyboard-key ${item.status}`}
                                        id={item.value}
                                        name={item.value}
                                        onClick={() => {
                                            handleKeyDown(item.value)
                                        }}
                                        key={item.id}
                                    >
                                        {item.value}
                                    </span>
                            })
                        }
                        <br />
                    </div>
                })
            }
        </section>
    )
}