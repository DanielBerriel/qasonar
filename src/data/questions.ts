export interface Question {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
}

export interface Session {
  id: number;
  title: string;
  theme: string;
  questions: Question[];
}

export const sessions: Session[] = [
  {
    id: 1,
    title: "Fundamentos de QA",
    theme: "fundamentos-qa",
    questions: [
      {
        id: 1,
        question: "O que significa QA?",
        options: [
          "Quick Analysis",
          "Quality Assurance",
          "Question Answer",
          "Quality Audit"
        ],
        correctIndex: 1,
        explanation: "QA significa Quality Assurance (Garantia de Qualidade)"
      },
      {
        id: 2,
        question: "Qual é o objetivo principal do QA?",
        options: [
          "Criar novos recursos",
          "Escrever documentação",
          "Garantir a qualidade do software",
          "Gerenciar a equipe"
        ],
        correctIndex: 2,
        explanation: "O objetivo principal é garantir a qualidade do software"
      },
      {
        id: 3,
        question: "O que é um bug de severidade alta?",
        options: [
          "Erro cosmético",
          "Impede o uso do sistema",
          "Apenas um warning",
          "Problema de documentação"
        ],
        correctIndex: 1,
        explanation: "Bugs de alta severidade impedem o uso do sistema"
      },
      {
        id: 4,
        question: "O que é teste de regressão?",
        options: [
          "Teste de performance",
          "Teste de segurança",
          "Teste de usabilidade",
          "Verifica se mudanças não quebraram funcionalidades existentes"
        ],
        correctIndex: 3,
        explanation: "Teste de regressão verifica se alterações não quebraram funcionalidades existentes"
      },
      {
        id: 5,
        question: "Qual a diferença entre teste funcional e não-funcional?",
        options: [
          "Não há diferença",
          "Funcional é automático; não-funcional é manual",
          "Funcional verifica funcionalidades; não-funcional verifica performance, segurança, etc.",
          "Funcional é para frontend; não-funcional é para backend"
        ],
        correctIndex: 2,
        explanation: "Teste funcional verifica funcionalidades; não-funcional verifica performance, segurança, etc."
      },
      {
        id: 6,
        question: "O que é teste de smoke?",
        options: [
          "Teste rápido para verificar se funcionalidades principais funcionam",
          "Teste de segurança",
          "Teste de performance",
          "Teste de fumaça real"
        ],
        correctIndex: 0,
        explanation: "Smoke test é um teste rápido para verificar se as funcionalidades principais estão funcionando"
      },
      {
        id: 7,
        question: "O que é uma user story?",
        options: [
          "Uma história de usuário em formato de documento",
          "Uma descrição curta de uma funcionalidade do ponto de vista do usuário",
          "Um caso de teste",
          "Um bug reportado"
        ],
        correctIndex: 1,
        explanation: "User story é uma descrição curta de uma funcionalidade do ponto de vista do usuário"
      },
      {
        id: 8,
        question: "Qual a principal vantagem do teste automatizado?",
        options: [
          "Custa mais caro",
          "Substitui completamente o teste manual",
          "Não precisa de manutenção",
          "Execução rápida e repetível"
        ],
        correctIndex: 3,
        explanation: "A principal vantagem é a execução rápida e repetível dos testes"
      },
      {
        id: 9,
        question: "O que é teste de integração?",
        options: [
          "Teste de banco de dados apenas",
          "Teste que verifica a comunicação entre diferentes módulos ou sistemas",
          "Teste de uma única unidade de código",
          "Teste de interface com o usuário"
        ],
        correctIndex: 1,
        explanation: "Teste de integração verifica a comunicação entre diferentes módulos ou sistemas"
      },
      {
        id: 10,
        question: "O que é a técnica de Boundary Value Analysis?",
        options: [
          "Testar valores aleatórios",
          "Testar apenas valores positivos",
          "Testar os limites mínimos e máximos de um intervalo",
          "Testar apenas valores no meio do intervalo"
        ],
        correctIndex: 2,
        explanation: "Boundary Value Analysis testa os limites mínimos e máximos de um intervalo de valores"
      }
    ]
  },
  {
    id: 2,
    title: "Testes de API",
    theme: "testes-api",
    questions: [
      {
        id: 1,
        question: "Qual método HTTP é usado para criar um recurso?",
        options: ["GET", "PUT", "POST", "DELETE"],
        correctIndex: 2,
        explanation: "POST é usado para criar novos recursos"
      },
      {
        id: 2,
        question: "O que significa o código HTTP 200?",
        options: ["Erro do servidor", "Recurso não encontrado", "Criado com sucesso", "Sucesso na requisição"],
        correctIndex: 3,
        explanation: "200 OK significa que a requisição foi bem sucedida"
      },
      {
        id: 3,
        question: "Qual código HTTP indica 'Não Autorizado'?",
        options: ["404", "401", "500", "403"],
        correctIndex: 1,
        explanation: "401 Unauthorized indica que a autenticação é necessária"
      },
      {
        id: 4,
        question: "O que é um endpoint em uma API?",
        options: ["Uma URL específica que expõe uma funcionalidade", "Um banco de dados", "Um tipo de autenticação", "Um formato de dados"],
        correctIndex: 0,
        explanation: "Endpoint é uma URL específica que expõe uma funcionalidade da API"
      },
      {
        id: 5,
        question: "Qual ferramenta é comum para testar APIs?",
        options: ["Insomnia", "SoapUI", "Swagger", "Postman"],
        correctIndex: 3,
        explanation: "Postman é uma ferramenta muito utilizada para testar APIs"
      },
      {
        id: 6,
        question: "O que é REST API?",
        options: [
          "Um tipo de servidor",
          "Um estilo de arquitetura para serviços web",
          "Um banco de dados",
          "Uma linguagem de programação"
        ],
        correctIndex: 1,
        explanation: "REST é um estilo de arquitetura para serviços web que utiliza HTTP"
      },
      {
        id: 7,
        question: "Qual código HTTP indica 'Recurso não encontrado'?",
        options: ["404", "200", "201", "500"],
        correctIndex: 0,
        explanation: "404 Not Found indica que o recurso solicitado não foi encontrado"
      },
      {
        id: 8,
        question: "O que é JSON?",
        options: [
          "Um framework web",
          "Um tipo de banco de dados",
          "Um formato leve de troca de dados",
          "Uma linguagem de programação"
        ],
        correctIndex: 2,
        explanation: "JSON (JavaScript Object Notation) é um formato leve de troca de dados"
      },
      {
        id: 9,
        question: "Qual método HTTP é usado para atualizar um recurso?",
        options: ["DELETE", "GET", "POST", "PUT"],
        correctIndex: 3,
        explanation: "PUT é usado para atualizar um recurso existente"
      },
      {
        id: 10,
        question: "O que é autenticação Bearer Token?",
        options: [
          "Um formato de URL",
          "Um tipo de criptografia",
          "Um método de autenticação que usa tokens no cabeçalho HTTP",
          "Um tipo de banco de dados"
        ],
        correctIndex: 2,
        explanation: "Bearer Token é um método de autenticação que envia o token no cabeçalho Authorization"
      }
    ]
  },
  {
    id: 3,
    title: "Automação com Cypress",
    theme: "cypress",
    questions: [
      {
        id: 1,
        question: "Qual comando Cypress é usado para selecionar um elemento?",
        options: ["cy.get()", "document.querySelector", "querySelector", "document.getElementById"],
        correctIndex: 0,
        explanation: "cy.get() é o comando do Cypress para selecionar elementos"
      },
      {
        id: 2,
        question: "Como você afirma que um elemento contém texto no Cypress?",
        options: ["assert.contains()", "should('have.text')", "expect.text()", "verify.contains()"],
        correctIndex: 1,
        explanation: "should('contain.text') ou should('have.text') verifica o texto de um elemento"
      },
      {
        id: 3,
        question: "O que faz o comando cy.visit()?",
        options: ["Fecha o navegador", "Abre uma URL específica", "Faz uma captura de tela", "Executa um teste"],
        correctIndex: 1,
        explanation: "cy.visit() abre uma URL específica no navegador do Cypress"
      },
      {
        id: 4,
        question: "Qual é a extensão dos arquivos de teste Cypress?",
        options: [".test.js", ".cyp.js", ".cy.js", ".spec.js"],
        correctIndex: 3,
        explanation: "Os arquivos de teste Cypress usam a extensão .spec.js"
      },
      {
        id: 5,
        question: "Como você verifica se um elemento está visível no Cypress?",
        options: ["setTimeout()", "should('be.visible')", "sleep(1000)", "cy.wait()"],
        correctIndex: 1,
        explanation: "should('be.visible') verifica que um elemento está visível na página"
      },
      {
        id: 6,
        question: "O que é o comando cy.contains()?",
        options: [
          "Para conectar ao banco de dados",
          "Para criar um novo elemento",
          "Para encontrar elemento pelo texto",
          "Para fazer uma requisição HTTP"
        ],
        correctIndex: 2,
        explanation: "cy.contains() encontra um elemento pelo texto que ele contém"
      },
      {
        id: 7,
        question: "O que é o arquivo cypress.config.ts?",
        options: [
          "Um arquivo de teste",
          "Um arquivo de dados",
          "Arquivo de configuração do Cypress",
          "Um relatório de resultados"
        ],
        correctIndex: 2,
        explanation: "cypress.config.ts é o arquivo de configuração do Cypress"
      },
      {
        id: 8,
        question: "Como você clica em um elemento no Cypress?",
        options: ["cy.press()", "cy.tap()", "cy.select()", "cy.click()"],
        correctIndex: 3,
        explanation: "cy.click() é o comando para clicar em um elemento"
      },
      {
        id: 9,
        question: "O que faz o comando cy.url()?",
        options: [
          "Altera a URL",
          "Retorna a URL atual da página",
          "Cria uma nova URL",
          "Deleta uma URL"
        ],
        correctIndex: 1,
        explanation: "cy.url() retorna a URL atual da página"
      },
      {
        id: 10,
        question: "Como você verifica que um elemento não está visível no Cypress?",
        options: [
          "should('have.text')",
          "should('not.be.visible')",
          "should('be.hidden')",
          "should('not.exist')"
        ],
        correctIndex: 1,
        explanation: "should('not.be.visible') verifica que um elemento não está visível na página"
      }
    ]
  }
];
