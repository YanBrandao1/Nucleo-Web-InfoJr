import "./Home.css";
import JogoDaVelhaImg from './img/jogodavelhaimg.png';

export default function TelaInicio(){
    return(
        <div>
            <section className="main-content">
                <div className="flexbox">
                        <div className="div-text">
                            <h1>Conhece os benefícios do jogo da velha ?</h1>
                                <br/>
                                <ol>
                                    <li> <p> Estímulo mental: O jogo da velha requer estratégia e pensamento lógico para prever as jogadas do oponente e tomar decisões com base nas posições disponíveis no tabuleiro. Isso ajuda a exercitar e fortalecer o cérebro, especialmente o raciocínio espacial e a capacidade de planejamento.</p></li>
                                    <br />
                                    <br />
                                    <li><p>Desenvolvimento de habilidades cognitivas: Jogar o jogo da velha envolve o desenvolvimento de habilidades cognitivas, como memória, concentração e atenção. Os jogadores precisam se lembrar das posições anteriores e observar atentamente o tabuleiro para tomar as melhores decisões.</p></li>
                                    <br />
                                    <br />
                                    <li><p>Interação social: O jogo da velha pode ser jogado entre amigos, familiares ou até mesmo com estranhos. Ele proporciona oportunidades para interações sociais, promovendo o trabalho em equipe, a comunicação e a competição saudável.</p></li>
                                </ol>
                        </div>
                        <div className="play-container-mobile">
                            <a className="play-button-mobile" href="#game-page">JOGAR</a>
                        </div>
                        <div className="jogodavelha-box">
                            <img src={JogoDaVelhaImg} />
                            <div className="button-container">
                                <a className="play-button" href="#game-page">JOGAR</a>
                            </div>
                        </div>
                    </div>
                </section>
        </div>
    );
}