import Phaser from 'phaser';

export class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' });
  }

  preload() {
    this.load.image('logo', '/assets/logo.png');
    this.load.image('background', '/assets/background.png');
  }

  create() {
    this.scene.start('MenuScene');
  }
}
