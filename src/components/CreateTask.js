import React, { useState, useEffect } from 'react';

import { timeToSeconds, seconsToTime } from '../helpers';

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
import { closeTask } from '../store/createTask/actions';
import { selectTaskContent } from '../store/createTask/selectors';

const useStyles = makeStyles({
  taskCard: {
    backgroundColor: "#b8ddf2"
  },
  taskDescription: {
    width: "100%",
  }
});

export const CreateTask = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const taskContent = useSelector(selectTaskContent);

  const [taskValue, setTaskValue] = useState(taskContent?.task_msg || '');
  const [dateValue, setDateValue] = useState(taskContent?.task_date || '');
  const [timeValue, setTimeValue] = useState(taskContent?.task_time ? seconsToTime(taskContent?.task_time) : '');

  useEffect(() => {
    if (taskContent) {
      setTaskValue(taskContent.task_msg);
      setDateValue(taskContent.task_date);
      setTimeValue(seconsToTime(taskContent.task_time));
    } else {
      setTaskValue('');
      setDateValue('');
      setTimeValue('');
    }
  }, [taskContent]);

  const cancelTaskHeandler = () => {
    dispatch(closeTask())
  }

  const saveTaskHeandler = () => {
    if (!taskContent) {
      dispatch(addTask({
        task_msg: taskValue,
        task_date: dateValue,
        task_time: timeToSeconds(timeValue),
      }))
    } else {
      dispatch(editTask({
        id: taskContent.id,
        task_msg: taskValue,
        task_date: dateValue,
        task_time: timeToSeconds(timeValue),
      }
      ))
    }
    dispatch(closeTask())
  }

  const deleteHeandler = () => {
    dispatch(removeTask(taskContent.id));
    dispatch(closeTask());
  }

  const onTimeChange = (event) => {
    setTimeValue(event.target.value);
  };

  return (
    <Card>
      <CardContent>
        <List>
          <ListItem>
            <TextField
              label="Task Description"
              variant="outlined"
              value={taskValue}
              onChange={(event) => setTaskValue(event.target.value)}
              className={classes.taskDescription}
            />
          </ListItem>
          <ListItem style={{ display: "flex", justifyContent: "space-between" }}>
            <TextField
              id="date"
              label="Date"
              type="date"
              value={dateValue}
              onChange={(event) => setDateValue(event.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="time"
              label="Time"
              type="time"
              value={timeValue}
              onChange={onTimeChange}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300,
              }}
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