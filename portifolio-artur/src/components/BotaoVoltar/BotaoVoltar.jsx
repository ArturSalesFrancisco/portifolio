import { useNavigate } from "react-router-dom";

function BotaoVoltar({texto, rota}){
    const navigate = useNavigate();

    return(
        <div>
            <button className="btn-voltar" onClick={() => navigate(rota)}>
                {texto}
            </button>
        </div>
    )
}

export default BotaoVoltar;