/*
import React, { useState } from "react";

import "./styles.css";

const GuessNumberGame = () => {
  // 使用 useState 定義狀態
  const [answer, setAnswer] = useState(Math.floor(Math.random() * 100) + 1);
  const [userInput, setUserInput] = useState("");
  const [message, setMessage] = useState("");

  // 處理使用者輸入的函式
  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  // 處理猜數字的函式
  const handleGuess = () => {
    const guess = parseInt(userInput, 10);

    if (isNaN(guess)) {
      setMessage("請輸入有效的數字！");
    } else {
      if (guess === answer) {
        setMessage("恭喜你，猜對了！");
      } else if (guess < answer) {
        setMessage("猜得太小了，再試試看！");
      } else {
        setMessage("猜得太大了，再試試看！");
      }
    }
  };

  return (
    <div>
      <h1>猜數字遊戲</h1>
      <p>猜一個介於 1 到 100 之間的數字：</p>
      <input
        type="text"
        id="guessField"
        value={userInput}
        onChange={handleInputChange}
      />
      <button onClick={handleGuess}>猜！</button>
      <p className="message">{message}</p>
    </div>
  );
};

export default GuessNumberGame;
*/

import React, { useState } from "react";

const GuessNumberGame = () => {
  const [userInput, setUserInput] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  // 注意：此處未添加 handleGuess 函式，僅作為 UI 演示

  return (
    <div>
      <h1>猜數字遊戲</h1>
      <p>猜一個介於 1 到 100 之間的數字：</p>
      <input
        type="text"
        id="guessField"
        value={userInput}
        onChange={handleInputChange}
      />
      <button>猜！</button>
      <p className="message">{message}</p>
    </div>
  );
};

export default GuessNumberGame;
