import { Link } from "react-router-dom";
import "./BotaoContato.css";

function BotaoContato({texto, imagem, link, cor}){
    return(
        <Link className="btn-contato" to={link} style={{backgroundColor: cor}}>
            <img className="icon-contato" src={imagem} alt={texto} />
            <p>{texto}</p>
        </Link>
    )
}

export default BotaoContato;