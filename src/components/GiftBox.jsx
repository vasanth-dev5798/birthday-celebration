function GiftBox({ onOpen }) {
  return (
    <section className="intro-screen">
      <div className="star-field" aria-hidden="true">
        <span>✦</span>
        <span>·</span>
        <span>✧</span>
        <span>·</span>
        <span>✦</span>
      </div>

      <div className="intro-content">
        <p className="small-caption">A little surprise is waiting...</p>

        <h1 className="intro-title">
          For Someone
          <br />
          <em>Very Special</em>
        </h1>

        <button className="gift-button" onClick={onOpen} aria-label="Open the birthday gift">
          <span className="gift-lid" />
          <span className="gift-body">
            <span className="gift-ribbon vertical" />
            <span className="gift-ribbon horizontal" />
          </span>
          <span className="gift-bow left" />
          <span className="gift-bow right" />
        </button>

        <p className="open-text">Click the gift</p>
        <p className="tap-hint">A little story made just for you 🦋</p>
      </div>
    </section>
  );
}

export default GiftBox;
