import React from 'react';
import { TaskList } from './components/TaskList';
import { GreateTask } from './components/GreateTask';

// Material-UI
import { Button, Tooltip, Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { openTask } from './store/greateTask/actions';
import { selectTaskIsOpen } from './store/greateTask/selectors';
import { selectTasks } from './store/tasks/selectors';

const useStyles = makeStyles({
  taskConteiner: {
    marginTop: "50px",
    maxWidth: "400px",
    border: "1px solid grey",
    borderRadius: "5px",
    padding: "0"
  },
  taskHeader: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    backgroundColor: "#f2f2f2",
    border: "1px solid transparent",
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px"
  }
})

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isOpenTask = useSelector(selectTaskIsOpen);
  const tasksList = useSelector(selectTasks);

  const newTaskHeandler = () => {
    dispatch(openTask())
  }

  return (
    <Container maxWidth="sm" className={classes.taskConteiner}>
      <Typography variant="h4" className={classes.taskHeader}>
        <Typography variant="p">Tasks
          {tasksList.length > 0 && <Typography variant="span"> {tasksList.length}</Typography>}
        </Typography>
        <Tooltip title="New Task" placement="top">
          <Button variant="contained" onClick={newTaskHeandler}>
            <AddIcon />
          </Button>
        </Tooltip>
      </Typography>
      {isOpenTask && <GreateTask />}
      <TaskList />
    </Container>
  );
}

export default App;
