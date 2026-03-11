import Phaser from 'phaser';

export class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MenuScene' });
  }

  create() {
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;

    this.add.text(width / 2, height / 3, 'QA Game', {
      fontSize: '64px',
      color: '#ffffff',
    }).setOrigin(0.5);

    this.add.text(width / 2, height / 2, 'Clique para Iniciar', {
      fontSize: '32px',
      color: '#00ff00',
    }).setOrigin(0.5);

    this.input.on('pointerdown', () => {
      this.scene.start('GameScene');
    });
  }
}
