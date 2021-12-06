// import logo from './logo.svg';
import './App.css';

function App() {

  const location = '송파구 올림픽대로'
  const cusFontStyle = {color: 'blue', fontSize: '30px'}
  function gethundred() {
    return 100
  }
  return (
    <div className="App">
      <div className="black-nav">
        <div style={cusFontStyle}>개발 BLOG</div>
        </div>
        <h4> { location } </h4>
        <p> {gethundred()}</p>
      </div>
  );
}

export default App;
