import { useState, useEffect } from 'react'
import GameBoard from './components/GameBoard.jsx'
import Header from './components/Header.jsx'
import './App.css'

function App() {
  const [ score, setScore ] = useState(0)
  const [ images, setImages ] = useState([])

  useEffect(() => {
    console.log('Here are your images: ==>>', images);
  }, [images]);

  useEffect(() => {
    async function getImages() {
      try {
        const url = 'https://dog.ceo/api/breed/dachshund/images/random/8'
        const response = await fetch(url)
        
        if (response.ok) {
          const data = await response.json()
          setImages(data.message); 
        } else {
          throw Error('response failed');
        }
      } catch(error) {
        console.error(error)
      }
    }

    getImages();
  }, []);

  return (
    <>
      <Header score={score} />
      <GameBoard images={images} />
    </>
  )
}

export default App
