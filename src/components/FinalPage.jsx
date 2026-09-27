function FinalPage({ onRestart }) {
  return (
    <section className="final-page">
      <div className="final-butterflies" aria-hidden="true">
        <span>🦋</span>
        <span>🦋</span>
        <span>🦋</span>
      </div>

      <div className="final-card">
        <p className="final-small">And the story continues...</p>

        <h1>
          Happy
          <br />
          <em>Birthday</em>
        </h1>

        <div className="heart-line">♡</div>

        <p className="final-message">
          May this new chapter bring you
          <br />
          happiness, laughter, love,
          <br />
          and countless beautiful memories.
        </p>

        <p className="final-wish">
          Keep smiling.
          <br />
          Keep dreaming.
          <br />
          Keep being wonderfully you.
        </p>

        <button className="story-button" onClick={onRestart}>
          Read it again <span>↻</span>
        </button>
      </div>
    </section>
  );
}

export default FinalPage;
