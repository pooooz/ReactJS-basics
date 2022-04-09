import './App.css';
import {FuncMessage} from './components/FuncMessage/FuncMessage';
import {ClassMessage} from "./components/ClassMessage/ClassMessage";

function App() {
  return (
    <div className="App">
      <FuncMessage message="Functional component!"/>
      <ClassMessage message="Hello, class component!"/>
    </div>
  );
}

export {
  App
};
