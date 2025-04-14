import { ImageCard } from './ImageCard.jsx';

export default function GameBoard({ images, updateGame } ) {
  return(
    <div>
      <div id="image-grid">
        {images.map((image) => (
          <ImageCard key={image.id} id={image.id} src={image.url} updateGame={updateGame}/>
        ))}
      </div>
    </div>
  )
}