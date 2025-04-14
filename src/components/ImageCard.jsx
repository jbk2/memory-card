export function ImageCard({ src, id, updateGame }) {

  function handleClick(e) {
    console.log(e.target, 'was clicked');
    updateGame(e);
  }

  return(
    <div className="image-card">
      <img src={src} id={id} alt="DogPic" onClick={handleClick}/>  
    </div>
  )
}