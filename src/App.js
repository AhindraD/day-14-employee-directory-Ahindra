import logo from './logo.svg';
import './App.css';

let name = 'Ahindra';
let sayHello = () => 'Hey, There...';

function App() {
  let name = 'Ahindra';
  let sayHello = () => 'Hey, There';


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi, {name}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {sayHello()}
        </a>
      </header>
    </div>
  );
}

export default App;
