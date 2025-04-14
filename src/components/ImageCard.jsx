export function ImageCard({ src, shuffleImages }) {

  function handleClick(e) {
    console.log(e.target, 'was clicked');
    shuffleImages();
  }

  return(
    <div className="image-card">
      <img src={src} alt="DogPic" onClick={handleClick}/>  
    </div>
  )
}