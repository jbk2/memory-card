import { useState, useEffect } from 'react'
import GameBoard from './components/GameBoard.jsx'
import Header from './components/Header.jsx'
import '/src/assets/stylesheets/App.css'

function App() {
  const [ currentScore, setCurrentScore ] = useState(0)
  const [ bestScore, setBestScore ] = useState(0)
  const [ images, setImages ] = useState([])

  async function getNewImages() {
    try {
      const url = 'https://dog.ceo/api/breed/dachshund/images/random/8'
      const response = await fetch(url)
      if (response.ok) {
        const data = await response.json();
        const imgArray = data.message;
        const imageObjects = imgArray.map((url) => {
          const uuid = crypto.randomUUID();
          return { id: uuid, url: url, clicked: false }
        })
        setImages(imageObjects);
      }
    } catch(error) {
      console.error(error);
    }
  }

  function shuffleArray(arr) {
    return [...arr].sort(() => Math.random() - 0.5);
  }

  function updateGame(clickedId) {
    const clickedImg = images.find((img) => img.id === clickedId)
    
    if(!clickedImg.clicked) {
      const updatedImages = images.map((img) =>
        img.id === clickedId ? {...img, clicked: true} : img
      );
      setImages(shuffleArray(updatedImages));
      setCurrentScore((s) => s + 1 );
    } else if (clickedImg.clicked) {
      if (bestScore < currentScore) { setBestScore(currentScore) };
      getNewImages();
      setCurrentScore(0)
    }
  }
  
  useEffect(() => {
    getNewImages();
  }, []);

  useEffect(() => {
    console.log('Here are your images: ==>>', images);
  }, [images]);

  return (
    <>
      <Header currentScore={currentScore} bestScore={bestScore} />
      <GameBoard images={images} updateGame={updateGame} />
    </>
  )
}

export default App
