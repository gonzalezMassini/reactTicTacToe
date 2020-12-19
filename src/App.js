import React, { useState, useEffect } from 'react';
import './App.css';
import Board from './components/Board';
/// ADD DARK MODE
function App() {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [playerTurn, setPlayerTurn] = useState(true);
  const [xSteps, setXSteps] = useState([]);
  const [ySteps, setYSteps] = useState([]);
  const [winState, setWinState] = useState(false);
  const [catState, setCatState] = useState(false);
  const [xScore, setXScore] = useState(0);
  const [yScore, setYScore] = useState(0);
  const [isDark, setIsDark] = useState(false);
  let symbol = '';
  if (!playerTurn) {
    symbol = 'X';
  } else {
    symbol = 'O';
  }
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  useEffect(() => {
    winningCombos.map((combo) => {
      if (
        xSteps.includes(combo[0]) &&
        xSteps.includes(combo[1]) &&
        xSteps.includes(combo[2])
      ) {
        setWinState(true);
        setXScore((prev) => prev + 1);
      } else if (
        ySteps.includes(combo[0]) &&
        ySteps.includes(combo[1]) &&
        ySteps.includes(combo[2])
      ) {
        setWinState(true);
        setYScore((prev) => prev + 1);
      }
      if (xSteps.length === 5 && ySteps.length === 4) {
        setCatState(true);
      }
      return null;
    });
    // eslint-disable-next-line
  }, [symbol]);

  const resetGame = () => {
    setBoard(Array(9).fill(''));
    setXSteps([]);
    setYSteps([]);
    setPlayerTurn(true);
    setCatState(false);
    setWinState(false);
  };

  const handleDarkMode = () => {
    if (!isDark) {
      document.body.style.backgroundColor = 'black';
      setIsDark(true);
    } else {
      document.body.style.backgroundColor = 'white';
      setIsDark(false);
    }
  };

  return (
    <div className='App'>
      <a
        className={isDark ? 'titleDark' : 'title'}
        href='https://gonzalezmassini.github.io'
      >
        <h1>Tic tac toe</h1>
      </a>
      {winState ? (
        <h1
          className={isDark ? 'winnerTitleDark' : 'winnerTitle'}
        >{`${symbol} wins!`}</h1>
      ) : null}
      {winState ? (
        <button
          className={isDark ? 'btnDark' : 'btn'}
          onClick={() => resetGame()}
        >
          reset
        </button>
      ) : null}
      {catState ? <h1>Cat</h1> : null}
      {catState ? (
        <button className='btn' onClick={() => resetGame()}>
          reset
        </button>
      ) : null}
      <Board
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
      ></Board>
      <p>
        <h1 className={isDark ? 'scoreTitleDark' : 'scoreTitle'}>Scores</h1>
      </p>

      <span>
        <h1 className={isDark ? 'scoresDark' : 'scores'}>{`X : ${xScore}`}</h1>
        <h1 className={isDark ? 'scoresDark' : 'scores'}>{`O : ${yScore}`}</h1>
      </span>
      <button
        className={isDark ? 'btnDark' : 'btn'}
        onClick={() => handleDarkMode()}
      >
        dark mode
      </button>
    </div>
  );
}

export default App;
