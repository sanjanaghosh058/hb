let currentIndex = 0;
const cards = document.querySelectorAll('.card');
const dots = document.querySelectorAll('.dot');
const totalCards = cards.length;

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

function showCard(index) {
  // Wrap around
  if (index >= totalCards) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalCards - 1;
  } else {
    currentIndex = index;
  }

  // Remove active class from all cards and dots
  cards.forEach(card => {
    card.classList.remove('active', 'prev');
  });
  dots.forEach(dot => {
    dot.classList.remove('active');
  });

  // Add active class to current card and dot
  cards[currentIndex].classList.add('active');
  dots[currentIndex].classList.add('active');
}

function nextCard() {
  showCard(currentIndex + 1);
}

function prevCard() {
  showCard(currentIndex - 1);
}

// Event listeners for buttons
prevBtn.addEventListener('click', prevCard);
nextBtn.addEventListener('click', nextCard);

// Event listeners for dots
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showCard(index);
  });
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') {
    prevCard();
  } else if (e.key === 'ArrowRight') {
    nextCard();
  }
});

// Touch/Swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

document.querySelector('.carousel-wrapper').addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

document.querySelector('.carousel-wrapper').addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  if (touchStartX - touchEndX > 50) {
    nextCard();
  } else if (touchEndX - touchStartX > 50) {
    prevCard();
  }
}

// Initialize first card
showCard(0);

// Optional: Auto-advance after some time (commented out - uncomment if you want auto-play)
// setInterval(nextCard, 8000);
