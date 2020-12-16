import React from 'react';
import { TaskItem } from './TaskItem';

// Redux
import { useSelector } from 'react-redux';
import { selectTasks } from '../store/tasks/selectors';

// Material-UI
import { List, Paper,  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  tasksList: {
    border: "1px solid transparent",
    borderBottomLeftRadius: "5px",
    borderBottomRightRadius: "5px"
  },
});

export const TaskList = () => {
  const classes = useStyles();
  const tasksList = useSelector(selectTasks);

  return (
    <Paper>
      <List className={classes.tasksList}>
        {tasksList.length > 0 && tasksList.map(item => <TaskItem key={item.id} item={item} />)}
      </List>
    </Paper>
  )
}