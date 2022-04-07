import './styles/App.css';
import {FuncMessage} from './components/FuncMessage';
import {ClassMessage} from "./components/ClassMessage";

function App() {
  return (
    <div className="App">
      <FuncMessage message="Functional component!"/>
      <ClassMessage message="Hello, class component!"/>
    </div>
  );
}

export default App;
