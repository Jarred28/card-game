import React, { useState, useEffect } from 'react';
import Card from './card';

const GameBoard = (props) => {
  const {
    score,
    onChangeScore,
    player,
    round,
    onChangePlayer
  } = props

  const [gameCards, setGameCards] = useState([])
  const [flippedCards, setFlippedCards] = useState([])

  useEffect(() => {
    const newCards = []
    for(var idx = 0; idx < 10; idx++){
      const firstCard = {
        id: 2 * idx,
        image: idx,
        flipped: false,
        available:  true
      }
      const secondCard = {
        id: 2 * idx + 1,
        image: idx,
        flipped: false,
        available:  true
      }
      newCards.push(firstCard)
      newCards.push(secondCard)
    }
    const shuffledCards = newCards.sort(() =>(Math.random() - .5));
    setGameCards(shuffledCards)
    setFlippedCards([])
  }, [round])

  useEffect(() => {
    if (flippedCards.length === 2) {
      const success = gameCards[flippedCards[0]].image === gameCards[flippedCards[1]].image
      if (success) {
        //hide cards
        setTimeout(() => {
          const _gameCards = [...gameCards]
          _gameCards[flippedCards[0]].available = false
          _gameCards[flippedCards[1]].available = false
          setGameCards(_gameCards)
          setFlippedCards([])
          //increase score
          onChangeScore({
            ...score,
            [player]: score[player] + 1
          })
        }, 1000)      
      } else {
        setTimeout(() => {
          //change role
          const _currentPlayer = player === "player1" ? "player2" : "player1"
          onChangePlayer(_currentPlayer)          
          // flip cards back
          const _gameCards = [...gameCards]
          _gameCards[flippedCards[0]].flipped = false
          _gameCards[flippedCards[1]].flipped = false
          setGameCards(_gameCards)
          setFlippedCards([])
        }, 1000)   
      }
    }
  }, [flippedCards])

  const flipCard = (id) =>{
    const _gameCards = [...gameCards]
    _gameCards[id].flipped = !gameCards[id].flipped
    setGameCards(_gameCards)
  }
  if (gameCards.length === 0) return <div>loading...</div>

  return (
    <div className="grid-container">
      {gameCards.map((card, index) => (
        <Card
          key={index}
          id={index}
          card={card}
          flipCard={flipCard}
          flippedCards={flippedCards}
          setFlippedCards={setFlippedCards}
        />
      ))}
    </div>
  )
}

export default GameBoard;