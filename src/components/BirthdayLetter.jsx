import { useEffect, useState } from "react";

const lines = [
  "Today is not just another day...",
  "It is a little reminder of how beautiful you are and how strong you are.",
  "your journey has been so far.",
  "From the little moments of childhood",
  "to the person you are today,",
  "every chapter is worth celebrating. Still remember the first time I saw you, you look gorgeous.",
  "I am so proud of the person you have become.",
  "May this birthday be a reflection of all the love and joy you bring to those around you.",
  "Happy Birthday, Butterfly! 🎉",
];

function BirthdayLetter({ onNext }) {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const timers = lines.map((_, index) =>
      setTimeout(() => setVisibleLines(index + 1), 900 + index * 650)
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="letter-page">
      <div className="letter-decor letter-flower">✿</div>
      <div className="letter-decor letter-butterfly">🦋</div>

      <article className="letter">
        <div className="letter-inner">
          <p className="letter-date">A tiny letter for a very special day</p>

          <h1>My Dear Abinaya,</h1>

          <div className="letter-copy">
            {lines.map((line, index) => (
              <p
                key={line}
                className={index < visibleLines ? "written visible" : "written"}
              >
                {line}
              </p>
            ))}
          </div>

          <div className="letter-signature">
            <span>With lots and lots of love,</span>
            <strong>❤️</strong>
          </div>

          <button
            className="story-button"
            onClick={onNext}
            disabled={visibleLines < lines.length}
          >
            Begin the memories <span>→</span>
          </button>
        </div>
      </article>
    </section>
  );
}

export default BirthdayLetter;
