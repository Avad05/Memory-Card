import { useState, useEffect } from "react";
import '../styles/render.css'
export default function Render() {
  const [images, setImages] = useState([]);
  const [shuffledImages, setShuffledImages] = useState([]);
  const [clickedImages, setClickedImages] = useState([]);
  const [score, setScore] = useState(0);

  // Fetch images
  useEffect(() => {
    fetch("https://dattebayo-api.onrender.com/characters")
      .then((res) => res.json())
      .then((data) => {
        setImages(data.characters);
        setShuffledImages(data.characters);
      })
      .catch((error) => console.log(error));
  }, []);

  // Shuffle function
  function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
  }

  // Handle click
  const handleClick = (id) => {
    if (clickedImages.includes(id)) {
      // If already clicked → reset score
      setScore(0);
      setClickedImages([]);
    } else {
      // If new → increase score
      setScore(score + 1);
      setClickedImages([...clickedImages, id]);
    }

    // Shuffle after every click
    setShuffledImages(shuffleArray(images));
  };

  return (
    <div className="Body">
        <h1>Naruto Memory Game</h1>
      <h2>Score: {score}</h2>
      <div style={{ display: "flex", flexWrap:"wrap", justifyContent:"space-between", gap:"20px" }}>
        {Array.isArray(shuffledImages) &&
          shuffledImages
          .filter((img) => img.name !== "Jiraiya")
          .map((img) => (
            <div className="image">
            <img
              key={img.id}
              src={img.images[0] || img.images[1]}
              alt={img.name}
              width={250}
              height={300}
              onClick={() => handleClick(img.id)}
              style={{ cursor: "pointer", border: "0px solid black",backgroundColor:"red", borderRadius:"5px" }}
              onError={(e) => e.target.style.display = "none"} // hide if fails

            />
            <h3 className="name">{img.name}</h3>
            </div>
          ))}
      </div>
    </div>
  );
}
