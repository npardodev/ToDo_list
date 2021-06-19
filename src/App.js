import './App.css';
import {NavBar} from './components/Navbar';
import {ToDoContainer} from './components/ToDoContainer';

export const App = () => {
  return (
    <div>
      <NavBar/>
      <ToDoContainer/>
    </div>
  );
}

export default App;
