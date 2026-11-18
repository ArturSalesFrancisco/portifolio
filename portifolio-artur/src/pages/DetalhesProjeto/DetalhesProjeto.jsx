import { Link, useParams } from "react-router-dom";
import "./DetalhesProjeto.css";
import { meusProjetos } from "../../data/projetosData";
import GitHubIcon from "/assets/tecnologias/github.png"
import BotaoVoltar from "../../components/BotaoVoltar/BotaoVoltar";

function DetalhesProjeto() {
    const {id} = useParams();
    const projetoAtual = meusProjetos.find((p) => p.id == id);

    if (!projetoAtual) {
        return <h2>Projeto não encontrado!</h2>;
    }

    return(
        <article>
            <BotaoVoltar texto={"← Voltar para projetos"} rota={'/projetos'}/>
            <div className="conteudo-projeto">
                <img className="banner-projeto" src={projetoAtual.img} alt={projetoAtual.nome} />
                <div className="informacoes">
                    <div className="cabecalho">
                        <h1>{projetoAtual.nome.toUpperCase()}</h1>
                        <p className={projetoAtual.concluido ? "status-concluido" : "status-trabalhando"}>{projetoAtual.concluido ? "Concluído" : "Em construção"}</p>
                    </div>
                    <p>{projetoAtual.descricao}</p>

                    <p className="bloco-branco faixa-subtitulo">COMO FUNCIONA:</p>
                </div>
            </div>
            <p className="funcionalidade">{projetoAtual.funcionalidade}</p>

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

            <Link className="link-repo" to={projetoAtual.repositorio}>
                <img className="github-icon" src={GitHubIcon} alt="github-icon" />
                <p>Repositório Git</p>
            </Link>
        </article>
    )
}

export default DetalhesProjeto;