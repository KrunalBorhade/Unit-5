import logo from './logo.svg';
import './App.css';

function App() {
  let navbar = ["Services","Projects","Abouts"]
  return (
    <div className="App">
      <div>LOGOBACKERY</div>
      <div className="navbar">
        {navbar.map(el=>{
          return <a href>{el}</a>
        })}
      </div>
      <div>
        <button  className="btn">Contact</button>
      </div>
    </div>
  );
}

export default App;
