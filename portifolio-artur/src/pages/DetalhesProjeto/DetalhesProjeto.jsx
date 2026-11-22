import { Link, useParams } from "react-router-dom";
import "./DetalhesProjeto.css";
import GitHubIcon from "/assets/tecnologias/github.png"
import BotaoVoltar from "../../components/BotaoVoltar/BotaoVoltar";
import { useTranslation } from 'react-i18next';
import { meusProjetosPt } from '../../data/projetosPt';
import { meusProjetosEn } from '../../data/projetosEn';

function DetalhesProjeto() {
    const { t, i18n } = useTranslation();
    const meusProjetos = i18n.language === 'en' ? meusProjetosEn : meusProjetosPt;

    const {id} = useParams();
    const projetoAtual = meusProjetos.find((p) => p.id == id);

    if (!projetoAtual) {
        return <h2>Projeto não encontrado!</h2>;
    }

    return(
        <article>
            <BotaoVoltar texto={t('projetos.btnVoltar')} rota={'/projetos'}/>
            <div className="conteudo-projeto">
                <img className="banner-projeto" src={projetoAtual.img} alt={projetoAtual.nome} />
                <div className="informacoes">
                    <div className="cabecalho">
                        <h1>{projetoAtual.nome.toUpperCase()}</h1>
                        <p className={projetoAtual.concluido ? "status-concluido" : "status-trabalhando"}>{projetoAtual.concluido ? t('projetos.concluido') : t('projetos.emConstrucao')}</p>
                    </div>
                    <p>{projetoAtual.descricao}</p>

                    <p className="bloco-branco faixa-subtitulo">{t('projetos.funcionamento')}</p>
                </div>
            </div>
            <p className="funcionalidade">{projetoAtual.funcionalidade}</p>

            <div className="bloco-galeria">
                <div className="galeria-telas">
            {projetoAtual.galeria.map((foto, index) => {
                return(
                    <img
                        className="img-galeria"
                        key={index} 
                        src={foto} 
                        alt="Print do projeto" 
                    />
                )
            })}
                </div>
            </div>

            <Link className="link-repo" to={projetoAtual.repositorio}>
                <img className="github-icon" src={GitHubIcon} alt="github-icon" />
                <p>{t('projetos.repositorio')}</p>
            </Link>
        </article>
    )
}

export default DetalhesProjeto;