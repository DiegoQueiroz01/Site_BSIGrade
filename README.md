Grade Curricular Interativa - BSI (IFBA)

Uma ferramenta web interativa desenvolvida para auxiliar estudantes de Sistemas de Informação no acompanhamento do seu progresso acadêmico. O projeto permite visualizar a 
árvore de pré-requisitos, marcar matérias concluídas e acessar um repositório centralizado de materiais de estudo.

Funcionalidades:

* Visualização de Pré-requisitos (Hover): Ao passar o mouse sobre uma disciplina, o sistema destaca automaticamente seus pré-requisitos, matérias que ela desbloqueia e o fluxo posterior.
* Gestão de Progresso: Sistema de marcação de matérias concluídas com persistência de dados via LocalStorage, garantindo que o progresso seja salvo individualmente por matrícula.
* Barra de Progresso Dinâmica: Cálculo em tempo real da porcentagem de conclusão do curso.
* Repositório de Materiais: Modal interativo que centraliza links para provas antigas, resumos e apostilas hospedadas no Google Drive.
* Sistema de Contribuição: Botão integrado para que a comunidade acadêmica possa sugerir novos materiais através de formulários.

Tecnologias Utilizadas:

* Frontend: HTML5 semântico e CSS3 customizado.
* Framework CSS: Bootstrap 5 para componentes de interface (Modais, Progress Bars) e responsividade.
* Lógica: JavaScript (ES6+) para manipulação de DOM e lógica de requisitos.
* Armazenamento: LocalStorage API para persistência local dos dados do aluno.
* Ícones: Bootstrap Icons.

Como usar o projeto:

1º Faça o login com sua matrícula (os dados são salvos localmente).

2º Navegue pelos semestres para entender a árvore de dependências.

3º Clique em um card de disciplina para abrir os detalhes.

4º No modal, você pode marcar a matéria como feita ou acessar os materiais de estudo disponíveis.

Estrutura do Código:

* index.html: Estrutura principal da grade e modais.
* requisito.js: Lógica de interatividade, cálculo de progresso e banco de dados do repositório.
* grade.css: Estilização temática (Dark Mode) e efeitos visuais de hover.

Autor:

Desenvolvido por Diêgo como parte do portfólio de Sistemas de Desenvolvimento.

Focado em criar soluções que facilitem a vida acadêmica e profissional através da tecnologia.
