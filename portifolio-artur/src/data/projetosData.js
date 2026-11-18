import HomeChico from "../assets/projetos/home-chico-wiki.png";
import HomeWikiNerd from "../assets/projetos/home-mega-wiki-nerd.png";
import HomeRankUp from "../assets/projetos/home-rank-up.png";
import HomePortugeses from "../assets/projetos/home-portugues.png";

export const meusProjetos = [
    {
        id: 1,
        nome: "Chico Wiki",
        categoria: "Wiki",
        linguagem: "HTML + JS",
        repositorio: "https://github.com/ArturSalesFrancisco/chico-wiki",
        concluido: true,
        img: HomeChico,
        descricao: "Chico Wiki foi o primeiro trabalho que construi na faculdade usando as ferramentas ensinadas no primeiro período do meu curso de Engenharia de Software. A ideia era expor meu processo de trabalho com assuntos do quadrinho e apresentar para os usuários o mundo mágico de Chico, assim como os principais personagens da história."
    },
    {
        id: 2,
        nome: "Portugeses",
        categoria: "Jogo",
        linguagem: "Python",
        repositorio: "https://github.com/EdRauber/pygame-trabalho-pratico",
        concluido: true,
        img: HomePortugeses,
        descricao: "O jogo Portugeses foi um dos principais trabalhos em grupo do primeiro período de curso. Trata-se de um jogo de rolagem de dados, que pode ser jogado individualmente ou multiplayer, no qual vence aquele que pontuar primeiro 1500 pontos seguindo as regras de combinações do jogo."
    },
    {
        id: 3,
        nome: "Mega Wiki Nerd",
        categoria: "Wiki",
        linguagem: "HTML + JS",
        repositorio: "https://github.com/ArturSalesFrancisco/mega-wiki-nerd",
        concluido: true,
        img: HomeWikiNerd,
        descricao: "Mega Wiki Nerd é um projeto individual que montei pensando na possibilidade de conhecer mais a fundo filmes, séries, quadrinhos e jogos do mundo geek e nerd. A wiki contém diversas obras e informações sobre sua história e personagens, além de ser possível avaliar cada obra que você já assistiu e rankear personagens das suas obras favoritas."
    },
    {
        id: 4,
        nome: "Cuida+",
        categoria: "App Mobile",
        linguagem: "React + SpringBoot",
        repositorio: "https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2026-2-ti2-8183100-cuida-mais",
        concluido: false,
        img: HomeChico,
        descricao: "Cuida+ é um App Mobile em desenvolvimento (em equipe) trabalhado a partir de um dos objetivos de desenvolvimento sustentável (ODS) da ONU: Saúde e bem estar. O app tem como principal função servir de apoio a pessoas pouco familiarizadas com tecnologia no auto cuidado com sua saúde."
    },
    {
        id: 5,
        nome: "Rank-Up",
        categoria: "Web",
        linguagem: "React + SpringBoot",
        repositorio: "https://github.com/ArturSalesFrancisco/rank-up",
        concluido: false,
        img: HomeRankUp,
        descricao: "Rank-Up é meu segundo projeto individual, ainda em construção, que surge da necessidade de catalogar minhas coisas favoritas (sobre literalmente qualquer assunto). Nessa aplicação, será possível criar cards de avaliação sobre o que você quiser e depois adicioná-las em um ranking, seja um top 3, 5, 10 ou quem sabe quantos?"
    }
]