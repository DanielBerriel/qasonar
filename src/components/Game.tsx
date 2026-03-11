import { useEffect, useRef } from 'react';
import { startGame } from '../game/main';

export function Game() {
  const gameRef = useRef<Phaser.Game | null>(null);

  useEffect(() => {
    gameRef.current = startGame();

    return () => {
      if (gameRef.current) {
        gameRef.current.destroy(true);
      }
    };
  }, []);

  return <div id="game-container" />;
}
