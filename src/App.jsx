import React, { useState } from "react";
import ColofulMessage from "./components/ColofulMessage";

const App = () => {
  const OnClickCountUp = () => {
    setNum(num + 1);
  };
  const [num, setNum] = useState(0);
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColofulMessage color="blue">お元気ですか？</ColofulMessage>
      <ColofulMessage color="pink">元気です！</ColofulMessage>
      <button onClick={OnClickCountUp}>カウントアップ！</button>
      <p>{num}</p>
      <p>(^ ^)</p>
    </>
  );
};

export default App;
