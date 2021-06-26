import React, {useState, useEffect} from 'react';
import {Container, Button, Box, TextField} from '@material-ui/core';
import {CircularProgress, LinearProgress, Card, CardContent, CardActions} from '@material-ui/core/';
import {IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import { makeStyles } from '@material-ui/core/styles';
import { TaskContainerStyle } from './TaskContainerStyle.js';
import {TaskList} from './../TaskList/TaskList.js'
import { CardComponent } from '../TaskDetail/TaskDetail.js';
const useStyles = makeStyles((theme) => TaskContainerStyle(theme));

const statusType = 
 { 
    initial: 'none',
    checked: 'checked',
    pending: 'pending',
    finished: 'pending',

};

const data = [

  {
    id: 1,
    name: 'traer vbn896',
    priority: 'Higth',
    status: statusType.initial
  },
  {
    id: 2,
    name: '232 3 vhg',
    priority: 'aweaw',
    status: statusType.finished
  },
  {
    id: 3,
    name: 'traer Leche',
    priority: 'jkljkl',
    status: statusType.pending
  },
  {
    id: 4,
    name: 'traer fsdf',
    priority: 'Higth',
    status: statusType.checked
  },
  {
    id: 5,
    name: 'traer fh',
    priority: 'ertxzc',
    status: statusType.checked
  }

];

const appStruct ={ 
  title: 'Lista de tareas'}

const emuleDataFromBackend = new Promise ((resolve, reject)=>{
    setTimeout(() => {
      resolve(data);
    }, 0);  
});



const msjs = [
  {
    name:'Tarea-1',
    description: 'descpricion 1'
  },
  {
    name:'Tarea-2',
    description: 'descpricion 2'
  },
  {
    name:'Tarea-3',
    description: 'descpricion 3'
  },
  {
    name:'Tarea-4',
    description: 'descpricion 4'
  },
];


const buttonsTasks = [
  {
    type: 'delete',
    icon: <DeleteIcon/>,
    color: 'primary',
  },
  {
    type: 'edition',
    icon: <EditIcon/>,
    color: 'primary',
  },
  {
    type: 'calendar',
    icon: <CalendarTodayIcon/>,
    color: 'primary',
  },
  {
    type: 'mark',
    icon: <BookmarkIcon/>,
    color: 'primary',
  }
];


export const TaskButton = ({button}) => {
  return <IconButton
    arial-label="close"
    color={button.color}
    onClick={button.action}
    size="small"
    >
      {button.icon} 
  </IconButton>
}



export const ListOfButtons = ({buttonsTasks}) => {
  return <>
  {buttonsTasks.map((butt, index)=>{
    return <TaskButton key={index}  button={butt}/>
    })
  }
  </>
}



const myPromise = new Promise ((resolve, reject)=>{
    resolve(msjs);
});


export const CustomCardTasks = (props) => {
  return <>
  <Card>
    <CardContent>
      {props.children}
    </CardContent> 
    <CardActions>
      <ListOfButtons buttonsTasks={buttonsTasks} />
    </CardActions>
  </Card>
  </>
}


export const Task = props =>{
  return <>
    <Box flexDirection="column">
      <h6>{props.id} </h6>
      <h4>{props.status} </h4>
    </Box>
    <h3>{props.name} </h3>
    <h4>{props.priority} </h4>
    <p>{props.description}</p>
  </>
}

export const ListOfTask = ({tasks}) => {

  const classes = useStyles();


  return (<section>
    <Container className={classes.container}>

    {tasks === 0 ? <LinearProgress className={classes.LinearProgress} color="primary"  />:
      tasks.map((task,index)=>{
        return <CustomCardTasks key={index}>
          <Task {...task}/>
        </CustomCardTasks>
      })
     }
    </Container>
  </section>

  )
}


export const CustomFormMessages = ({taskForm, newTask, handlerChange}) => {
  return (
    <Card>
        <CardContent>
        <form onSubmit={newTask}>
          <TextField name="name" label="Nombre" value={taskForm.name} variant="outlined" onChange={handlerChange}/>
          <TextField name="description" label="descripcion" value={taskForm.description} variant="outlined" onChange={handlerChange}/>
          <Button disable ={taskForm.name === '' || taskForm.description ===''} type="submit">Agregar </Button>
        </form>
        </CardContent>
    </Card> 
  )
}


export const LoaderNewTask = ({tasks, addNewTask}) => {
  const initialStateForm = {name:'', description:'' };
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const [taskForm, setTaskForm] = useState(initialStateForm);

  const newMessage = e => {
    e.preventDefault();
    addNewTask({nombre:name, description:description});
    setTaskForm(initialStateForm);
  }

  const handlerChange = e =>{
    setTaskForm({...taskForm,
      [e.target.name]:e.target.value});
  }
  return <CustomFormMessages taskForm={taskForm} handlerChange={handlerChange} newTask={newMessage} />
}




export const TaskContainer = () => {
  
  const initialTaskState =[];
  const [tasks, setTasks] = useState(initialTaskState);
  const [error, setError] = useState('');
  const [showError, setShowError] = useState(false);
  const classes = useStyles();

  useEffect(() => {
      getTask();
  }, []);

  const getTask = (data) =>{
    emuleDataFromBackend
    .then((data) => setTasks(data))
    .catch((error) => setError(error))
  }

  const filterItems = (data, filterBy) => {
    return filterBy === '' ? data : data.filter(item => item.type === filterBy);
  }

  const addNewTask = newTask => setTasks([...tasks,newTask]);

  return <div className={classes.container}>
    <LoaderNewTask tasks={tasks} addNewTask={addNewTask}/>
    <ListOfTask tasks={tasks}/>
  </div>
}




