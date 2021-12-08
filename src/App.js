/* eslint-disable */
import "./App.css";
import React, { useState } from "react";
import logo from "./logo.svg";

function App() {
  // 구조 분해 할당(Destructuring)
  // useState(state data, state data 변경 함수)
  // state = 변수 대신 데이터를 저장하는 공간
  const address = [
    "마포구 망원1동",
    "해운대구 중동",
    "송파구 잠실동",
    "마포구 상암동",
  ];

  const firstLikesNum = 0;

  let [title, modTitle] = useState(address);
  let [likes, modLikes] = useState(firstLikesNum);

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 BLOG</div>
      </div>
      <div className="list">
        <h3>
          {title[0]}
          <span
            onClick={() => {
              modLikes(likes + 1);
            }}
          >
            👍
          </span>
          {likes}
        </h3>
        <p>2월 18일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3> {title[1]} </h3>
        <p>2월 19일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3> {title[2]} </h3>
        <p>2월 20일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3> {title[3]} </h3>
        <p>2월 21일 발행</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
