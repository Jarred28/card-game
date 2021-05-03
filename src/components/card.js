import ReactCardFlip from 'react-card-flip';

const Card = (props) => {
  const {   
    id,
    card,
    flipCard,
    flippedCards,
    setFlippedCards,
  } = props

  const { image, available, flipped } = card;
  const imagePath = `/imgs/${image}.png`;
  
  const onCardClick = () => {
    if (!flipped && available && flippedCards.length < 2) {
      flipCard(id)
      setFlippedCards([...flippedCards, id])
    } 
  }
  return (
    <div className="grid-item" onClick={onCardClick}>
{      
      available && 
      <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
        <div className="game-card back">{image}</div>
        <div
          className="game-card front"
          style={{backgroundImage: `url(${imagePath})`}}
        />        
      </ReactCardFlip>      
}
    </div>
  )
}

export default Card
