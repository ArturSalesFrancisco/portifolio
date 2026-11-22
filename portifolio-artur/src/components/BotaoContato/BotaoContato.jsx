import "./BotaoContato.css";

function BotaoContato({texto, imagem, link, cor}){
    return(
        <a className="btn-contato" href={link} target="_blank" rel="noopener noreferrer" style={{backgroundColor: cor}}>
            <img className="icon-contato" src={imagem} alt={texto} />
            <p>{texto}</p>
        </a>
    )
}

export default BotaoContato;