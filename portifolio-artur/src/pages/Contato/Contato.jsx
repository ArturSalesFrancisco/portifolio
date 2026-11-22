import "./Contato.css";
import Instagram from "../../../public/assets/contato/instagram.png";
import WhatsApp from "../../../public/assets/contato/whatsapp.png";
import Linkedin from "../../../public/assets/contato/linkedin.png";
import GitHub from "../../../public/assets/tecnologias/github.png";
import BotaoContato from "../../components/BotaoContato/BotaoContato";
import BotaoVoltar from "../../components/BotaoVoltar/BotaoVoltar";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { useTranslation } from "react-i18next";

function Contato(){
    const { t } = useTranslation();
    const form = useRef();
    const enviarEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_edw5d7b', 'template_sj5701c', form.current, {
            publicKey: 'Loq_CNk6Vn59BHcWj',
        })
        .then(
            () => {
                alert("Mensagem enviada com sucesso!");
                form.current.reset();
            },
            (error) => {
                alert('Erro ao enviar a mensagem, tente novemente.', error.text);
            },
        );
    };

    return(
        <article className="fale-comigo">
            <BotaoVoltar texto={t('projetos.btnInicial')} rota={'/'}/>
            <p className="bloco-branco">{t('contato.mensagem')}</p>

            <div className="entrar-em-contato">
                <div className="faixa-topo">
                    <div className="bola-vermelha"></div>
                    <div className="bola-amarela"></div>
                    <div className="bola-verde"></div>
                </div>
                <p className="email">email: artursalesfrancisco@gmail.com</p>

                <form ref={form} onSubmit={enviarEmail} className="form-contato">
                    <div className="grupo-campos">
                        <div className="campo">
                        <label>{t('contato.nome')}</label>
                        <input type="text" name="user_name" placeholder={t('contato.nomeCampo')} required />
                        </div>
                        <div className="campo">
                        <label>{t('contato.email')}</label>
                        <input type="email" name="user_email" placeholder={t('contato.emailCampo')} required />
                        </div>
                    </div>

                    <div className="campo">
                        <label>{t('contato.assunto')}</label>
                        <input type="text" name="subject" placeholder={t('contato.assuntoCampo')} required />
                    </div>

                    <div className="campo">
                        <label>{t('contato.conteudo')}</label>
                        <textarea name="message" rows="6" placeholder={t('contato.conteudoCampo')} required></textarea>
                    </div>

                    <button type="submit" className="botao-enviar">{t('contato.enviar')}</button>
                </form>

            </div>

            <div className="contatos">
                <BotaoContato texto={"Instagram"} imagem={Instagram} link={"https://www.instagram.com/__artur_sales__/"} cor={"#B82A57"}/>
                <BotaoContato texto={"WhatsApp"} imagem={WhatsApp} link={"https://wa.me/qr/USVBCT5VEC2DE1"} cor={"#2AB85E"}/>
                <BotaoContato texto={"Linkedin"} imagem={Linkedin} link={"https://www.linkedin.com/in/artur-sales-10b7aa450/"} cor={"#6B90C4"}/>
                <BotaoContato texto={"GitHub"} imagem={GitHub} link={"https://github.com/ArturSalesFrancisco"} cor={"#000000"}/>
            </div>
        </article>
    )
}

export default Contato;