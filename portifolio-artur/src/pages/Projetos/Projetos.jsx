import CardProjeto from "../../components/CardProjeto/CardProjeto";
import "./Projetos.css";
import { meusProjetos} from "../../data/projetosData";
import BotaoVoltar from "../../components/BotaoVoltar/BotaoVoltar";

function Projetos(){

    return(
        <>
        <BotaoVoltar texto={"← Voltar para página inicial"} rota={'/'}/>
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