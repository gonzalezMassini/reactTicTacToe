import React from 'react';
import '../App.css';

function Box({
  board,
  setBoard,
  playerTurn,
  setPlayerTurn,
  xSteps,
  setXSteps,
  ySteps,
  setYSteps,
  winState,
  isDark,
}) {
  const handleClick = (index) => {
    setBoard(
      board.map((box, boxIndex) => {
        if (index === boxIndex) {
          if (!box && !winState) {
            playerTurn ? (box = 'X') : (box = 'O');
            playerTurn
              ? setXSteps([...xSteps, index])
              : setYSteps([...ySteps, index]);
            setPlayerTurn(!playerTurn);
          }
        }
        return box;
      })
    );
  };
  return (
    <>
      <div className='board'>
        {board.map((box, index) => {
          return (
            <div
              onClick={() => handleClick(index)}
              key={index}
              className={isDark ? 'boxDark' : 'box'}
            >
              <h1 className={isDark ? 'symbolDark' : 'symbol'}>{box}</h1>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Box;
