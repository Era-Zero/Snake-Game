import React, { useState, useRef, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

//Components
import Header from './Header'
import Footer from './Footer'
import Infomation from './Infomation'
import './Components.css'
//Constants
import { useInterval } from "./useInterval";
import {
  CANVAS_SIZE,
  SNAKE_START,
  APPLE_START,
  SCALE,
  SPEED,
  DIRECTIONS
} from "./constants";


const Game = () => {

  const canvasRef = useRef();
  // state for the snake
  const [snake, setSnake] = useState(SNAKE_START);
  // state for creating the apple
  const [apple, setApple] = useState(APPLE_START);
  // state for keeping track of the direction of the snake 
  const [dir, setDir] = useState([0, -1]);
  // state for the speed of the snake
  const [speed, setSpeed] = useState(null);
  // state for the game over criteria
  const [gameOver, setGameOver] = useState(false);
  // state for the score
  const [score, setScore] = useState(false)

  const startGame = () => {
    setSnake(SNAKE_START);
    setApple(APPLE_START);
    setDir([0, -1]);
    setSpeed(SPEED);
    setGameOver(false);
    setScore(true)
  };

  //prevents app form crashing and only allows arrow keys to move the snake
  const moveSnake = ({ keyCode }) =>
    keyCode >= 37 && keyCode <= 40 && setDir(DIRECTIONS[keyCode]);

  const createApple = () =>
    apple.map((_a, i) => Math.floor(Math.random() * (CANVAS_SIZE[i] / SCALE)));

  // checks the collison of the snake and the wall or the snake it self
  const checkCollision = (piece, snk = snake) => {
    if (
      piece[0] * SCALE >= CANVAS_SIZE[0] ||
      piece[0] < 0 ||
      piece[1] * SCALE >= CANVAS_SIZE[1] ||
      piece[1] < 0
    )
      return true;

    for (const segment of snk) {
      if (piece[0] === segment[0] && piece[1] === segment[1]) return true;
    }
    return false;
  };

  
  const checkAppleCollision = newSnake => {
    if (newSnake[0][0] === apple[0] && newSnake[0][1] === apple[1]) {
      let newApple = createApple();
      while (checkCollision(newApple, newSnake)) {
        newApple = createApple();
      }
      setApple(newApple);
      return true;
    }
    return false;
  };

  const gameLoop = () => {
    const snakeCopy = JSON.parse(JSON.stringify(snake));
    const newSnakeHead = [snakeCopy[0][0] + dir[0], snakeCopy[0][1] + dir[1]];
    snakeCopy.unshift(newSnakeHead);
    //checks collsion  if collieded call engame
    if (checkCollision(newSnakeHead)) endGame();
    if (!checkAppleCollision(snakeCopy)) snakeCopy.pop();
    setSnake(snakeCopy);
  };

  const endGame = () => {
    setSpeed(null);
    setGameOver(true);
  };

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    context.setTransform(SCALE, 0, 0, SCALE, 0, 0);
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    context.fillStyle = "#9599E2";
    snake.forEach(([x, y]) => context.fillRect(x, y, 1, 1));
    context.fillStyle = "#8BC6EC";
    context.fillRect(apple[0], apple[1], 1, 1);
  }, [snake, apple, gameOver]);


  useInterval(() => gameLoop(), speed);

    return (
        <div className="container , text-center">
            <Header />
            <Infomation />
            <div className="container , space bg-light">
                
            <div role="button" tabIndex="0" onKeyDown={e => moveSnake(e)}>
              <div className="container text-center">
                <h3 className="display-4">Score: {setScore ? JSON.stringify(snake.length) - 2 : 0}</h3>
              </div>
              {gameOver && <h1 className="display-4">Game Over!</h1>}
              <canvas
                style={{ border: "1px solid black" }}
                ref={canvasRef}
                width={`${CANVAS_SIZE[0]}px`}
                height={`${CANVAS_SIZE[1]}px`}
              />
              
              <div className="container">
                <button className="btn btn-outline-dark" onClick={startGame}>Start Game</button>
              </div>
            </div>

            </div>
            <Footer />
        </div>
    )
}

export default withRouter(Game)