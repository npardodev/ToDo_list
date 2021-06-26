import {NavBar} from './components/Navbar/Navbar.js';
import {TaskDetail} from './components/TaskDetail/TaskDetail.js';
import {TaskForm} from './components/TaskForm/TaskForm.js';

import {TaskContainer} from './components/TaskContainer/TaskContainer.js';

export const App = () => {
  return <>
    <NavBar/>
    <TaskContainer/>
  </>
}

export default App;

