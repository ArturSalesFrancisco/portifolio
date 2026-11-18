import HomeChico from "/assets/projetos/home-chico-wiki.png";
import HomeWikiNerd from "/assets/projetos/home-mega-wiki-nerd.png";
import HomeRankUp from "/assets/projetos/home-rank-up.png";
import HomePortugeses from "/assets/projetos/home-portugues.png";

export const meusProjetos = [
    {
        id: 1,
        nome: "Chico Wiki",
        categoria: "Wiki",
        linguagem: "HTML + JS",
        repositorio: "https://github.com/ArturSalesFrancisco/chico-wiki",
        concluido: true,
        img: HomeChico,
        descricao: "Chico Wiki foi o primeiro trabalho que construi na faculdade usando as ferramentas ensinadas no primeiro período do meu curso de Engenharia de Software. A ideia era expor meu processo de trabalho com assuntos do quadrinho e apresentar para os usuários o mundo mágico de Chico, assim como os principais personagens da história.",
        funcionalidade: "A Chico Wiki surge como uma ponte entre autor e leitores de um futuro quadrinho que eu sonho em publicar. A Wiki começa em uma Home com os principais blocos de conteúdo, incluindo Personagens, Locais, Espécies, Organizações e principalmente Capítulos, no qual seriam publicados resumos dos trechos mais recentes da história de Chico. Os demais blocos, levam o leitor a conhecer mais de perto as particularidades desse universo mágico, com foco na descrição de dados dos personagens mais importantes da obra. Na página de personagens, cada um tem sua sessao especial, na qual são apresentados curiosidades como data de aniverário, altura, habilidades e outras informações.",
        galeria: []
    },
    {
        id: 2,
        nome: "Portugeses",
        categoria: "Jogo",
        linguagem: "Python",
        repositorio: "https://github.com/EdRauber/pygame-trabalho-pratico",
        concluido: true,
        img: HomePortugeses,
        descricao: "O jogo Portugeses foi um dos principais trabalhos em grupo do primeiro período de curso. Trata-se de um jogo de rolagem de dados, que pode ser jogado individualmente ou multiplayer, no qual vence aquele que pontuar primeiro 1500 pontos seguindo as regras de combinações do jogo.",
        funcionalidade: "Portugeses (nome que veio de um erro de digitação ocasional durante a construção do projeto - originalmente Porguêses), é um jogo de rolagem de dados onde você duela com outros exploradores usando partidas de rolagem de dados. A cada rolagem você pode salvar seus dados ou combinar valores semelhantes, como 1 e 1; 2, 2 e 2, ou fazer sequencias como 1, 2, 3 4 e 5; para somar cada vesz mais pontos e derrotar seu inimigo. O jogo conta com visuais em pixel art autorais, além de música tema, também feita pelo grupo que construiu o projeto. Portugeses pode ser jogado no modo singleplayer, no qual você percorre o mapa e duela com outros exploradores, ou multiplayer, para descobrir, entre seus amigos, quem tem mais sorte no dado!",
        galeria: ["/assets/projetos/portugeses/mapa-portugeses.png", "/assets/projetos/portugeses/partida-portugeses.png", "/assets/projetos/portugeses/ranking-portugeses.png"]
    },
    {
        id: 3,
        nome: "Mega Wiki Nerd",
        categoria: "Wiki",
        linguagem: "HTML + JS",
        repositorio: "https://github.com/ArturSalesFrancisco/mega-wiki-nerd",
        concluido: true,
        img: HomeWikiNerd,
        descricao: "Mega Wiki Nerd é um projeto individual que montei pensando na possibilidade de conhecer mais a fundo filmes, séries, quadrinhos e jogos do mundo geek e nerd. A wiki contém diversas obras e informações sobre sua história e personagens, além de ser possível avaliar cada obra que você já assistiu e rankear personagens das suas obras favoritas.",
        funcionalidade: "Mega Wiki Nerd é o espaço para quem curte obras geek e nerd e sempre quer saber mais sobre o conteúdo que vem consumindo. A Wiki possui um catálogo de séries, filmes, quadrinhos e jogos de diversos tipos e em cada uma dessas obras, é possível acessar sua descrição, descobrir o streaming no qual a obra se encontra, conhecer os principais personagens e outras informações. Os personagens também possuem sua própria página descritiva, para poder se aprofundar ainda mais na sua obra preferida. Na wiki, ainda é possível avaliar obras que você já assistiu, adicioná-las na sua lista ou favoritá-las. Além disso, também existe um modo studio com tierlist para rankear os melhores personagens desse universo magnífico!",
        galeria: ["/assets/projetos/mega-wiki-nerd/detalhe-obra-mega-wiki-nerd.png", "/assets/projetos/mega-wiki-nerd/detalhe-personagem-mega-wiki-nerd.png", "/assets/projetos/mega-wiki-nerd/perfil-mega-wiki-nerd.png", "/assets/projetos/mega-wiki-nerd/studio-mega-wiki-nerd.png"]
    },
    {
        id: 4,
        nome: "Cuida+",
        categoria: "App Mobile",
        linguagem: "React + SpringBoot",
        repositorio: "https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2026-2-ti2-8183100-cuida-mais",
        concluido: false,
        img: HomeChico,
        descricao: "Cuida+ é um App Mobile em desenvolvimento (em equipe) trabalhado a partir de um dos objetivos de desenvolvimento sustentável (ODS) da ONU: Saúde e bem estar. O app tem como principal função servir de apoio a pessoas pouco familiarizadas com tecnologia no auto cuidado com sua saúde.",
        funcionalidade: "Cuida+ é um projeto que vem sendo desenvolvido em grupo a partir da proposta de trabalho de uma das disciplinas do curso de Engenharia de Software: Trabalho Interdisciplinar Centrado no Usuário. A proposta do App é simplificar tecnologias de apoio ao cuidado com a saúde, tornando esse cuidado mais fácil e prático para pessoas que não se dão muito bem com aplicativos modernos que possuem a mesma função. Cuida+ possue uma interface com poucas informações, mas que permitem o usuário acompanhar suas consultas, medicamentos, água diária, além de funcionalidades personalizadas de acordo com o perfil de cada usuário.",
        galeria: []
    },
    {
        id: 5,
        nome: "Rank-Up",
        categoria: "Web",
        linguagem: "React + SpringBoot",
        repositorio: "https://github.com/ArturSalesFrancisco/rank-up",
        concluido: false,
        img: HomeRankUp,
        descricao: "Rank-Up é meu segundo projeto individual, ainda em construção, que surge da necessidade de catalogar minhas coisas favoritas (sobre literalmente qualquer assunto). Nessa aplicação, será possível criar cards de avaliação sobre o que você quiser e depois adicioná-las em um ranking, seja um top 3, 5, 10 ou quem sabe quantos?",
        funcionalidade: "O projeto em que estou trabalhando no momento. Rank-Up tem a ideia de permitir ao usuário rankear literalmente qualquer coisa que quiser, criando cards com nota, categoria e descrição da avaliação e depois adicionando em ranks, que seriam como pastas que ordenam suas avaliações a partir de um critério estabelecido por você. Futuramente, a ideia do Rank-Up é compartilhar publicamente suas avaliações com outros usuários, funcionando como uma espécie de rede social na qual é possível exibir seus gostos predilétos.",
        galeria: []
    }
]