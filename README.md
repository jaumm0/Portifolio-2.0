## Portfólio 2.0 – João Victor

Portfólio pessoal desenvolvido com **React 19**, **Vite 7** e **Tailwind CSS 4**, focado em **animações modernas**, **microinterações** e uma **experiência responsiva** para apresentar suas habilidades e projetos como desenvolvedor frontend.

---

### 🔗 Links importantes

- **Demo online**: `https://jaumm0.github.io/Portifolio-2.0`
- **Repositório**: `https://github.com/jaumm0/Portifolio-2.0`  
- **Tecnologias principais**: React 19, Vite 7, Tailwind CSS 4, Framer Motion, GSAP, Lucide React

---

### 📚 Sumário

- [Sobre o projeto](#sobre-o-projeto)
- [Tecnologias e dependências](#tecnologias-e-dependências)
- [Estrutura das seções](#estrutura-das-seções)
- [Como rodar o projeto localmente](#como-rodar-o-projeto-localmente)
- [Scripts disponíveis](#scripts-disponíveis)
- [Deploy no GitHub Pages](#deploy-no-github-pages)
- [Personalização](#personalização)
- [Melhorias futuras (idéias)](#melhorias-futuras-idéias)
- [Licença](#licença)

---

### 🧾 Sobre o projeto

Este projeto é a segunda versão do seu portfólio (`Portifolio 2.0`), criado para:

- **Apresentar suas habilidades** como desenvolvedor frontend.
- **Mostrar projetos reais** com links de **Live Demo** e **repositórios**.
- Entregar uma interface com **design moderno**, **movimento** e **efeitos visuais** usando animações avançadas.
- Ser facilmente **escalável e personalizável**, permitindo evoluir o portfólio conforme novos projetos forem surgindo.

O site é **single-page** com navegação por âncoras (scroll suave entre seções), otimizando a experiência do usuário.

---

### 🛠 Tecnologias e dependências

**Core**

- **React** `^19.2.0`
- **React DOM** `^19.2.0`
- **Vite** `^7.3.1`
- **Tailwind CSS** `^4.1.18`
- **@tailwindcss/vite** `^4.1.18`

**Animações e UI**

- **Framer Motion** `^12.34.0` – animações de entrada/scroll (fade, translate, etc.)
- **GSAP** `^3.14.2` – animações avançadas (partículas, spotlight, tilt, magnetismo) usadas em `MagicBento`
- **Lucide React** `^0.563.0` – ícones SVG modernos
- **radix-ui / shadcn / tw-animate-css** – utilitários de UI e animação

**Utilitários**

- **class-variance-authority**, **clsx**, **tailwind-merge** – composição e organização de classes Tailwind
- **module-alias**, **path** – alias de caminhos (por exemplo `@` apontando para `src`)

**Ferramentas de desenvolvimento**

- **ESLint 9** + plugins (`eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`)
- **Type definitions** para React e React DOM
- **gh-pages** – deploy automatizado para GitHub Pages via script

---

### 🧱 Estrutura das seções

As principais seções da página são definidas em componentes React dentro de `src/components`.

#### Cabeçalho / Navegação – `Header.jsx`

- Menu fixo (sticky) no topo com **modo desktop e mobile**.
- Utiliza ícone de menu hamburguer (`Menu` do Lucide React).
- Links de navegação:
  - `#inicio`
  - `#sobre`
  - `#skills`
  - `#projetos`
  - `#contato`
- Em telas menores, o menu vira um **dropdown responsivo** que abre/fecha via `useState`.

#### Sobre mim – `About.jsx` + `MagicBento.jsx`

- Seção com `id="sobre"`.
- Uso de **Framer Motion** para animar:
  - Label `// SOBRE MIM`
  - Título principal: “Construindo o futuro, um pixel por vez”
  - Parágrafo de descrição sobre você (React, TypeScript, frontend moderno).
- Inclui o componente especial **`MagicBento`**, que:
  - Cria um grid de **cards interativos** com:
    - Efeito de partículas (GSAP).
    - Spotlight global seguindo o mouse.
    - Tilt/magnetismo opcional.
    - Border glow reativo à posição do mouse.
  - Exibe cards como:
    - `Código Limpo`
    - `Design Pixel-Perfect`
    - `Performance`

#### Skills – `Skills.jsx`

- Seção com `id="skills"`.
- Layout em duas colunas em telas grandes:
  - **Esquerda**: título “Tecnologias & Ferramentas” + barras de proficiência:
    - React
    - Javascript
    - Tailwind CSS
    - TypeScript
    - Figma
  - **Direita**: grid com **outras ferramentas**:
    - Git, Supabase, GitHub, Vite, MySQL, REST APIs
- Animações com Framer Motion para:
  - Entradas das barras.
  - Texto com efeitos de fade/translate.
- Totalmente **responsiva**, adaptando de 1 a 2 colunas.

#### Projetos – `Projects.jsx`

- Seção com `id="projetos"`.
- Título “Trabalhos recentes”.
- Cada projeto tem:
  - **Imagem de destaque** (importada de `./img/...jpg`).
  - Nome, descrição e stack usada.
  - **Badges** com tecnologias, ex.: `React 19`, `Tailwind CSS 4`, `React Router`, `Vite 7`, `API GitHub`.
  - Links:
    - **Live Demo** (ícone `SquareArrowOutUpRight`).
    - **Repositório** no GitHub (ícone `Github`).
- Projetos atuais:
  - **Landing Page Odonto**
  - **Search Profile GitHub API**
  - **Landing Page Psiquiatra**
- Layout alternando imagem/texto para criar ritmo visual em telas grandes.

#### Logo Loop / Marcas – `LogoLoop.jsx` (se usado em alguma seção)

- Componente de loop infinito de logos/ícones.
- Suporte a:
  - Direções (`left`, `right`, `up`, `down`).
  - Velocidade customizável.
  - `pauseOnHover` / `hoverSpeed`.
  - `fadeOut` nas bordas.
  - `scaleOnHover`.
- Implementado com:
  - **ResizeObserver** para ajustar cópias necessárias.
  - Loop de animação com `requestAnimationFrame`.

#### Contato

- Existe um link `#contato` no `Header.jsx`, que aponta para a seção de contato (componente não listado aqui, mas você pode descrevê-la como:
  - Área para **chamada para ação** (ex.: “Vamos conversar?”).
  - Links para e-mail, LinkedIn, GitHub e/ou formulário.

---

### 💻 Como rodar o projeto localmente

#### Pré-requisitos

- **Node.js** 18+ (recomendado LTS mais recente)
- **npm** (ou **yarn/pnpm**, se preferir adaptar os comandos)

#### Passo a passo

1. **Clonar o repositório**

   git clone https://github.com/jaumm0/Portifolio-2.0.git
   cd Portifolio-2.0
   