import CardProjeto from "../../components/CardProjeto/CardProjeto";
import "./Projetos.css";
import BotaoVoltar from "../../components/BotaoVoltar/BotaoVoltar";
import { useTranslation } from 'react-i18next';
import { meusProjetosPt } from '../../data/projetosPt';
import { meusProjetosEn } from '../../data/projetosEn';

function Projetos(){
    const { t, i18n } = useTranslation();
    const meusProjetos = i18n.language === 'en' ? meusProjetosEn : meusProjetosPt;

    return(
        <>
        <BotaoVoltar texto={t('projetos.btnInicial')} rota={'/'}/>
        <div className="bloco-branco">
            {t('projetos.conhecaProjetos')}
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