export function ImageCard({ src, id, updateGame }) {
  return(
    <div className="image-card">
      <img src={src} id={id} alt="DogPic" onClick={() => updateGame(id)}/>  
    </div>
  )
}