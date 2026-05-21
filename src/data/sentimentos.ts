/**
 * Dados dos sentimentos para a seção "Como você está hoje?"
 * Cada sentimento contém versículos bíblicos, oração e texto de encorajamento.
 */

export interface Sentimento {
  slug: string;
  nome: string;
  /** Nome do ícone Lucide (linear, sem preenchimento) */
  icone: string;
  descricaoCurta: string;
  versiculoPrincipal: {
    texto: string;
    referencia: string;
  };
  versiculosAdicionais: {
    texto: string;
    referencia: string;
  }[];
  oracaoCurta: string;
  textoEncorajamento: string;
  reflexao: string;
  artigosRelacionados?: string[]; // slugs dos artigos do artigos.json
}

export const sentimentos: Sentimento[] = [
  {
    slug: 'ansiedade',
    nome: 'Ansiedade',
    icone: 'Wind',
    descricaoCurta: 'Quando o coração está inquieto e os pensamentos não param.',
    versiculoPrincipal: {
      texto: 'Não andem ansiosos por coisa alguma, mas em tudo, pela oração e súplicas, e com ação de graças, apresentem seus pedidos a Deus. E a paz de Deus, que excede todo o entendimento, guardará o coração e a mente de vocês em Cristo Jesus.',
      referencia: 'Filipenses 4:6-7',
    },
    versiculosAdicionais: [
      {
        texto: 'Lancem sobre ele toda a ansiedade que vocês têm, porque ele cuida de vocês.',
        referencia: '1 Pedro 5:7',
      },
      {
        texto: 'Não temas, porque eu sou contigo; não te assombres, porque eu sou o teu Deus; eu te fortaleço, e te ajudo, e te sustento com a minha destra fiel.',
        referencia: 'Isaías 41:10',
      },
      {
        texto: 'Quando a ansiedade já me dominava no íntimo, o teu consolo trouxe alívio à minha alma.',
        referencia: 'Salmos 94:19',
      },
    ],
    oracaoCurta: 'Senhor, Tu conheces cada pensamento que me inquieta e cada preocupação que tira meu sono. Eu entrego nas Tuas mãos tudo aquilo que não posso controlar. Acalma o meu coração, Pai, e enche-me da Tua paz que excede todo entendimento. Ajuda-me a confiar que Tu cuidas de mim. Em nome de Jesus. Amém.',
    textoEncorajamento: 'A ansiedade é como uma tempestade interior que nos faz sentir que tudo está fora de controle. Mas Deus nos convida a entregar cada preocupação a Ele — não porque nossos problemas sejam pequenos, mas porque Ele é infinitamente grande. Quando o peso do amanhã parecer insuportável, lembre-se: o mesmo Deus que sustenta o universo é quem cuida de você. Você não precisa carregar esse fardo sozinho. Respire fundo, abra seu coração em oração, e permita que a paz de Deus tome o lugar da inquietação.',
    reflexao: 'A Bíblia nos mostra que até os grandes servos de Deus enfrentaram momentos de profunda ansiedade. Elias, depois de uma grande vitória, fugiu com medo e pediu para morrer (1 Reis 19). Davi clamava a Deus em meio à angústia nos Salmos. O próprio Jesus, no Getsêmani, suou gotas de sangue pela intensidade da angústia (Lucas 22:44). Isso nos mostra que sentir ansiedade não é falta de fé — é parte da experiência humana. O que a Escritura nos ensina é para onde levamos essa ansiedade: aos pés de Cristo.',
    artigosRelacionados: ['busque-o-senhor-nos-tempos-de-angustia', 'confiando-em-deus-nas-tempestades-da-vida'],
  },
  {
    slug: 'tristeza',
    nome: 'Tristeza',
    icone: 'CloudRain',
    descricaoCurta: 'Quando a alma está pesada e as lágrimas insistem em cair.',
    versiculoPrincipal: {
      texto: 'Os que semeiam com lágrimas, ceifarão com jubiloso cântico.',
      referencia: 'Salmos 126:5',
    },
    versiculosAdicionais: [
      {
        texto: 'O choro pode durar uma noite, mas a alegria vem pela manhã.',
        referencia: 'Salmos 30:5',
      },
      {
        texto: 'Eu lhes disse essas coisas para que em mim vocês tenham paz. Neste mundo vocês terão aflições; contudo, tenham ânimo! Eu venci o mundo.',
        referencia: 'João 16:33',
      },
      {
        texto: 'Ele enxugará dos olhos deles toda lágrima; não haverá mais morte, nem tristeza, nem choro, nem dor, pois a antiga ordem já passou.',
        referencia: 'Apocalipse 21:4',
      },
    ],
    oracaoCurta: 'Pai Celestial, minha alma está pesada e as lágrimas estão mais presentes que o sorriso. Tu vês minha dor e recolhes cada lágrima minha. Consola-me com o Teu amor e lembra-me de que esta tristeza é passageira, pois a alegria virá pela manhã. Abraça-me com a Tua presença, ó Deus. Em nome de Jesus. Amém.',
    textoEncorajamento: 'A tristeza é uma emoção profundamente humana, e Deus não nos pede para negá-la. Jesus mesmo chorou diante do túmulo de Lázaro. O que Deus nos oferece é algo maior: a certeza de que a tristeza não terá a última palavra. Por mais escura que a noite pareça, a manhã sempre vem. E nas manhãs de Deus, há restauração, esperança e uma alegria que brota de dentro — não porque as circunstâncias mudaram, mas porque Ele está presente. Permita-se sentir, mas não permaneça sozinho. Deus está mais perto do que você imagina.',
    reflexao: 'A Bíblia não esconde a realidade da tristeza. O livro de Lamentações é um longo poema de dor. Os Salmos estão repletos de clamores de almas aflitas. Mas no coração de cada lamento, há uma âncora de esperança. Em Lamentações 3:22-23, mesmo no auge da desolação, o autor declara: "As misericórdias do Senhor são a causa de não sermos consumidos; elas se renovam cada manhã. Grande é a tua fidelidade." A tristeza nos leva a depender mais de Deus, e é nessa dependência que descobrimos a profundidade do Seu amor.',
    artigosRelacionados: ['perseverando-atraves-da-tristeza-em-oracao', 'busque-o-senhor-nos-tempos-de-angustia'],
  },
  {
    slug: 'solidao',
    nome: 'Solidão',
    icone: 'UserRoundX',
    descricaoCurta: 'Quando você se sente esquecido e isolado de todos.',
    versiculoPrincipal: {
      texto: 'Não te deixarei, nem te desampararei.',
      referencia: 'Hebreus 13:5',
    },
    versiculosAdicionais: [
      {
        texto: 'O Senhor é o meu pastor; nada me faltará. Deitar-me faz em verdes pastos, guia-me mansamente a águas tranquilas.',
        referencia: 'Salmos 23:1-2',
      },
      {
        texto: 'Deus faz que o solitário viva em família; liberta aqueles que estão presos em correntes.',
        referencia: 'Salmos 68:6',
      },
      {
        texto: 'Ainda que meu pai e minha mãe me desamparem, o Senhor me acolherá.',
        referencia: 'Salmos 27:10',
      },
    ],
    oracaoCurta: 'Senhor, eu me sinto só, como se ninguém me visse ou me entendesse. Mas Tu, ó Deus, me vês. Tu me conheces pelo nome e me amas com amor eterno. Preenche o vazio do meu coração com a Tua presença. Mostra-me que nunca estou verdadeiramente sozinho, pois Tu caminhas comigo. Em nome de Jesus. Amém.',
    textoEncorajamento: 'A solidão pode fazer você sentir que é invisível, que ninguém se importa. Mas Deus declara: "Eu te chamei pelo teu nome; tu és meu" (Isaías 43:1). Você não é invisível para Ele. Mesmo quando o mundo parece distante, Deus está mais perto do que sua própria respiração. A solidão não é o fim da sua história — é um convite para descobrir a companhia mais fiel que existe: a presença de Deus que nunca o abandona.',
    reflexao: 'Na Bíblia, muitos enfrentaram solidão profunda. Elias pensou que estava completamente sozinho (1 Reis 19:10), mas Deus revelou que havia ainda sete mil fiéis. Davi, fugindo de Saul, viveu como refugiado em cavernas. O próprio Jesus experimentou a solidão: "Todos o abandonaram e fugiram" (Marcos 14:50). Mas em cada caso, Deus provou que Sua presença é maior que qualquer ausência humana. O Salmo 139 nos garante que não há lugar onde possamos estar fora do alcance de Deus.',
    artigosRelacionados: ['solidao', 'jesus-cristo-e-a-nossa-esperanca'],
  },
  {
    slug: 'medo',
    nome: 'Medo',
    icone: 'ShieldAlert',
    descricaoCurta: 'Quando o futuro parece incerto e o coração treme.',
    versiculoPrincipal: {
      texto: 'Pois Deus não nos deu o espírito de covardia, mas de poder, de amor e de equilíbrio.',
      referencia: '2 Timóteo 1:7',
    },
    versiculosAdicionais: [
      {
        texto: 'O Senhor é a minha luz e a minha salvação; de quem terei medo? O Senhor é o meu forte refúgio; de quem terei receio?',
        referencia: 'Salmos 27:1',
      },
      {
        texto: 'Quando estou com medo, ponho em ti a minha confiança.',
        referencia: 'Salmos 56:3',
      },
      {
        texto: 'Não temas, porque eu te remi; chamei-te pelo teu nome; tu és meu. Quando passares pelas águas, estarei contigo.',
        referencia: 'Isaías 43:1-2',
      },
    ],
    oracaoCurta: 'Pai Amado, o medo está tomando conta de mim. Eu não consigo ver o caminho à frente e meu coração treme. Mas eu escolho confiar em Ti, mesmo no escuro. Tu és maior que qualquer ameaça, mais forte que qualquer perigo. Cobre-me com a Tua proteção e enche-me de coragem com o Teu Espírito. Em nome de Jesus. Amém.',
    textoEncorajamento: 'O medo é uma resposta natural diante do desconhecido, mas Deus nos convida a não ser governados por ele. A frase "Não temas" aparece mais de 365 vezes na Bíblia — uma para cada dia do ano. Isso não significa que é errado sentir medo, mas sim que, a cada dia, Deus oferece uma razão para a coragem. Quando o medo bater à porta, lembre-se: aquele que controla os ventos e as ondas também segura a sua vida nas mãos.',
    reflexao: 'O medo é uma das experiências mais antigas da humanidade. Desde Adão se escondendo no jardim (Gênesis 3:10) até os discípulos apavorados na tempestade (Marcos 4:38), a Bíblia está repleta de relatos de pessoas temendo. Mas em cada caso, a presença de Deus transformou o medo em fé. Josué, diante da missão impossível de liderar Israel, recebeu a ordem: "Sê forte e corajoso, porque o Senhor teu Deus é contigo por onde quer que andares" (Josué 1:9). A coragem bíblica não é a ausência de medo, mas a decisão de confiar em Deus apesar dele.',
    artigosRelacionados: ['confiando-em-deus-nas-tempestades-da-vida', 'confiando-no-tempo-e-na-provisao-de-deus'],
  },
  {
    slug: 'luto',
    nome: 'Luto',
    icone: 'HeartCrack',
    descricaoCurta: 'Quando alguém que amamos já não está mais aqui.',
    versiculoPrincipal: {
      texto: 'Perto está o Senhor dos que têm o coração quebrantado e salva os de espírito oprimido.',
      referencia: 'Salmos 34:18',
    },
    versiculosAdicionais: [
      {
        texto: 'Bem-aventurados os que choram, porque serão consolados.',
        referencia: 'Mateus 5:4',
      },
      {
        texto: 'Porque para mim o viver é Cristo, e o morrer é lucro.',
        referencia: 'Filipenses 1:21',
      },
      {
        texto: 'Irmãos, não queremos que vocês sejam ignorantes quanto aos que dormem, para não se entristecerem como os demais, que não têm esperança.',
        referencia: '1 Tessalonicenses 4:13',
      },
    ],
    oracaoCurta: 'Senhor, a dor da perda é tão grande que meu coração mal consegue suportar. Tu prometeste que estás perto dos que têm o coração quebrantado—peço que essa promessa se torne real em mim agora. Consola-me com a esperança da eternidade, e ajuda-me a atravessar esse vale. Eu sei que um dia não haverá mais lágrimas. Até lá, segura a minha mão. Em nome de Jesus. Amém.',
    textoEncorajamento: 'O luto é o preço do amor — quanto mais amamos, mais profunda é a dor da ausência. Mas o luto cristão é diferente: não é um luto sem esperança. Paulo nos lembra que, para aqueles que creem, a morte não é o fim, mas uma passagem para a glória eterna. Isso não elimina a dor, mas a transforma. Cada lágrima derramada é vista por Deus, cada soluço é ouvido. Permita-se lamentar, pois o luto é um ato de amor. E saiba que o Deus de toda consolação está com você neste vale.',
    reflexao: 'A Bíblia nos dá permissão para chorar. Jesus chorou diante do túmulo de Lázaro (João 11:35), mesmo sabendo que o ressuscitaria. Davi compôs um lamento pela morte de Jônatas e Saul (2 Samuel 1:17-27). O livro de Eclesiastes nos diz que há "tempo de chorar" (Eclesiastes 3:4). O luto é sagrado porque honra o amor que existiu. Mas a mensagem central do evangelho é que a morte foi vencida: "Onde está, ó morte, o seu aguilhão?" (1 Coríntios 15:55). A esperança da ressurreição não apaga a dor do presente, mas nos ancora na certeza de um reencontro eterno.',
    artigosRelacionados: ['perseverando-atraves-da-tristeza-em-oracao', 'jesus-cristo-e-a-nossa-esperanca'],
  },
  {
    slug: 'duvida',
    nome: 'Dúvida',
    icone: 'CircleHelp',
    descricaoCurta: 'Quando a fé vacila e as perguntas parecem maiores que as respostas.',
    versiculoPrincipal: {
      texto: 'Creio, Senhor! Ajuda a minha incredulidade.',
      referencia: 'Marcos 9:24',
    },
    versiculosAdicionais: [
      {
        texto: 'Se, porém, algum de vós necessita de sabedoria, peça-a a Deus, que a todos dá liberalmente e nada lhes impropera; e ser-lhe-á concedida.',
        referencia: 'Tiago 1:5',
      },
      {
        texto: 'Confie no Senhor de todo o seu coração e não se apoie em seu próprio entendimento.',
        referencia: 'Provérbios 3:5',
      },
      {
        texto: 'Jesus lhe disse: Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai senão por mim.',
        referencia: 'João 14:6',
      },
    ],
    oracaoCurta: 'Senhor, minha fé está fraca, e as dúvidas me assaltam. Eu quero acreditar, mas às vezes parece tão difícil. Não me rejeites por questionar — antes, encontra-me nas minhas perguntas. Fortalece minha fé, Pai, e ajuda-me a confiar em Ti mesmo quando não compreendo. Eu creio; ajuda a minha incredulidade. Em nome de Jesus. Amém.',
    textoEncorajamento: 'A dúvida não é o oposto da fé — muitas vezes é o combustível que a fortalece. Os maiores homens e mulheres de Deus tiveram momentos de questionamento. Tomé duvidou, e Jesus não o rejeitou. Em vez disso, veio ao seu encontro e ofereceu evidências. Deus não tem medo das suas perguntas. Ele é grande o suficiente para lidar com todas elas. Se você está duvidando, saiba que isso pode ser o início de uma fé mais profunda e mais genuína.',
    reflexao: 'A Bíblia está cheia de pessoas que questionaram Deus. Abraão perguntou como poderia ter um filho na velhice (Gênesis 17:17). Moisés perguntou por que Deus o escolheu (Êxodo 4:10). João Batista, do cárcere, mandou perguntar se Jesus era realmente o Messias (Mateus 11:3). Em nenhum desses casos Deus rejeitou quem duvidava. O Salmo 42 mostra um salmista lutando com a sensação de que Deus o havia abandonado, e mesmo assim, ele escolhe pregar a si mesmo: "Por que você está assim tão triste, ó minha alma? Ponha a sua esperança em Deus!" (Salmo 42:11). A fé madura não é a que nunca duvida, mas a que continua buscando a Deus mesmo na incerteza.',
    artigosRelacionados: ['deus-conhece-nossas-duvidas', 'jesus-cristo-e-a-nossa-esperanca'],
  },
  {
    slug: 'desanimo',
    nome: 'Desânimo',
    icone: 'BatteryLow',
    descricaoCurta: 'Quando as forças se esgotam e a vontade de seguir em frente desaparece.',
    versiculoPrincipal: {
      texto: 'Mas os que esperam no Senhor renovarão as suas forças, subirão com asas como águias; correrão, e não se cansarão; caminharão, e não se fatigarão.',
      referencia: 'Isaías 40:31',
    },
    versiculosAdicionais: [
      {
        texto: 'Tudo posso naquele que me fortalece.',
        referencia: 'Filipenses 4:13',
      },
      {
        texto: 'Entrega o teu caminho ao Senhor; confia nele, e ele tudo fará.',
        referencia: 'Salmos 37:5',
      },
      {
        texto: 'E não nos cansemos de fazer o bem, pois no tempo próprio colheremos, se não desanimarmos.',
        referencia: 'Gálatas 6:9',
      },
    ],
    oracaoCurta: 'Senhor, estou sem forças. O caminho parece longo demais e eu não sei se consigo continuar. Renova as minhas forças como Tu prometeste. Levanta-me quando eu cair, e quando eu não puder mais andar, carrega-me nos Teus braços. Lembra-me de que a Tua graça é suficiente para mim. Em nome de Jesus. Amém.',
    textoEncorajamento: 'O desânimo é aquela sensação de que não vale mais a pena tentar. Mas a verdade é que Deus não espera que você tenha forças próprias. Ele oferece as Dele. Quando o profeta Elias estava exausto e desejou a morte, Deus não o repreendeu — preparou uma refeição e o deixou descansar (1 Reis 19:5-7). Às vezes, o passo mais espiritual que podemos dar é simplesmente descansar na presença de Deus e permitir que Ele cuide de nós.',
    reflexao: 'Na Bíblia, o desânimo frequentemente antecede um grande mover de Deus. José foi do fundo da cisterna e da prisão ao segundo homem mais poderoso do Egito. Davi viveu anos como fugitivo antes de se tornar rei. Paulo sofreu naufrágios, apedrejamentos e prisões, mas declarou: "Em tudo somos mais que vencedores" (Romanos 8:37). O desânimo não é o veredicto final sobre sua vida — pode ser apenas o capítulo antes da virada. Continue. Deus não terminou de escrever sua história.',
    artigosRelacionados: ['busque-o-senhor-nos-tempos-de-angustia', 'confiando-no-tempo-e-na-provisao-de-deus'],
  },
  {
    slug: 'culpa',
    nome: 'Culpa',
    icone: 'Weight',
    descricaoCurta: 'Quando o peso dos erros passados não deixa você seguir em frente.',
    versiculoPrincipal: {
      texto: 'Se confessarmos os nossos pecados, ele é fiel e justo para nos perdoar os pecados e nos purificar de toda injustiça.',
      referencia: '1 João 1:9',
    },
    versiculosAdicionais: [
      {
        texto: 'Portanto, agora nenhuma condenação há para os que estão em Cristo Jesus.',
        referencia: 'Romanos 8:1',
      },
      {
        texto: 'Quanto está longe o oriente do ocidente, assim afasta de nós as nossas transgressões.',
        referencia: 'Salmos 103:12',
      },
      {
        texto: 'Venham, vamos refletir juntos, diz o Senhor. Mesmo que os seus pecados sejam vermelhos como o carmesim, eles se tornarão brancos como a neve.',
        referencia: 'Isaías 1:18',
      },
    ],
    oracaoCurta: 'Pai, eu carrego o peso dos meus erros e da minha vergonha. Eu sei que pequei, mas Tu prometeste que, se eu confessar, Tu me perdoarias. Eu confesso agora, Senhor. Limpa-me, renova-me e liberta-me dessa culpa que me paralisa. Eu recebo o Teu perdão pela fé. Ajuda-me a me perdoar também. Em nome de Jesus. Amém.',
    textoEncorajamento: 'A culpa pode ser uma corrente invisível que nos prende ao passado. Mas o evangelho é a notícia de que Jesus já pagou o preço por cada erro nosso. Quando Deus perdoa, Ele não apenas esquece — Ele lança nossos pecados no fundo do mar (Miqueias 7:19). Se Deus já não o condena, por que você continua se condenando? Há uma diferença entre a convicção do Espírito Santo, que nos leva ao arrependimento, e a condenação do inimigo, que nos mantém paralisados. Receba a graça. Você é livre.',
    reflexao: 'Pedro negou Jesus três vezes (Lucas 22:54-62) e chorou amargamente. A culpa poderia tê-lo destruído. Mas Jesus, após a ressurreição, procurou Pedro pessoalmente e, três vezes, perguntou: "Você me ama?" (João 21:15-17). A cada resposta, Jesus restaurou Pedro e lhe deu uma nova missão. Davi, após seu pecado com Bate-Seba, escreveu o Salmo 51, um dos mais belos clamores de arrependimento da Bíblia. A culpa não precisa ser o final — pode ser o começo de uma história de redenção.',
    artigosRelacionados: ['deus-conhece-nossas-duvidas', 'onde-buscar-socorro-quando-estou-sofrendo'],
  },
];
