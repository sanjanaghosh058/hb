import './DotsIndicator.css';

function DotsIndicator({ total, current, onChange }) {
  return (
    <div className="dots-container">
      {[...Array(total)].map((_, index) => (
        <button
          key={index}
          className={`dot ${index === current ? 'active' : ''}`}
          onClick={() => onChange(index)}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}

export default DotsIndicator;
