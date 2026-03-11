import Phaser from 'phaser';
import { QAController } from '../configs/QAController';

export class GameScene extends Phaser.Scene {
  private qaController!: QAController;
  private score: number = 0;
  private scoreText!: Phaser.GameObjects.Text;
  private questionText!: Phaser.GameObjects.Text;
  private feedbackText!: Phaser.GameObjects.Text;

  constructor() {
    super({ key: 'GameScene' });
  }

  create() {
    this.qaController = new QAController();
    this.showQuestion();

    this.scoreText = this.add.text(16, 16, 'Pontos: 0', {
      fontSize: '24px',
      color: '#ffffff',
    });

    this.questionText = this.add.text(400, 150, '', {
      fontSize: '20px',
      color: '#ffffff',
      align: 'center',
      wordWrap: { width: 700 },
    }).setOrigin(0.5);

    this.feedbackText = this.add.text(400, 500, '', {
      fontSize: '28px',
      color: '#ffff00',
    }).setOrigin(0.5);

    this.add.text(400, 550, 'Clique em Voltar ao Menu', {
      fontSize: '16px',
      color: '#888888',
    }).setOrigin(0.5);

    this.input.on('pointerdown', (pointer: Phaser.Input.Pointer) => {
      if (pointer.y > 530) {
        this.scene.start('MenuScene');
      }
    });
  }

  private showQuestion() {
    const question = this.qaController.getCurrentQuestion();
    if (!question) {
      this.questionText.setText('Fim de Jogo! Pontuação Final: ' + this.score);
      this.feedbackText.setText('');
      return;
    }

    this.questionText.setText(question.question);
    this.createAnswerButtons(question.options);
  }

  private createAnswerButtons(options: string[]) {
    const startY = 250;
    const spacing = 60;

    options.forEach((option, index) => {
      const button = this.add.text(400, startY + (index * spacing), option, {
        fontSize: '20px',
        color: '#00aaff',
        backgroundColor: '#333333',
        padding: { x: 20, y: 10 },
      })
        .setOrigin(0.5)
        .setInteractive({ useHandCursor: true });

      button.on('pointerdown', () => {
        this.checkAnswer(index);
      });
    });
  }

  private checkAnswer(selectedIndex: number) {
    const question = this.qaController.getCurrentQuestion();
    if (!question) return;

    if (selectedIndex === question.correctIndex) {
      this.score += 10;
      this.scoreText.setText('Pontos: ' + this.score);
      this.feedbackText.setText('Correto! +10 pontos');
      this.feedbackText.setColor('#00ff00');
    } else {
      this.feedbackText.setText('Incorreto! Tente novamente.');
      this.feedbackText.setColor('#ff0000');
    }

    this.time.delayedCall(1500, () => {
      this.feedbackText.setText('');
      this.qaController.nextQuestion();
      this.showQuestion();
    });
  }
}
