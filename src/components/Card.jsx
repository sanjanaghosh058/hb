import { useEffect, useState } from 'react';
import './Card.css';

function Card({ data, direction }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, [data.id]);

  if (data.type === 'text-image') {
    return (
      <div className={`card card-text-image ${isVisible ? 'visible' : ''} direction-${direction}`}>
        <div className={`card-content layout-${data.imagePosition}`}>
          <div className="text-side">
            <h2 className="card-title">{data.title}</h2>
            {data.content.map((paragraph, index) => (
              <p key={index} className="card-paragraph">{paragraph}</p>
            ))}
            {data.emphasis && (
              <p className="card-emphasis">{data.emphasis}</p>
            )}
            {data.highlight && (
              <p className="card-highlight">{data.highlight}</p>
            )}
          </div>
          <div className="image-side">
            <div className="image-container">
              <div className="image-glow"></div>
              <img src={data.image} alt={data.title} className="card-image" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (data.type === 'closing') {
    return (
      <div className={`card card-closing ${isVisible ? 'visible' : ''}`}>
        <div className="card-content">
          <div className="closing-content">
            <h2 className="card-title">{data.title}</h2>
            {data.content.map((paragraph, index) => (
              <p key={index} className="card-paragraph">{paragraph}</p>
            ))}
            <p className="card-highlight">{data.highlight}</p>
          </div>
        </div>
      </div>
    );
  }

  if (data.type === 'confession') {
    return (
      <div className={`card card-confession ${isVisible ? 'visible' : ''}`}>
        <div className="card-content">
          <div className="confession-content">
            <h2 className="card-title">{data.title}</h2>
            {data.content.map((paragraph, index) => (
              <p key={index} className="card-paragraph">{paragraph}</p>
            ))}
            <p className="card-emphasis">{data.emphasis}</p>
            {data.extraContent && data.extraContent.map((paragraph, index) => (
              <p key={`extra-${index}`} className="card-paragraph">{paragraph}</p>
            ))}
            <p className="love-declaration">{data.loveDeclaration}</p>
            {data.finalWords && data.finalWords.map((paragraph, index) => (
              <p key={`final-${index}`} className="card-paragraph">{paragraph}</p>
            ))}
            <p className="card-emphasis">{data.finalEmphasis}</p>
          </div>
        </div>
      </div>
    );
  }

  if (data.type === 'poem') {
    return (
      <div className={`card card-poem ${isVisible ? 'visible' : ''}`}>
        <div className="card-content">
          <div className="poem-content">
            <div className="poem-box">
              {data.lines.map((line, index) => (
                <p key={index} className="hindi-line">{line}</p>
              ))}
              <p className="hindi-line last-line">{data.lastLine}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default Card;
