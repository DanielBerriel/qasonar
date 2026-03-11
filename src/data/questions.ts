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
          "Quality Assurance",
          "Quick Analysis",
          "Question Answer",
          "Quality Audit"
        ],
        correctIndex: 0,
        explanation: "QA significa Quality Assurance (Garantia de Qualidade)"
      },
      {
        id: 2,
        question: "Qual é o objetivo principal do QA?",
        options: [
          "Criar novos recursos",
          "Garantir a qualidade do software",
          "Escrever documentação",
          "Gerenciar a equipe"
        ],
        correctIndex: 1,
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
          "Verifica se mudanças não quebraram funcionalidades existentes",
          "Teste de segurança",
          "Teste de usabilidade"
        ],
        correctIndex: 1,
        explanation: "Teste de regressão verifica se alterações não quebraram funcionalidades existentes"
      },
      {
        id: 5,
        question: "Qual a diferença entre teste funcional e não-funcional?",
        options: [
          "Não há diferença",
          "Funcional verifica funcionalidades; não-funcional verifica performance, segurança, etc.",
          "Funcional é automático; não-funcional é manual",
          "Funcional é para frontend; não-funcional é para backend"
        ],
        correctIndex: 1,
        explanation: "Teste funcional verifica funcionalidades; não-funcional verifica performance, segurança, etc."
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
        options: ["Erro do servidor", "Recurso não encontrado", "Sucesso na requisição", "Criado com sucesso"],
        correctIndex: 2,
        explanation: "200 OK significa que a requisição foi bem sucedida"
      },
      {
        id: 3,
        question: "Qual código HTTP indica 'Não Autorizado'?",
        options: ["404", "500", "401", "403"],
        correctIndex: 2,
        explanation: "401 Unauthorized indica que a autenticação é necessária"
      },
      {
        id: 4,
        question: "O que é um endpoint em uma API?",
        options: ["Um banco de dados", "Uma URL específica que expõe uma funcionalidade", "Um tipo de autenticação", "Um formato de dados"],
        correctIndex: 1,
        explanation: "Endpoint é uma URL específica que expõe uma funcionalidade da API"
      },
      {
        id: 5,
        question: "Qual ferramenta é comum para testar APIs?",
        options: ["Photoshop", "Postman", "Excel", "Word"],
        correctIndex: 1,
        explanation: "Postman é uma ferramenta muito utilizada para testar APIs"
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
        options: ["document.querySelector", "cy.get()", "document.getElementById", "querySelector"],
        correctIndex: 1,
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
        options: [".test.js", ".spec.js", ".cyp.js", ".cy.js"],
        correctIndex: 1,
        explanation: "Os arquivos de teste Cypress usam a extensão .spec.js"
      },
      {
        id: 5,
        question: "Como você espera um elemento aparecer no Cypress?",
        options: ["sleep(1000)", "cy.wait()", "should('be.visible')", "setTimeout()"],
        correctIndex: 2,
        explanation: "should('be.visible') é a断言 correta para esperar que um elemento esteja visível"
      }
    ]
  }
];
