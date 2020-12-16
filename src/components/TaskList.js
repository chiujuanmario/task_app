import React from 'react';
import { TaskItem } from './TaskItem';

// Redux
import { useSelector } from 'react-redux';
import { selectTasks } from '../store/tasks/selectors';

// Material-UI
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  tasksList: {
    backgroundColor: "#edf5fa",
    border: "1px solid transparent",
    borderBottomLeftRadius: "5px",
    borderBottomRightRadius: "5px"
  },
});

export const TaskList = () => {
  const classes = useStyles();
  const tasksList = useSelector(selectTasks);

  return (
    <List className={classes.tasksList}>
      {tasksList.length > 0 && tasksList.map(item => <TaskItem item={item} />)}
    </List>
  )
}