import './App.css';
import {ClassDialogue} from "./components/ClassDialogue/ClassDialogue";
import {FuncDialogue} from "./components/FuncDialogue/FuncDialogue";
function App() {
  return (
    <div className="App">
      <ClassDialogue/>
      <FuncDialogue/>
    </div>
  );
}

export {
  App
};
