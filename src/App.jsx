import { useEffect, useRef, useState } from "react";
import GiftBox from "./components/GiftBox";
import Butterfly from "./components/Butterfly";
import BirthdayLetter from "./components/BirthdayLetter";
import PhotoPage from "./components/PhotoPage";
import FinalPage from "./components/FinalPage";
import "./App.css";

const pages = ["letter", "childhood", "growing", "memories", "current", "final"];

function App() {
  const [stage, setStage] = useState("gift");
  const [pageIndex, setPageIndex] = useState(0);
  const [musicOn, setMusicOn] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (stage !== "butterfly") return;

    const timer = setTimeout(() => {
      setStage("letter");
    }, 5600);

    return () => clearTimeout(timer);
  }, [stage]);

  const openGift = async () => {
    setStage("butterfly");
    setPageIndex(0);
    if (audioRef.current) {
    try {
      await audioRef.current.play();
      setMusicOn(true);
    } catch (error) {
      console.error("Unable to play music:", error);
    }
  }
  };

  const nextPage = () => {
    if (pageIndex < pages.length - 1) {
      setPageIndex((current) => current + 1);
    }
  };

  const previousPage = () => {
    if (pageIndex > 0) {
      setPageIndex((current) => current - 1);
    }
  };

  const restart = () => {
    setStage("gift");
    setPageIndex(0);
  };

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (musicOn) {
      audioRef.current.pause();
      setMusicOn(false);
    } else {
      try {
        await audioRef.current.play();
        setMusicOn(true);
      } catch (error) {
        console.error("Unable to play music:", error);
      }
    }
  };

  return (
    <main className="app">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      {stage === "gift" && <GiftBox onOpen={openGift} />}

      {stage === "butterfly" && <Butterfly />}

      {stage === "letter" && (
        <div className="story">
          {pageIndex === 0 && <BirthdayLetter onNext={nextPage} />}

          {pageIndex === 1 && (
            <PhotoPage
              eyebrow="Chapter One"
              title="Little You"
              description="See the beautiful little baby who grew up to be the amazing person you are today."
              folder="childhood"
              photos={["Childhood-1.jpeg", "Childhood-2.jpeg", "Childhood-3.jpeg", "Childhood-4.jpeg"]}
              onPrevious={previousPage}
              onNext={nextPage}
            />
          )}


          {pageIndex === 2 && (
            <PhotoPage
              eyebrow="Chapter Three"
              title="Beautiful Memories"
              description="Some moments become photographs. Some become part of us. Will always be a part of you."
              folder="memories"
              photos={["memory-1.jpeg", "memory-2.jpeg", "memory-3.jpeg", "memory-4.jpeg"]}
              onPrevious={previousPage}
              onNext={nextPage}
            />
          )}

          {pageIndex === 3 && (
            <PhotoPage
              eyebrow="And Today..."
              title="Look At You Now"
              description="Every year has added another beautiful page to your story. And today, you're even more amazing than ever before."
              folder="current"
              photos={["current-1.jpeg", "current-2.jpeg", "current-3.jpeg"]}
              onPrevious={previousPage}
              onNext={nextPage}
              featured
            />
          )}

          {pageIndex === 4 && <FinalPage onRestart={restart} />}
        </div>
      )}

      {stage === "letter" && (
        <button
          className="music-button"
          onClick={toggleMusic}
          aria-label="Toggle music"
          title="Music is optional"
        >
          {musicOn ? "♫" : "♪"}
        </button>
      )}
      <audio
        ref={audioRef}
        src="/music/birthday-song.mp3"
        loop
        preload="auto"
      />
    </main>
  );
}

export default App;
