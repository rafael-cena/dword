import { useContext } from "react";
import Page from "../templates/Page";
import { Contexto } from "../App";
import RowInput from "../components/rowInputs/RowInput";
import { Link } from "react-router";
import Window from "../components/Window/Window";

export default function Error() {
    const { options } = useContext(Contexto);

    return <Page>
        <div
            className="error-container"
            style={options ? { pointerEvents: 'none', filter: 'blur(4px)' } : { pointerEvents: 'all' }}
        >
            <article
                className="content-header"
            >
                <h2 className="ch-title">
                    &nbsp;
                </h2>
            </article>

            <section className="main-content">
                <RowInput
                    keys={[
                        {
                            id: 'C1-l1',
                            letter: 'E',
                            class: 'certo'
                        },
                        {
                            id: 'Q1-l1',
                            letter: 'R',
                            class: 'quase'
                        },
                        {
                            id: 'e3',
                            letter: 'R',
                            class: 'errado'
                        },
                        {
                            id: 'e4',
                            letter: 'O',
                            class: 'errado'
                        },
                        {
                            id: 'Q2-l2',
                            letter: 'R',
                            class: 'quase'
                        }
                    ]}
                />

                <RowInput
                    keys={[
                        {
                            id: 'e1',
                            letter: ' ',
                            class: 'errado'
                        },
                        {
                            id: 'C1',
                            letter: '4',
                            class: 'certo'
                        },
                        {
                            id: 'C2',
                            letter: '0',
                            class: 'certo'
                        },
                        {
                            id: 'Q1',
                            letter: '4',
                            class: 'quase'
                        },
                        {
                            id: 'e2',
                            letter: ' ',
                            class: 'errado'
                        }
                    ]}
                />
            </section>
            <section className="error-text">
                <h2 className="et-title">Página não encontrada</h2>
                <p className="et-subtitle">A página que você está tentando acessar não existe.</p>
                <Link to={"/"} className="et-link">Voltar ao jogo</Link>
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
}