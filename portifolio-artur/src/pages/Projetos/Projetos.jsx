import CardProjeto from "../../components/CardProjeto/CardProjeto";
import "./Projetos.css";
import { meusProjetos } from "../../data/projetosData";

function Projetos(){

    return(
        <>
        <div className="bloco-branco">
            CONHEÇA MEUS PROJETOS:
        </div>

        {meusProjetos.map(project => {
            return(
                <CardProjeto project={project}/>
            )
        })}
        </>
    )
}

export default Projetos;