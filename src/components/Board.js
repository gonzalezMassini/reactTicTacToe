import React from 'react';
import '../App.css';
import Box from './Box';

function Board({
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
  return (
    <div>
      <Box
        board={board}
        setBoard={setBoard}
        playerTurn={playerTurn}
        setPlayerTurn={setPlayerTurn}
        xSteps={xSteps}
        setXSteps={setXSteps}
        ySteps={ySteps}
        setYSteps={setYSteps}
        winState={winState}
        isDark={isDark}
      ></Box>
    </div>
  );
}

export default Board;
