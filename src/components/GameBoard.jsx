import { ImageCard } from './ImageCard.jsx';

export default function GameBoard({ images, shuffleImages} ) {
  return(
    <div>
      <div id="image-grid">
        {images.map((src, i) => (
          <ImageCard key={i} src={src} shuffleImages={shuffleImages} />
        ))}
      </div>
    </div>
  )
}