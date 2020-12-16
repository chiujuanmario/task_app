import React, { useState } from 'react';

// Material-UI
import {
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  List,
  ListItem,
  TextField
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { addTask, editTask, removeTask } from '../store/tasks/actions';
import { closeTask } from '../store/greateTask/actions';
import { selectTaskContent } from '../store/greateTask/selectors';


// Uniqid
const uniqid = require('uniqid');

const useStyles = makeStyles({
  taskCard: {
    backgroundColor: "#b8ddf2"
  },
  taskDescription: {
    width: "100%",
  }
});

export const GreateTask = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const taskContent = useSelector(selectTaskContent)

  const [taskValue, setTaskValue] = useState(taskContent ? taskContent.taskDescription : "");
  const [dateValue, setDateValue] = useState(taskContent ? taskContent.date : "2020-12-15");
  const [timeValue, setTimeValue] = useState(taskContent ? taskContent.time : "07:30");
  const [userValue, setUserValue] = useState(taskContent ? taskContent.assignUser : "");

  const cancelTaskHeandler = () => {
    dispatch(closeTask())
  }

  const saveTaskHeandler = () => {
    if (!taskContent) {
      dispatch(addTask({
        id: uniqid(),
        taskDescription: taskValue,
        date: dateValue,
        time: timeValue,
        assignUser: userValue
      }))
    } else {
      dispatch(editTask({
        id: taskContent.id,
        taskDescription: taskValue,
        date: dateValue,
        time: timeValue,
        assignUser: userValue
      }
      ))
    }
    dispatch(closeTask())
  }

  const deleteHeandler = () => {
    dispatch(removeTask(taskContent.id));
    dispatch(closeTask());
  }

  return (
    <Card>
      <CardContent>
        <List>
          <ListItem>
            <TextField
              label="Task Description"
              variant="outlined"
              defaultValue={taskValue}
              onChange={(event) => setTaskValue(event.target.value)}
              className={classes.taskDescription}
            />
          </ListItem>
          <ListItem style={{ display: "flex", justifyContent: "space-between" }}>
            <TextField
              id="date"
              label="Date"
              type="date"
              defaultValue={dateValue}
              onChange={(event) => setDateValue(event.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="time"
              label="Time"
              type="time"
              defaultValue={timeValue}
              onChange={(event) => setTimeValue(event.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300,
              }}
            />
          </ListItem>
          <ListItem>
            <TextField
              label="Assign user"
              variant="outlined"
              defaultValue={userValue}
              onChange={(event) => setUserValue(event.target.value)}
              className={classes.taskDescription}
            />
          </ListItem>
        </List>
      </CardContent>
      <CardActions style={{ display: "flex", justifyContent: "space-around" }}>
        {taskContent && <IconButton onClick={deleteHeandler}><DeleteIcon /></IconButton>}
        <Button variant="contained" color="secondary" onClick={cancelTaskHeandler}>Cancel</Button>
        <Button variant="contained" color="primary" onClick={saveTaskHeandler}>Save</Button>
      </CardActions>
    </Card>
  )
}