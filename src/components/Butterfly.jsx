function Butterfly() {
  return (
    <section className="butterfly-screen" aria-label="Butterfly animation">
      <div className="butterfly-glow" />

      <div className="butterfly-flight">
        <div className="butterfly">
          <span className="wing wing-left">
            <i />
            <i />
          </span>
          <span className="body" />
          <span className="antenna antenna-left" />
          <span className="antenna antenna-right" />
          <span className="wing wing-right">
            <i />
            <i />
          </span>
        </div>
      </div>

      <div className="butterfly-particles">
        <span>✦</span>
        <span>·</span>
        <span>✧</span>
        <span>·</span>
        <span>✦</span>
      </div>
    </section>
  );
}

export default Butterfly;
