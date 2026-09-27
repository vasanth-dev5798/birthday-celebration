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
          <em>Birthday!!!</em>
        </h1>

        <div className="heart-line">♡</div>

        <p className="final-message">
          May this new chapter bring you
          <br />
          happiness, laughter, love,
          <br />
          and countless beautiful memories.
          <br />
          Still many more adventures await you, and I can't wait to see all the wonderful things you'll accomplish.
          <br />
          Will always be with you at every step of the way. Till my last breath, I will be your biggest cheerleader and your biggest fan. You are my everything, and I am so grateful to have you in my life.
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
