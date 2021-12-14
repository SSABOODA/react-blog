/* eslint-disable */
import './App.css';
import React, { useState } from 'react';
import logo from './logo.svg';

function App() {
    const lan = ['PYTHON', 'JAVA', 'JAVASCRIPT', 'REACT'];
    const date = ['3월1일', '3월2일', '3월3일', '3월4일'];
    const firstLikesNum = 0;

    let [title, modTitle] = useState(lan);
    let [postDate, postModDate] = useState(date);
    let [likes, modLikes] = useState(firstLikesNum);
    let [modal, modModal] = useState(false);
    let [menu, modMenu] = useState(false);
    let [inputTitle, modInputTitle] = useState(0);
    let [inputValue, modInputValue] = useState('');

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
            {title.map(function (i, j) {
                return (
                    <div className="list">
                        <h3
                            onClick={() => {
                                modInputTitle(j);
                            }}
                        >
                            {i}
                            <span
                                onClick={() => {
                                    modLikes(likes + 1);
                                }}
                            >
                                👍
                            </span>
                            {likes}
                        </h3>
                        <p>2월 20일 발행</p>
                        <hr />
                    </div>
                );
            })}

            <button
                className="menu-button"
                onClick={() => {
                    modMenu(!menu);
                }}
            >
                메뉴
            </button>
            {menu === true ? (
                <MenuBar title={title} inputTitle={inputTitle}></MenuBar>
            ) : null}
        </div>
    );
}

function Modal(props) {
    return (
        <div className="modal">
            <h2> {props.title[props.inputTitle]} </h2>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    );
}

function MenuBar(props) {
    return (
        <div className="menuContainer">
            <div className="menu-modal">
                <ul>
                    <li className="menuList">
                        {props.title[props.inputTitle]}
                    </li>
                    <li className="menuList">도큐먼트</li>
                    <li className="menuList">설명</li>
                </ul>
            </div>
        </div>
    );
}

export default App;
// 구조 분해 할당(Destructuring)
// useState(state data, state data 변경 함수)
// state = 변수 대신 데이터를 저장하는 공간

// useState(data, modifyfunction)
// modifyfunction에는 data 에 담긴 자료형과 똑같이 생긴 자료만 변경함수에 삽입하여야한다.

// ... Deep Copy , reference data type
// var newArray = title => 완전한 복사가 아니라 값 공유 개념임.
// var newArray = [...title]; 의 형식으로 써줘야 완전한 복사 개념임.
// spread operator

// * props: 부모 컴포넌트의 data를 받아오는 것
// 변수명 = {부모 컴포넌트의 state에 저장된 값

// * 삼항 연산자
// 조건문 ? True 명령어 : False 명령어
// null: 텅 빈 HTML
