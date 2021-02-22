import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person</p>
        <Person></Person>
        <Person></Person>
        <Person></Person>
        <Person></Person>
      </header>
    </div>
  );
}

function Person() {
  const personStyle = {
    border : '8px solid forestGreen',
    margin : '10px',
    padding:'10px',
    borderRadius : '10px',
  }
  return (
    <div style = {personStyle}> 
        <h1>Name: Shakib</h1>
        <h3>Hero of the year</h3>
    </div>
  )
}


export default App;
