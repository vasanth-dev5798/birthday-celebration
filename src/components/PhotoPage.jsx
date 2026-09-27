function PhotoPage({
  eyebrow,
  title,
  description,
  folder,
  photos,
  onPrevious,
  onNext,
  featured = false,
}) {

    const captions = [
    "A beautiful memory",
    "A moment to remember",
    "A beautiful soul",
    "Forever in my heart",
  ];

  return (
    <section className={`photo-page ${featured ? "featured-page" : ""}`}>
      <header className="page-heading">
        <p>{eyebrow}</p>
        <h1>{title}</h1>
        <span>{description}</span>
      </header>

      <div className={`photo-grid ${featured ? "featured-grid" : ""}`}>
        {photos.map((photo, index) => (
          <figure className={`polaroid polaroid-${index + 1}`} key={photo}>
            <div className="photo-frame">
              <img
                src={`/images/${folder}/${photo}`}
                alt={`${title} memory ${index + 1}`}
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                  event.currentTarget.parentElement.classList.add("photo-placeholder");
                }}
              />
              <span className="placeholder-text">Add your photo</span>
            </div>
            <figcaption>{captions[index]}</figcaption>
          </figure>
        ))}
      </div>

      <div className="page-controls">
        <button className="nav-button secondary" onClick={onPrevious}>
          ← Back
        </button>

        <span className="butterfly-divider">🦋</span>

        <button className="nav-button" onClick={onNext}>
          Next <span>→</span>
        </button>
      </div>
    </section>
  );
}

export default PhotoPage;
