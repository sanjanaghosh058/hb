import './Navigation.css';

function Navigation({ onPrev, onNext }) {
  return (
    <>
      <button className="nav-btn prev-btn" onClick={onPrev} aria-label="Previous">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <button className="nav-btn next-btn" onClick={onNext} aria-label="Next">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </>
  );
}

export default Navigation;
