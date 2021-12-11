/* eslint-disable */
import './App.css';
import React, { useState } from 'react';
import logo from './logo.svg';

function App() {
    // 구조 분해 할당(Destructuring)
    // useState(state data, state data 변경 함수)
    // state = 변수 대신 데이터를 저장하는 공간
    const address = ['PYTHON', 'JAVA', 'JAVASCRIPT', 'REACT'];

    const firstLikesNum = 0;
    // useState(data, modifyfunction)
    // modifyfunction에는 data 에 담긴 자료형과 똑같이 생긴 자료만 변경함수에 삽입하여야한다.

    let [title, modTitle] = useState(address);
    let [likes, modLikes] = useState(firstLikesNum);
    let [modal, modModal] = useState(false);
    let [menu, modMenu] = useState(false);

    // ... Deep Copy , reference data type
    // var newArray = title => 완전한 복사가 아니라 값 공유 개념임.
    // var newArray = [...title]; 의 형식으로 써줘야 완전한 복사 개념임.
    // spread operator
    function changeTitle() {
        var newArray = [...title];
        newArray[1] = 'C#';
        modTitle(newArray);
    }

    function sortTitle() {
        var newArray = [...title];
        newArray.sort();
        modTitle(newArray);
    }

    return (
        <div className="App">
            <div className="black-nav">
                <div>개발 BLOG</div>
            </div>
            <div>
                <button
                    className="sort-button"
                    onClick={() => {
                        sortTitle();
                    }}
                >
                    글 제목 정렬
                </button>
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
                <h3>
                    {title[1]}{' '}
                    <button
                        onClick={() => {
                            changeTitle();
                        }}
                    >
                        변경
                    </button>
                </h3>
                <p>2월 19일 발행</p>
                <hr />
            </div>
            <div className="list">
                <h3> {title[2]} </h3>
                <p>2월 20일 발행</p>
                <hr />
            </div>
            <div className="list">
                <h3
                    onClick={() => {
                        modModal(true);
                    }}
                >
                    {title[3]}
                </h3>
                <p>2월 21일 발행</p>
                <hr />
            </div>
            {
                // 삼항 연산자
                // 조건문 ? True 명령어 : False 명령어
                // null: 텅 빈 HTML
                modal === true ? <Modal></Modal> : null
            }
            <button
                className="menu-button"
                onClick={() => {
                    modMenu(!menu);
                }}
            >
                메뉴
            </button>
            {menu === true ? <MenuBar></MenuBar> : null}
        </div>
    );
}

function Modal() {
    return (
        <div className="modal">
            <h2>제목</h2>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    );
}

function MenuBar() {
    return (
        <div className="menuContainer">
            <div className="menu-modal">
                <ul>
                    <li className="menuList">소개</li>
                    <li className="menuList">도큐먼트</li>
                    <li className="menuList">설명</li>
                </ul>
            </div>
        </div>
    );
}

export default App;
