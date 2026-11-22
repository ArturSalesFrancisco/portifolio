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
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";

function Home(){
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();

    const mudarIdioma = (idioma) => {
        i18n.changeLanguage(idioma);
    };

    return(
        <>
            <button className="btn-idioma" onClick={() => mudarIdioma('pt')}>PT 🇧🇷</button>
            <button className="btn-idioma" onClick={() => mudarIdioma('en')}>EN 🇺🇸</button>

            <div className="inicial">
                <img className="perfil-artur" src= {Perfil} alt={'imagem-artur'}/>
                <div className="blocos">
                    <div className="infos-iniciais">
                        <div className="bloco-informacoes">
                            <h2>{t('home.nome')}</h2>
                            <p className="texto-apresentacao">{t('home.idade')}</p>
                            <p className="texto-apresentacao">{t('home.curso')}</p>
                            <p className="texto-apresentacao">{t('home.faculdade')}</p>
                        </div>
                        <div className="bloco-apresentacao">
                            <p className="texto-apresentacao">{t('home.apresentacao')}</p>
                        </div>
                    </div>
                    <div className="bloco-branco">
                        <p className="sobre-mim">{t('home.sobreMim')}</p>
                    </div>
                </div>
            </div>

            <div className="mais-infos">
                <p>{t('home.meusInteresses')}</p>
                <div className="interesse">
                    <img className="icones-img" src={Arte} alt="imagem-paint"/>
                    <p>{t('home.interesse1')}</p>
                </div>
                <div className="interesse">
                    <img className="icones-img" src={Naruto} alt="imagem-naruto"/>
                    <p>{t('home.interesse2')}</p>
                </div>
                <div className="interesse">
                    <img className="icones-img" src={Quadrinho} alt="imagem-quadrinho"/>
                    <p>{t('home.interesse3')}</p>
                </div>
            </div>

            <article className="tecnologias">
                <div className="bloco-branco">
                    <p>{t('home.ferramentas')}</p>
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

                <button className="ver-projetos" onClick={() => navigate("/projetos")}>{t('home.meusProjetos')}</button>

            </article>

            <article className="desenhos">
                <div className="bloco-branco">
                    <p>{t('home.desenhos')}</p>
                </div>
                <div className="sobre-chico ">
                    <div className="bloco-chico">
                        <p className="sinopse-chico">{t('home.descChico')}</p> 
                    </div>
                    <div className="bloco-infos-chico">
                        <p className="sinopse-chico">{t('home.descCamisas')}</p>
                    </div>
                </div>
                <div className="galeria">
                    <img className="img-camisa" src={CamisaGolias} alt="estampa-golias"/>
                    <img className="img-estampas" src={Estampas} alt="estampas-chico"/>
                </div>
            </article>
            <div className="mandar-mensagem">
                <button className="botao-contato" onClick={() => navigate("/contato")}>{t('contato.btn')}</button>
            </div>
        </>
    )
}

export default Home;