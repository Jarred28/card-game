import cx from 'classnames';

const Header = ({currentPlayer, score, round}) => (
  <>
    <div className="round">Round: {round}</div>
    <div className="d-flex justify-content-around">
      <div className={cx('player', { "active": currentPlayer==="player1" })}>Player1</div>
      <div className="score">
        <span>{score.player1}</span> : 
        <span>{score.player2}</span>     
      </div>
      <div className={cx('player', { "active": currentPlayer==="player2" })}>Player2</div>
    </div>   
  </>
)

export default Header