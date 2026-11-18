import Perfil from "/assets/Perfil.jpg";
import Arte from "/assets/paint.png";
import Naruto from "/assets/naruto.png";
import Quadrinho from "/assets/quadrinho.png";
import CamisaGolias from "/assets/camisa.jpg";
import Estampas from "/assets/camisa2.jpg";
import Html from "/assets/tecnologias/html.png";
import Css from "/assets/tecnologias/css.png";
import Js from "/assets/tecnologias/js.png";
import React from "/assets/tecnologias/react.png";
import Python from "/assets/tecnologias/python.png";
import Java from "/assets/tecnologias/java.png";
import Node from "/assets/tecnologias/node.png";
import "./Home.css";

function Home(){
    return(
        <>
            <div className="inicial">
                <img className="perfil-artur" src= {Perfil} alt={'imagem-artur'}/>
                <div className="blocos">
                    <div className="infos-iniciais">
                        <div className="bloco-informacoes">
                            <h2>ARTUR SALES</h2>
                            <p className="texto-apresentacao">•18 anos / Ibirité-MG</p>
                            <p className="texto-apresentacao">• 2º Período de Engenharia de Softawe</p>
                            <p className="texto-apresentacao">PUC Minas - Coreu</p>
                        </div>
                        <div className="bloco-apresentacao">
                            <p className="texto-apresentacao">Iniciando na área de desenvolvimento de software e evoluindo a cada commit! Trabalhando a cada dia descobrindo novas tecnologias e exercitando a criatividade a cada instante!</p>
                        </div>
                    </div>
                    <div className="bloco-branco">
                        <p className="sobre-mim3">CONHEÇA UM POUCO SOBRE MIM:</p>
                    </div>
                </div>
            </div>

            <div className="mais-infos">
                <p>INTERESSES PESSOAIS:</p>
                <div className="interesse">
                    <img className="icones-img" src={Arte} alt="imagem-paint"/>
                    <p>Desenho e criação de todo tipo de artes manuais;</p>
                </div>
                <div className="interesse">
                    <img className="icones-img" src={Naruto} alt="imagem-naruto"/>
                    <p>Filmes, séries e livros nerd/geek ou que envolvam ficção científica, aventura e fantasia;</p>
                </div>
                <div className="interesse">
                    <img className="icones-img" src={Quadrinho} alt="imagem-quadrinho"/>
                    <p>Mangás e quadrinhos - principalmente obras nacionais;</p>
                </div>
            </div>

            <article className="tecnologias">
                <div className="bloco-branco">
                    <p>FERRAMENTAS QUE VENHO APRENDENDO NO CURSO:</p>
                </div>
                <div className="div-icon-tecno">
                    <img className="icon-ferramentas" src={Html} alt="html-icon" />
                    <img className="icon-ferramentas" src={Css} alt="css-icon" />
                    <img className="icon-ferramentas" src={Js} alt="js-icon" />
                    <img className="icon-ferramentas" src={React} alt="react-icon" />
                    <img className="icon-ferramentas" src={Python} alt="python-icon" />
                    <img className="icon-ferramentas" src={Java} alt="java-icon" />
                    <img className="icon-ferramentas" src={Node} alt="node-icon" />
                </div>
            </article>

            <article className="desenhos">
                <div className="bloco-branco">
                    <p>MAIS SOBRE MEUS DESENHOS:</p>
                </div>
                <div className="sobre-chico ">
                    <div className="bloco-chico">
                        <p className="sinopse-chico">Nos últimos 3 anos, venho construindo um universo de quadrinho protagonizado por Chico, um garoto que vive num mundo fantasioso e que sonha em explorar as terrar vastas do planeta, assim como seus pais. Em sua jornada, Chico conhece criaturas extraordinárias e descobre que o mundo não são só flores, como ele imaginava.</p> 
                    </div>
                    <div className="bloco-infos-chico">
                        <p className="sinopse-chico">O que começaram como apenas desenhos, hoje já somam 3 cadernos de personagens, roteiros, chaveiros, adesivos e até estampa de camisetas e moletons com Chico e outros personagens da trama.</p>
                    </div>
                </div>
                <div className="galeria">
                    <img className="img-camisa" src={CamisaGolias} alt="estampa-golias"/>
                    <img className="img-estampas" src={Estampas} alt="estampas-chico"/>
                </div>
            </article>
        </>
    )
}

export default Home;