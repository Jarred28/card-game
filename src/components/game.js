import GameBoard from './gameboard'
import GameOver from './gameover'
import Header from './header'
import { Modal, Button } from 'react-bootstrap';
import {useState, useEffect} from 'react';

const Game = () => {
  const [round, setRound] = useState(1)  
  const [currentPlayer, setCurrentPlayer] = useState("player1")
  const [score, setScore] = useState({
    player1: 0,
    player2: 0
  })
  const [modal, setModal] = useState({
    hidden: true,
    text: ''
  })
  useEffect(() => {
    const { player1, player2 } = score
    if ( player1 > 5 || player2 > 5) {
      //check who is winner
      const winner = player1 > player2 ? "player1" : "player2"
      showModal(`Winner is ${winner}!`)
    }
    if ( player1 === 5 && player2 ===5  ) {
      showModal("The game ended in a draw!")
    }
  }, [score])

  const closeModal = () => {
    setModal({
      hidden: true,
      text: ''
    })
  };
  const showModal = (text) => {
    setModal({
      hidden: false,
      text
    })
  }
  const restartGame = () => {
    closeModal()
    // restart game      
    setRound(round+1)
    setScore({
      player1: 0,
      player2: 0
    })
  }
  const endGame = () => {
    closeModal()
    // end game      
    setRound(0)
    setScore({
      player1: 0,
      player2: 0
    })

  }
  if ( !round ) return <GameOver/>

  return (
    <>
      <Header 
        currentPlayer={currentPlayer}
        score={score}
        round={round}
      />
      <GameBoard 
        score={score} 
        onChangeScore={setScore} 
        player={currentPlayer}
        onChangePlayer={setCurrentPlayer}
        round={round}
      />
      <Modal show={!modal.hidden} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{modal.text}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Would you like to restart the game again?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={restartGame}>
            Yes
          </Button>
          <Button variant="secondary" onClick={endGame}>
            No
          </Button>
        </Modal.Footer>
      </Modal>      
    </>
  );
}

export default Game;
