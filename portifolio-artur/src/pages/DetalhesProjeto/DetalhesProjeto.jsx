import { Link, useParams } from "react-router-dom";
import "./DetalhesProjeto.css";
import { meusProjetos } from "../../data/projetosData";
import GitHubIcon from "../../assets/tecnologias/github.png"

function DetalhesProjeto() {
    const {id} = useParams();
    const projetoAtual = meusProjetos.find((p) => p.id == id);

    if (!projetoAtual) {
        return <h2>Projeto não encontrado!</h2>;
    }

    return(
        <article>
            <img className="banner-projeto" src={projetoAtual.img} alt={projetoAtual.nome} />
            <h1>{projetoAtual.nome.toUpperCase()}</h1>

            <Link className="link-repo" to={projetoAtual.repositorio}>
                <img className="github-icon" src={GitHubIcon} alt="github-icon" />
                <p>Repositório Git</p>
            </Link>
        </article>
    )
}

export default DetalhesProjeto;