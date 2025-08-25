import { useContext, useEffect, useState } from "react";
import Page from "../templates/Page";

import all_words from '../data/words.json';
import toast from "react-hot-toast";
import Keyboard from "../components/Keyboard";
import Window from "../components/Window/Window";
import { Contexto } from "../App";
import RowInput from "../components/rowInputs/RowInput";

export default function DWord() {
    const { options } = useContext(Contexto);
    const [seconds, setSeconds] = useState(0);
    const [response, setResponse] = useState([]);
    const [words, setWords] = useState([]);
    const [position, setPosition] = useState({
        column: 0,
        row: 0
    });
    const [game, setGame] = useState([
        [
            {
                letter: '',
                status: '',
                id: 'l1-w1'
            },
            {
                letter: '',
                status: '',
                id: 'l1-w2'
            },
            {
                letter: '',
                status: '',
                id: 'l1-w3'
            },
            {
                letter: '',
                status: '',
                id: 'l1-w4'
            },
            {
                letter: '',
                status: '',
                id: 'l1-w5'
            }
        ],
        [
            {
                letter: '',
                status: '',
                id: 'l2-w1'
            },
            {
                letter: '',
                status: '',
                id: 'l2-w2'
            },
            {
                letter: '',
                status: '',
                id: 'l2-w3'
            },
            {
                letter: '',
                status: '',
                id: 'l2-w4'
            },
            {
                letter: '',
                status: '',
                id: 'l2-w5'
            }
        ],
        [
            {
                letter: '',
                status: '',
                id: 'l3-w1'
            },
            {
                letter: '',
                status: '',
                id: 'l3-w2'
            },
            {
                letter: '',
                status: '',
                id: 'l3-w3'
            },
            {
                letter: '',
                status: '',
                id: 'l3-w4'
            },
            {
                letter: '',
                status: '',
                id: 'l3-w5'
            }
        ],
        [
            {
                letter: '',
                status: '',
                id: 'l4-w1'
            },
            {
                letter: '',
                status: '',
                id: 'l4-w2'
            },
            {
                letter: '',
                status: '',
                id: 'l4-w3'
            },
            {
                letter: '',
                status: '',
                id: 'l4-w4'
            },
            {
                letter: '',
                status: '',
                id: 'l4-w5'
            }
        ],
        [
            {
                letter: '',
                status: '',
                id: 'l5-w1'
            },
            {
                letter: '',
                status: '',
                id: 'l5-w2'
            },
            {
                letter: '',
                status: '',
                id: 'l5-w3'
            },
            {
                letter: '',
                status: '',
                id: 'l5-w4'
            },
            {
                letter: '',
                status: '',
                id: 'l5-w5'
            }
        ],
        [
            {
                letter: '',
                status: '',
                id: 'l6-w1'
            },
            {
                letter: '',
                status: '',
                id: 'l6-w2'
            },
            {
                letter: '',
                status: '',
                id: 'l6-w3'
            },
            {
                letter: '',
                status: '',
                id: 'l6-w4'
            },
            {
                letter: '',
                status: '',
                id: 'l6-w5'
            }
        ],
        [
            {
                letter: '',
                status: '',
                id: 'l7-w1'
            },
            {
                letter: '',
                status: '',
                id: 'l7-w2'
            },
            {
                letter: '',
                status: '',
                id: 'l7-w3'
            },
            {
                letter: '',
                status: '',
                id: 'l7-w4'
            },
            {
                letter: '',
                status: '',
                id: 'l7-w5'
            }
        ]
    ]);
    const [win, setWin] = useState(false);

    const [keys, setKeys] = useState([
        [
            {
                id: 1,
                value: "Q",
                status: ''
            },
            {
                id: 2,
                value: "W",
                status: ''
            },
            {
                id: 3,
                value: "E",
                status: ''
            },
            {
                id: 4,
                value: "R",
                status: ''
            },
            {
                id: 5,
                value: "T",
                status: ''
            },
            {
                id: 6,
                value: "Y",
                status: ''
            },
            {
                id: 7,
                value: "U",
                status: ''
            },
            {
                id: 8,
                value: "I",
                status: ''
            },
            {
                id: 9,
                value: "O",
                status: ''
            },
            {
                id: 10,
                value: "P",
                status: ''
            },
            {
                id: 11,
                value: "←",
                status: ''
            }
        ],
        [
            {
                id: 12,
                value: "A",
                status: ''
            },
            {
                id: 13,
                value: "S",
                status: ''
            },
            {
                id: 14,
                value: "D",
                status: ''
            },
            {
                id: 15,
                value: "F",
                status: ''
            },
            {
                id: 16,
                value: "G",
                status: ''
            },
            {
                id: 17,
                value: "H",
                status: ''
            },
            {
                id: 18,
                value: "J",
                status: ''
            },
            {
                id: 19,
                value: "K",
                status: ''
            },
            {
                id: 20,
                value: "L",
                status: ''
            },
            {
                id: 21,
                value: "↲",
                status: ''
            }
        ],
        [
            {
                id: 22,
                value: "Z",
                status: ''
            },
            {
                id: 23,
                value: "X",
                status: ''
            },
            {
                id: 24,
                value: "C",
                status: ''
            },
            {
                id: 25,
                value: "V",
                status: ''
            },
            {
                id: 26,
                value: "B",
                status: ''
            },
            {
                id: 27,
                value: "N",
                status: ''
            },
            {
                id: 28,
                value: "M",
                status: ''
            }
        ]
    ]);

    // pegar as palavras
    useEffect(() => {
        setWords(all_words);
    }, []);

    // definir a resposta
    useEffect(() => {
        if (Array.isArray(words) && words.length > 0) {
            const pos = Math.floor(Math.random() * words.length);
            const str = String(words[pos] ?? ""); // força ser string
            const chars = str.split("");
            const inArrayObj = chars.map(char => {
                return {
                    letter: char,
                    status: ''
                }
            })
            setResponse(inArrayObj);
        }

    }, [words]);

    // funcao para alteracoes na palavra e gerenciador de clique de posicao
    useEffect(() => {
        // validar resposta do usuario
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
                    toast.error('essa palavra não é aceita');
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
            if (!options)
                if (e.key === 'Tab' || e.key === 'ArrowRight' || e.key === 'ArrowLeft' || (e.key === 'Backspace' && game[position.row][position.column].letter === '')) {
                    e.preventDefault();

                    if ((e.key === 'Tab' && !e.shiftKey) || e.key === 'ArrowRight') {
                        // Tab normal || ArrowRight
                        if (position.column < 4) {
                            setPosition(prev => ({
                                column: prev.column + 1,
                                row: prev.row
                            }))
                        }
                    }
                    if ((e.key === 'Tab' && e.shiftKey) || e.key === 'ArrowLeft' || (e.key === 'Backspace' && game[position.row][position.column].letter === '')) {
                        // Shift+Tab || ArrowLeft || Backspace vazio
                        if (position.column > 0) {
                            setPosition(prev => ({
                                column: prev.column - 1,
                                row: prev.row
                            }))
                        }
                    }
                }
                else if (e.key === 'Backspace' && game[position.row][position.column].letter !== '') {
                    const newGame = [...game];
                    newGame[position.row][position.column].letter = '';
                    setGame(newGame);
                }
                else if (/^[a-zA-Z]$/.test(e.key)) {
                    const newGame = [...game];
                    newGame[position.row][position.column].letter = e.key.toUpperCase();
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
                else if (e.key === 'Enter') {
                    handleSubmit();
                }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        }
    }, [position, game, keys, response, words, options]);

    // resetar o jogo
    const handleReset = () => {
        setWin(false);
        const w = [...words];
        setWords(w);
        setGame([
            [
                {
                    letter: '',
                    status: '',
                    id: 'l1-w1'
                },
                {
                    letter: '',
                    status: '',
                    id: 'l1-w2'
                },
                {
                    letter: '',
                    status: '',
                    id: 'l1-w3'
                },
                {
                    letter: '',
                    status: '',
                    id: 'l1-w4'
                },
                {
                    letter: '',
                    status: '',
                    id: 'l1-w5'
                }
            ],
            [
                {
                    letter: '',
                    status: '',
                    id: 'l2-w1'
                },
                {
                    letter: '',
                    status: '',
                    id: 'l2-w2'
                },
                {
                    letter: '',
                    status: '',
                    id: 'l2-w3'
                },
                {
                    letter: '',
                    status: '',
                    id: 'l2-w4'
                },
                {
                    letter: '',
                    status: '',
                    id: 'l2-w5'
                }
            ],
            [
                {
                    letter: '',
                    status: '',
                    id: 'l3-w1'
                },
                {
                    letter: '',
                    status: '',
                    id: 'l3-w2'
                },
                {
                    letter: '',
                    status: '',
                    id: 'l3-w3'
                },
                {
                    letter: '',
                    status: '',
                    id: 'l3-w4'
                },
                {
                    letter: '',
                    status: '',
                    id: 'l3-w5'
                }
            ],
            [
                {
                    letter: '',
                    status: '',
                    id: 'l4-w1'
                },
                {
                    letter: '',
                    status: '',
                    id: 'l4-w2'
                },
                {
                    letter: '',
                    status: '',
                    id: 'l4-w3'
                },
                {
                    letter: '',
                    status: '',
                    id: 'l4-w4'
                },
                {
                    letter: '',
                    status: '',
                    id: 'l4-w5'
                }
            ],
            [
                {
                    letter: '',
                    status: '',
                    id: 'l5-w1'
                },
                {
                    letter: '',
                    status: '',
                    id: 'l5-w2'
                },
                {
                    letter: '',
                    status: '',
                    id: 'l5-w3'
                },
                {
                    letter: '',
                    status: '',
                    id: 'l5-w4'
                },
                {
                    letter: '',
                    status: '',
                    id: 'l5-w5'
                }
            ],
            [
                {
                    letter: '',
                    status: '',
                    id: 'l6-w1'
                },
                {
                    letter: '',
                    status: '',
                    id: 'l6-w2'
                },
                {
                    letter: '',
                    status: '',
                    id: 'l6-w3'
                },
                {
                    letter: '',
                    status: '',
                    id: 'l6-w4'
                },
                {
                    letter: '',
                    status: '',
                    id: 'l6-w5'
                }
            ],
            [
                {
                    letter: '',
                    status: '',
                    id: 'l7-w1'
                },
                {
                    letter: '',
                    status: '',
                    id: 'l7-w2'
                },
                {
                    letter: '',
                    status: '',
                    id: 'l7-w3'
                },
                {
                    letter: '',
                    status: '',
                    id: 'l7-w4'
                },
                {
                    letter: '',
                    status: '',
                    id: 'l7-w5'
                }
            ]
        ]);
        setKeys([
            [
                {
                    value: "Q",
                    status: ''
                },
                {
                    value: "W",
                    status: ''
                },
                {
                    value: "E",
                    status: ''
                },
                {
                    value: "R",
                    status: ''
                },
                {
                    value: "T",
                    status: ''
                },
                {
                    value: "Y",
                    status: ''
                },
                {
                    value: "U",
                    status: ''
                },
                {
                    value: "I",
                    status: ''
                },
                {
                    value: "O",
                    status: ''
                },
                {
                    value: "P",
                    status: ''
                },
                {
                    value: "←",
                    status: ''
                }
            ],
            [
                {
                    value: "A",
                    status: ''
                },
                {
                    value: "S",
                    status: ''
                },
                {
                    value: "D",
                    status: ''
                },
                {
                    value: "F",
                    status: ''
                },
                {
                    value: "G",
                    status: ''
                },
                {
                    value: "H",
                    status: ''
                },
                {
                    value: "J",
                    status: ''
                },
                {
                    value: "K",
                    status: ''
                },
                {
                    value: "L",
                    status: ''
                },
                {
                    value: "↲",
                    status: ''
                }
            ],
            [
                {
                    value: "Z",
                    status: ''
                },
                {
                    value: "X",
                    status: ''
                },
                {
                    value: "C",
                    status: ''
                },
                {
                    value: "V",
                    status: ''
                },
                {
                    value: "B",
                    status: ''
                },
                {
                    value: "N",
                    status: ''
                },
                {
                    value: "M",
                    status: ''
                }
            ]
        ]);
        setPosition({
            column: 0,
            row: 0
        });
    }

    // toast para fim de jogo perdido
    useEffect(() => {
        if (position.row > 6)
            toast.error('a palavra era ' + response.map(obj => obj.letter).join(""))
    }, [position, response])

    // toast para fim de jogo ganho e controle de tempo
    useEffect(() => {
        if (win) return; // não inicia timer se ganhou

        setSeconds(0); // reseta cronômetro quando reinicia

        const interval = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [win]);

    // funcao retorno para exibir tempo de jogo
    const getMinutes = (sec) => {
        let min = 0;
        while (sec > 60) {
            min += 1;
            sec -= 60;
        }
        return `${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec} minutos`;
    }

    return (
        <Page>
            <div
                className="main-container"
                style={options ? { pointerEvents: 'none', filter: 'blur(4px)' } : { pointerEvents: 'all' }}
            >
                <article
                    className="content-header"
                >
                    <h2 className="ch-title">
                        dWord
                    </h2>
                </article>
                <section className="main-content">
                    <div className="game-content letra">
                        {
                            game.map((item, index) => {
                                return <div className="line-inputs">
                                    {
                                        item.map((it, colIndex) => {
                                            return <span
                                                type="text"
                                                className={`
                                                letter-input 
                                                ${it.status} 
                                                ${position.row === index && position.column === colIndex ? 'letter-input-focus' : ''}
                                            `}
                                                disabled={index > position.row || it.status !== ''}
                                                id={it.id}
                                                name={it.id}
                                                onClick={() => {
                                                    if (index === position.row)
                                                        setPosition(prev => ({
                                                            column: colIndex,
                                                            row: prev.row
                                                        }))
                                                }}
                                            >
                                                {it.letter}
                                            </span>
                                        })
                                    }
                                </div>
                            })
                        }

                        <Keyboard position={position} setPosition={setPosition} game={game} setGame={setGame} keys={keys} setKeys={setKeys} response={response} words={words} setWin={setWin} />
                    </div>
                    {
                        win || position.row > 6 ?
                            <div className="game-win">
                                {
                                    win ?
                                        <>
                                            <h3 className="gw-title">
                                                Parabéns, você acertou!
                                            </h3>
                                            <p className="gw-response">
                                                Foram {position.row + 1} tentativas e {
                                                    seconds > 60 ?
                                                        `${getMinutes(seconds)}`
                                                        : `${seconds} segundos`
                                                }
                                            </p>
                                        </>
                                        :
                                        <>
                                            <h3 className="gw-title">
                                                Não foi dessa vez!
                                            </h3>
                                        </>
                                }
                                <button
                                    className="gw-btn"
                                    onClick={handleReset}
                                >
                                    Novo jogo
                                </button>
                                <br />
                            </div>
                            : ''
                    }
                </section>
            </div>
            {
                options ?
                    <Window>
                        <h4 className="window-subtitle">
                            Descubra a palavra certa com sete tentativas.
                        </h4>

                        <section className="window-toPlay">
                            <p className="wp-text">
                                Faça seu primeiro palpite: Digite qualquer palavra válida de 5 letras.
                            </p>
                            <p className="wp-text">
                                Analise as dicas:
                            </p>
                            <p className="wp-subtext">
                                Se ficou verde, letra na posição correta!
                            </p>
                            <RowInput
                                keys={[
                                    {
                                        id: 'e1',
                                        letter: 'A',
                                        class: 'errado'
                                    },
                                    {
                                        id: 'e2',
                                        letter: 'G',
                                        class: 'errado'
                                    },
                                    {
                                        id: 'C1',
                                        letter: 'O',
                                        class: 'certo'
                                    },
                                    {
                                        id: 'C2',
                                        letter: 'R',
                                        class: 'certo'
                                    },
                                    {
                                        id: 'e3',
                                        letter: 'A',
                                        class: 'errado'
                                    }
                                ]}
                            />
                            <p className="wp-subtext">
                                Se ficou amarelo, letra presente na palavra, mas em outra posição!
                            </p>
                            <RowInput
                                keys={[
                                    {
                                        id: 'e4',
                                        letter: 'B',
                                        class: 'errado'
                                    },
                                    {
                                        id: 'Q1',
                                        letter: 'O',
                                        class: 'quase'
                                    },
                                    {
                                        id: 'e5',
                                        letter: 'N',
                                        class: 'errado'
                                    },
                                    {
                                        id: 'Q2',
                                        letter: 'D',
                                        class: 'quase'
                                    },
                                    {
                                        id: 'e7',
                                        letter: 'E',
                                        class: 'errado'
                                    }
                                ]}
                            />
                            <p className="wp-subtext">
                                Se ficou cinza, a letra não está presente na palavra!
                            </p>
                            <RowInput
                                keys={[
                                    {
                                        id: 'e-8',
                                        letter: 'F',
                                        class: 'errado'
                                    },
                                    {
                                        id: 'e-9',
                                        letter: 'A',
                                        class: 'errado'
                                    },
                                    {
                                        id: 'e-10',
                                        letter: 'L',
                                        class: 'errado'
                                    },
                                    {
                                        id: 'e-11',
                                        letter: 'H',
                                        class: 'errado'
                                    },
                                    {
                                        id: 'e-12',
                                        letter: 'A',
                                        class: 'errado'
                                    }
                                ]}
                            />

                            <p className="wp-subtext">
                                Use a lógica, a partir das pistas, descubra a <i>palavra secreta</i>.
                            </p>
                            <RowInput
                                keys={[
                                    {
                                        id: 'C1',
                                        letter: 'D',
                                        class: 'certo'
                                    },
                                    {
                                        id: 'C2',
                                        letter: 'W',
                                        class: 'certo'
                                    },
                                    {
                                        id: 'C3',
                                        letter: 'O',
                                        class: 'certo'
                                    },
                                    {
                                        id: 'C4',
                                        letter: 'R',
                                        class: 'certo'
                                    },
                                    {
                                        id: 'C5',
                                        letter: 'D',
                                        class: 'certo'
                                    }
                                ]}
                            />
                        </section>
                    </Window>
                    : ''
            }
        </Page>
    );
}