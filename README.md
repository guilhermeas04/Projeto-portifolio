# Portfólio - Projeto de Software Lab 1

## Descrição do Projeto
Este projeto é uma **Single Page Application (SPA)** desenvolvida para apresentar um portfólio profissional, integrando um back-end em **Node.js** para gerenciamento de dados.  
O site reúne informações sobre experiências e projetos realizados, além de oferecer um canal de contato direto.  

Este projeto está sendo desenvolvido **em grupo** como parte da disciplina **Projeto de Software**, referente ao **4º período** do curso **Engenharia de Software**, **turno noturno**.

---

## Tecnologias Usadas

### Front-end
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" width="20"/> **HTML5** – Estrutura semântica do conteúdo  
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" width="20"/> **CSS** – Estilização moderna e responsiva  
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" width="20"/> **JavaScript** – Interatividade e lógica da aplicação  
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width="20"/> **React.js** – Framework para construção da SPA  
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" alt="Vite" width="20"/> **Vite** – Build rápido e otimizado  

### Back-end
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" width="20"/> **Node.js** – Ambiente de execução do JavaScript no servidor  

---

## Imagens do Protótipo

### Sobre Mim
![Sobre Mim](./assets/prototipo-sobre.jpeg)  
Seção que apresenta um breve resumo profissional, habilidades técnicas e informações pessoais de forma clara e objetiva.

### Projetos
![Projetos](./assets/prototipo-projetos.jpeg)  
Listagem dos principais trabalhos realizados, com imagens, descrições e links para visualização.

### Experiências
![Experiências](./assets/prototipo-experiencias.jpeg)  
Histórico profissional e acadêmico, destacando funções, responsabilidades e conquistas.

### Contato
![Contato](./assets/prototipo-contato.jpeg)  
Área dedicada exclusivamente a botões de acesso rápido para.

### Wire completa
![Wire](./assets/wire.jpeg) 

---

## Estrutura Inicial do Projeto
```plaintext
📦 
├── backend
│   ├── server.js
│   ├── routes
│   │   └── contact.js
│   ├── controllers
│   │   └── contactController.js
│   ├── package.json
│   └── .env
├── frontend
│   ├── public
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src
│   │   ├── components
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── Experience.jsx
│   │   ├── styles
│   │   │   └── global.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
└── README.md
