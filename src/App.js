import React, { useState, useEffect } from "react";

const GuessNumberGame = () => {
  // 使用 useState 定義狀態
  const [answer, setAnswer] = useState(Math.floor(Math.random() * 100) + 1);
  const [userInput, setUserInput] = useState("");
  const [message, setMessage] = useState("猜一個介於 1 到 100 之間的數字：");

  // 使用 useEffect 來模擬 componentDidMount
  useEffect(() => {
    const guessField = document.getElementById("guessField");

    // 使用 DOM Element 操作
    guessField.addEventListener("input", handleInputChange);

    // 返回清理函式以模擬 componentWillUnmount
    return () => {
      guessField.removeEventListener("input", handleInputChange);
    };
  }, []); // 空依賴表示僅在初次渲染時執行

  // 使用 DOM Element 操作的函式
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
      <p>{message}</p>
      <input type="text" id="guessField" value={userInput} />
      <button onClick={handleGuess}>猜！</button>
    </div>
  );
};

export default GuessNumberGame;
