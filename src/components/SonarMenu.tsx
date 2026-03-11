import { useState, useEffect } from 'react';
import { sessions } from '../data/questions';
import './SonarMenu.css';

interface SonarMenuProps {
  onSelectSession: (session: typeof sessions[0]) => void;
  isActive: boolean;
}

export function SonarMenu({ onSelectSession, isActive }: SonarMenuProps) {
  const [size, setSize] = useState(500);

  useEffect(() => {
    const calculateSize = () => {
      const minDimension = Math.min(window.innerWidth, window.innerHeight);
      setSize(minDimension * 0.8);
    };

    calculateSize();
    window.addEventListener('resize', calculateSize);
    return () => window.removeEventListener('resize', calculateSize);
  }, []);

  const radius = size * 0.35;
  return (
    <div className="sonar-container">
      <div className="sonar-circle" style={{ width: size, height: size }}>
        <div className="sonar-line" />
        <div className="sonar-rings">
          <div className="sonar-ring ring-1" />
          <div className="sonar-ring ring-2" />
          <div className="sonar-ring ring-3" />
        </div>
        
        {sessions.map((session, index) => {
          const angle = -90 + (index * 120);
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;
          
          return (
            <button
              key={session.id}
              className={`sonar-point point-${index + 1}`}
              style={{ 
                transform: `translate(${x}px, ${y}px)`,
                display: isActive ? 'block' : 'none'
              }}
              onClick={() => onSelectSession(session)}
            >
              <span 
                className="point-label"
                style={{ display: isActive ? 'block' : 'none' }}
              >
                {session.title}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
