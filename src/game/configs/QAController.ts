export interface Question {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
}

export class QAController {
  private questions: Question[];
  private currentIndex: number;

  constructor() {
    this.questions = this.loadQuestions();
    this.currentIndex = 0;
  }

  private loadQuestions(): Question[] {
    return [
      {
        id: 1,
        question: 'Qual é o objetivo principal do QA em um projeto de software?',
        options: [
          'Criar novos recursos',
          'Garantir a qualidade do software',
          'Escrever documentação',
          'Gerenciar a equipe de desenvolvimento',
        ],
        correctIndex: 1,
      },
      {
        id: 2,
        question: 'O que é um teste de regressão?',
        options: [
          'Teste de performance',
          'Teste que verifica se alterações não quebraram funcionalidades existentes',
          'Teste de segurança',
          'Teste de usabilidade',
        ],
        correctIndex: 1,
      },
      {
        id: 3,
        question: 'Qual técnica de teste verifica o comportamento do sistema sem conhecer o código interno?',
        options: [
          'Teste de Caixa Branca',
          'Teste de Integração',
          'Teste de Caixa Preta',
          'Teste Unitário',
        ],
        correctIndex: 2,
      },
      {
        id: 4,
        question: 'O que é um bug sev1 (severidade 1)?',
        options: [
          'Bug pequeno, cosmético',
          'Bug médio, não urgente',
          'Bug crítico que impede o uso do sistema',
          'Bug de documentação',
        ],
        correctIndex: 2,
      },
      {
        id: 5,
        question: 'Qual é a diferença entre teste funcional e teste não-funcional?',
        options: [
          'Não há diferença',
          'Teste funcional verifica funcionalidades; teste não-funcional verifica performance, segurança, etc.',
          'Teste funcional é automático; teste não-funcional é manual',
          'Teste funcional é para frontend; teste não-funcional é para backend',
        ],
        correctIndex: 1,
      },
    ];
  }

  getCurrentQuestion(): Question | null {
    if (this.currentIndex >= this.questions.length) {
      return null;
    }
    return this.questions[this.currentIndex];
  }

  nextQuestion(): void {
    this.currentIndex++;
  }

  reset(): void {
    this.currentIndex = 0;
  }

  getTotalQuestions(): number {
    return this.questions.length;
  }

  getCurrentIndex(): number {
    return this.currentIndex;
  }
}
