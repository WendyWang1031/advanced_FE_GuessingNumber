import React, { useState } from "react";

const GuessNumberGame = () => {
  // 使用 useState 定義狀態
  const [answer, setAnswer] = useState(Math.floor(Math.random() * 100) + 1);
  const [userInput, setUserInput] = useState("");
  const [message, setMessage] = useState("");

  // 處理使用者輸入的函式
  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  // 處理猜測的函式
  const handleGuess = () => {
    const userGuess = parseInt(userInput, 10);

    if (isNaN(userGuess)) {
      setMessage("請輸入有效的數字！");
    } else {
      if (userGuess === answer) {
        setMessage("恭喜你，猜對了！");
      } else if (userGuess < answer) {
        setMessage("猜高一點！");
      } else {
        setMessage("猜低一點！");
      }
    }
  };

  return (
    <div>
      <h1>猜數字遊戲</h1>
      <p>猜一個介於 1 到 100 之間的數字</p>

      <input
        type="text"
        id="guessField"
        value={userInput}
        onChange={handleInputChange}
      />
      <button onClick={handleGuess}>猜！</button>
      <p>{message}</p>
    </div>
  );
};

export default GuessNumberGame;
