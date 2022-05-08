
import './App.css';
import { Todos } from './components/Todos';
import {Routes, Route} from 'react-router-dom'
import {TodoItem} from './components/TodoItem'

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Todos/>}></Route>
        <Route path="/todos/:id" element={<TodoItem/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
