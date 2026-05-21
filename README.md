# Amigos na Dor

Plataforma de acolhimento e suporte emocional voltada para oferecer escuta ativa, palavras de conforto baseadas na fé e direcionamento em momentos de crise.

O projeto foi desenvolvido para ser um espaço seguro e anônimo onde pessoas em sofrimento podem encontrar apoio imediato através de voluntários treinados.

## 🚀 Principais Funcionalidades

- **Atendimento em Tempo Real:** Integração com chat online para conversas anônimas e sigilosas.
- **Ponto de Apoio 24h:** Direcionamento inteligente para canais de emergência (CVV 188 e SAMU 192) quando os voluntários estão offline.
- **Conteúdo de Reflexão:** Artigos, versículos e reflexões para auxílio espiritual e emocional.
- **Depoimentos:** Espaço para compartilhar experiências de superação e encorajamento.
- **Interface Acessível e Sensível:** Design focado na paz visual, com micro-animações sutis para uma experiência reconfortante.

## 🛠️ Tecnologias Utilizadas

- **React 19**
- **Vite** (Build tool e dev server)
- **Tailwind CSS** (Estilização responsiva)
- **Motion** (Animações fluidas)
- **Lucide React** (Iconografia semântica)
- **React Router Dom** (Sistema de navegação)
- **Tawk.to** (Plataforma de chat humano)

## 💻 Como Rodar Localmente

**Pré-requisitos:** Node.js instalado.

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Acesse no navegador:**
   O projeto estará disponível por padrão em `http://localhost:5173`.

## 🌐 Deploy

O projeto está configurado para deploy estático com **Vite** e **GitHub Pages**.

### Build de produção

```bash
npm run build
```

Os arquivos finais estarão na pasta `dist`.

### GitHub Pages

O projeto usa `BrowserRouter`, então o GitHub Pages precisa de um fallback para rotas internas.
Essa configuração já está preparada com:

- `public/404.html` para redirecionar rotas SPA de volta ao `index.html`
- script em `index.html` para reconstruir a rota original após o redirecionamento
- workflow em `.github/workflows/deploy.yml` para publicar o conteúdo de `dist`

Passos para publicar:

1. Faça push do repositório para o GitHub.
2. Em `Settings > Pages`, configure `Source` como `GitHub Actions`.
3. O deploy será feito automaticamente a cada push na branch `main`.

### Domínio

- Enquanto o projeto estiver publicado em `rodrigo-aniceto.github.io`, a configuração atual funciona na raiz do domínio.
- Quando houver domínio próprio apontado por DNS, a mesma build continua válida, porque o site seguirá sendo servido na raiz.

---

*“Não temas, porque eu sou contigo...” — Isaías 41:10*
