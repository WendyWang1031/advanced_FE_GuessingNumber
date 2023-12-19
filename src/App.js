import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./styles.css";

const GuessNumberGame = () => {
  const [answer, setAnswer] = useState(null);
  const [userInput, setUserInput] = useState("");
  const [message, setMessage] = useState("");

  // 使用 useEffect 來取得遊戲答案
  useEffect(() => {
    let skip = false; // 設置 skip 變數

    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:9999/answer");
        if (!skip) {
          setAnswer(response.data.answer[0]);
          console.log("遊戲答案:", response.data.answer[0]);
        }
      } catch (error) {
        console.error("發生錯誤:", error);
        console.error("詳細錯誤資訊:", error.response);
      }
    };

    fetchData();

    return () => {
      skip = true; // 在組件卸載時設置 skip 為 true，避免 setState 錯誤
    };
  }, []); // 空的依賴列表表示僅在組件的初始渲染時執行

  // 處理使用者輸入的函式
  const handleInputChange = (event) => {
    setUserInput(event.target.value);
    setMessage(""); // 清除訊息
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
