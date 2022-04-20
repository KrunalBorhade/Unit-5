import logo from './logo.svg';
import './App.css';

function App() {
  const data = [
    {
      title:"Mobile Operating System",
      items:["Android","Blackberry","iPhone","Windows Phone"]
    },
    {
      title:"Mobile Manufactures",
      items: ["Samsung","HTC","Micromax","Apple"]
    }
  ];
  // const opeartingSystem = ["Android","Blackberry","iPhone","Windows Phone"];
  //   const manufacturers = ["Samsung","HTC","Micromax","Apple"];
  //   const title = ["Mobile Operating System","Mobile Manufactures"]
  return (
    <div className="App">
      
    {
      data.map((e)=>{
        
      })
    }
    </div>
  );
}



export default App;
