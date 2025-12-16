import { useState, useEffect, useCallback } from 'react';
import './Carousel.css';
import Card from './Card';
import Navigation from './Navigation';
import DotsIndicator from './DotsIndicator';

const cardsData = [
  {
    id: 1,
    type: 'text-image',
    imagePosition: 'right',
    title: "Before you open anything else…",
    content: [
      "I want you to know this. I didn't make this webpage just for your birthday. I made it because sometimes words alone aren't enough to show what someone means to you.",
      "Every picture here… every memory…every small moment of your life…feels like a story I always wanted to understand more deeply.",
      "You might think these are just photos. But for me, they are pieces of a girl I admire in ways I never managed to say out loud: her strength, her softness, her stubbornness, her innocence, her fire, her quiet beauty."
    ],
    highlight: '"You deserve to be celebrated not for how you look, but for who you are."',
    image: '/1.jpg'
  },
  {
    id: 2,
    type: 'text-image',
    imagePosition: 'left',
    title: "This little version of you…",
    content: [
      "she had eyes full of wonder and a heart untouched by the world's noise. She had dreams that sparkled before life could complicate anything.",
      "And what amazes me is even now, that same innocence sits quietly behind your smile, the same pure kindness in the way you talk, the same softness in your heart."
    ],
    emphasis: "You never lost that. And it's one of the most beautiful things about you.",
    image: '/2.jpg'
  },
  {
    id: 3,
    type: 'text-image',
    imagePosition: 'right',
    title: "Transformation",
    content: [
      "This collage feels like watching sunrise turn into daylight. The little girl who didn't know anything about heartbreak or responsibility…grew into a woman who carries both tenderness and strength in the same hands.",
      "Your journey isn't just growth it's transformation."
    ],
    emphasis: "And seeing both versions of you side by side… it's like witnessing how beautifully time has shaped you.",
    image: '/3.jpg'
  },
  {
    id: 4,
    type: 'text-image',
    imagePosition: 'left',
    title: "Evidence of Courage",
    content: [
      "This picture isn't just a milestone. It's evidence of every sacrifice, every fear, every night you push through alone.",
      "People see the gown, the smile, the certificate. But I see the courage. The determination. The unshakeable willpower."
    ],
    emphasis: "You achieved something big and you did it with grace. I'm proud of you… more than you'll ever know.",
    image: '/4.jpg'
  },
  {
    id: 5,
    type: 'text-image',
    imagePosition: 'right',
    title: "Your Roots",
    content: [
      "This picture is the quietest one… but the one that speaks the loudest. Your roots. Your home. Your safe place.",
      "Everything that shaped your heart into the gentle, caring, loving thing it is today."
    ],
    emphasis: "And seeing you stand with them… I can feel the warmth you grew up with. It explains the kind of woman you became.",
    image: '/5.jpg'
  },
  {
    id: 6,
    type: 'text-image',
    imagePosition: 'left',
    title: "Magical Freedom",
    content: [
      "There's something magical about this one. The wind in your hair, the energy in your eyes… you look free like someone who didn't need anyone to complete her.",
      "Because she already carried a whole universe inside her."
    ],
    emphasis: "And that's the version of you I always admired from a distance… the version that makes the world feel a little more alive just by being in it.",
    image: '/6.jpg'
  },
  {
    id: 7,
    type: 'text-image',
    imagePosition: 'right',
    title: "Grace Personified",
    content: [
      "You in a saree… that's a different level of breathtaking. There's grace, femininity, elegance and something deeper… something that makes people pause without realising it."
    ],
    emphasis: "If beauty had a heartbeat, it would look like you in this picture.",
    image: '/7.jpg'
  },
  {
    id: 8,
    type: 'text-image',
    imagePosition: 'left',
    title: "Frozen in Time",
    content: [
      "Some pictures don't need words. This one is like a moment frozen in time your calmness, your glow, your silent beauty.",
      "Not loud, not dramatic, not trying to be perfect… just effortlessly captivating."
    ],
    emphasis: "You have a way of looking beautiful without even trying and that's rare.",
    image: '/8.jpg'
  },
  {
    id: 9,
    type: 'text-image',
    imagePosition: 'right',
    title: "Effortless Charm",
    content: [
      "This picture is comfort. Warmth. Simplicity. The kind of effortless charm that makes someone feel at home without knowing why."
    ],
    emphasis: "It's the kind of beauty that doesn't shout it whispers. And sometimes, whispers hit deeper than anything else.",
    image: '/9.jpg'
  },
  {
    id: 10,
    type: 'text-image',
    imagePosition: 'left',
    title: "Celebration Itself",
    content: [
      "You looked like celebration itself that day like the moment you smiled, the whole room softened.",
      "I remember looking at you and thinking, \"If beauty had a language, today she's speaking it.\""
    ],
    emphasis: "You didn't just look beautiful… you looked divine. The kind of divine that stays in someone's mind long after the moment ends.",
    image: '/10.jpg'
  },
  {
    id: 11,
    type: 'closing',
    title: "If you're reading this…",
    content: [
      "thank you for letting me share this small world with you.",
      "I didn't make this to impress you. I made it because you matter more than you think, more than I ever said.",
      "Our story hasn't been perfect. It had chaos, silence, misunderstandings… but it also had warmth, laughter, comfort, care, and moments that felt too precious to ever forget.",
      "And somewhere in the middle of all that you became someone I don't know how to unfeel.",
      "I don't want to rush you. I don't want to trap you. I don't want to force your heart.",
      "I just wanted to give you something soft…something beautiful… something worthy of the girl who once made my world feel lighter just by being in it."
    ],
    highlight: "Happy Birthday… to the woman who became my sweetest memory."
  },
  {
    id: 12,
    type: 'confession',
    title: "Final Confession",
    content: [
      "You know… I never understood how two people could drift apart and still feel connected, until us.",
      "Because even in the quiet spaces, even in the distance, you stayed with me in a way I can't explain.",
      "And it reminds me of Monica and Chandler. They weren't some big dramatic love story. They didn't fall in love in one grand moment it happened slowly, softly, in the small ways they showed up for each other.",
      "A friendship that turned into a feeling… a feeling that refused to disappear… and a bond that became home without either of them even realising it."
    ],
    emphasis: "And that's exactly what you became for me.",
    extraContent: [
      "With you, everything felt familiar like I didn't have to pretend, didn't have to impress, didn't have to hide the messy parts of me.",
      "I don't know how to express this except to say:"
    ],
    loveDeclaration: "I'm in love with you.",
    finalWords: [
      "Not in the dramatic way… but in the steady, \"you're my safe place\" way."
    ],
    finalEmphasis: "And if life ever gives us even the smallest chance I want to show you a love that's patient, warm, soft, steady… the kind of love that grows quietly but stays forever."
  },
  {
    id: 13,
    type: 'poem',
    lines: [
      "प्रिय ! लिखकर..... नीचे लिख दूं नाम तुम्हारा,",
      "कुछ जगह बीच में छोड़",
      "नीचे लिख दूं सदा तुम्हारा !!",
      "लिखा बीच में क्या ? ये तुमको पढ़ना है !",
      "कागज़ पर मन की भाषा का अर्थ समझना है !",
      "जो भी अर्थ निकलोगे तुम वो मुझको स्वीकार"
    ],
    lastLine: "झुके नैन... मौन अधर... या कोरा कागज़, अर्थ सभी का प्यार है|"
  }
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('next');

  const nextCard = useCallback(() => {
    setDirection('next');
    setCurrentIndex((prev) => (prev + 1) % cardsData.length);
  }, []);

  const prevCard = useCallback(() => {
    setDirection('prev');
    setCurrentIndex((prev) => (prev - 1 + cardsData.length) % cardsData.length);
  }, []);

  const goToCard = useCallback((index) => {
    setDirection(index > currentIndex ? 'next' : 'prev');
    setCurrentIndex(index);
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevCard();
      if (e.key === 'ArrowRight') nextCard();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextCard, prevCard]);

  return (
    <div className="carousel-wrapper">
      <div className="carousel-background">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="floating-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="carousel-container">
        <Card
          data={cardsData[currentIndex]}
          direction={direction}
        />
      </div>

      <Navigation
        onPrev={prevCard}
        onNext={nextCard}
      />

      <DotsIndicator
        total={cardsData.length}
        current={currentIndex}
        onChange={goToCard}
      />
    </div>
  );
}

export default Carousel;
