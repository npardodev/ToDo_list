import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Container, Button} from '@material-ui/core';
import {ToDoList} from './ToDoList.js';

export const ToDoContainer = () => {
  return (
    <>
      <Container className="Container">
          <h1>Lista de tareas</h1>
          <ToDoList/>
      </Container>
    </>
    );
}
