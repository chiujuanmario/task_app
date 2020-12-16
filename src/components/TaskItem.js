import React from 'react';

// Material-UI
import { IconButton, ListItem, Tooltip, Typography } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import { makeStyles } from '@material-ui/core/styles';

// Redux
import { useDispatch } from 'react-redux';
import { openTask } from '../store/greateTask/actions';

const useStyles = makeStyles({
  taskItem: {
    display: "flex",
    justifyContent: "space-between",
    borderTop: "1px solid grey"
  },
});

export const TaskItem = ({ item }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const editHeandler = () => {
    dispatch(openTask(item))
  }

  return (
    <ListItem className={classes.taskItem}>
      <Typography variant="subtitle2">{item.taskDescription}</Typography>
      <Typography variant="overline">{item.date}</Typography>
      <Tooltip title="Edit task" placement="top">
        <IconButton onClick={editHeandler}>
          <CreateIcon />
        </IconButton>
      </Tooltip>
    </ListItem>
  )
}