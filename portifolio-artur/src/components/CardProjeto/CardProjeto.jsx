import {Link} from "react-router-dom";
import "./CardProjeto.css";

function CardProjeto({project}){
    return(
        <article key={project.id} className="project">
            <div className="interface-projeto">
                <div className="faixa-topo">
                    <div className="bola-vermelha"></div>
                    <div className="bola-amarela"></div>
                    <div className="bola-verde"></div>
                </div>
                <img className="img-projeto" src={project.img} alt={project.nome} />
            </div>

            <div className="infos-projeto">
                <div className="cabecalho">
                    <h1 className="nome-projeto">{project.nome}</h1>
                    <p className={project.concluido ? "status-concluido" : "status-trabalhando"}>{project.concluido ? "Concluído" : "Em construção"}</p>
                </div>
                <div className="secundarios">
                    <p className="linguagem">Feito usando: {project.linguagem}</p>
                    <p>•</p>
                    <p className="categoria">{project.categoria}</p>
                </div>
                <p className="descricao">{project.descricao}</p>
                <Link className="link" to={`/projetos/${project.id}`}>Ver Detalhes</Link>
            </div>
        </article>
    )
}

export default CardProjeto;