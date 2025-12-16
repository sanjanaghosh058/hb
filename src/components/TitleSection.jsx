import { useEffect, useState } from 'react';
import './TitleSection.css';

function TitleSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className={`title-section ${visible ? 'visible' : ''}`}>
      <div className="floating-hearts">
        {[...Array(15)].map((_, i) => (
          <span key={i} className="heart" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${10 + Math.random() * 5}s`
          }}>
            ♥
          </span>
        ))}
      </div>
      <div className="title-content">
        <h1 className="main-title">
          <span className="title-word">Happy</span>
          <span className="title-word">Birthday</span>
          <span className="title-word">Mummum</span>
        </h1>
        <div className="subtitle-wrapper">
          <p className="subtitle">The Girl who became my Favourite Memory</p>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </div>
  );
}

export default TitleSection;
