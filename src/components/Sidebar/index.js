import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  h6: {
    padding: "20px"
  },
  saveButton: {
    marginRight: "10px"
  }
});

function Sidebar(props) {
  const {classes, drawerDisplaying, setDrawerDisplaying} = props;
  
  const [taskName, setTaskName] = useState("");
  const [isInputError, setInputError] = useState(false)
  const [selectedPriority, setPriority] = useState("Срочная важная задача");
  const [taskStatus, setStatus] = useState("Выполняется");
  const [taskTag, setTaskTag] = useState("Тег0");

  const handleSubmit = () => {
    if(!taskName) {
      setInputError(true);
    }
  }

  const sideList = (
    <List>
      <ListItem key="task-name">
        <TextField error={isInputError} value={taskName} onChange={(e)=>setTaskName(e.target.value)} label="Название задачи" />
      </ListItem>
      <ListItem key="task-description">
        <TextField multiline={true} label="Описание задачи" />
      </ListItem>
      <ListItem key="task-date">
        <TextField  label="Дата выполнения" type="date" InputLabelProps={{shrink: true}} />
      </ListItem>
      <ListItem key="task-priority">

      <FormControl component="fieldset">
          <RadioGroup
            aria-label="priority-radio"
            name="priority-radio"
            value={selectedPriority}
            onChange={(e)=> setPriority(e.target.value)}
          >
            <FormControlLabel
              value="Срочная важная задача"
              control={<Radio color="primary" />}
              label="Срочная важная задача"
              labelPlacement="end"
            />
            <FormControlLabel
              value="Срочная неважная задача"
              control={<Radio color="primary" />}
              label="Срочная неважная задача"
              labelPlacement="end"
            />
            <FormControlLabel
              value="Не срочная важная задача"
              control={<Radio color="primary" />}
              label="Не срочная важная задача"
              labelPlacement="end"
            />
            <FormControlLabel
              value="Не срочная неважная задача"
              control={<Radio color="primary" />}
              label="Не срочная неважная задача"
              labelPlacement="end"
            />
          </RadioGroup>
        </FormControl>
      </ListItem>
      <ListItem key="task-status">
      <form autoComplete="off">
        <FormControl>
          <InputLabel htmlFor="">Статус</InputLabel>
          <Select
            value={taskStatus}
            onChange={(e)=> setStatus(e.target.value)}
            inputProps={{
              name: 'status',
              id: 'status-simple',
            }}
          >
            <MenuItem value="Выполняется">Выполняется</MenuItem>
            <MenuItem value="На потом">На потом</MenuItem>
            <MenuItem value="Выполнена">Выполнена</MenuItem>
          </Select>
        </FormControl>
      </form>
      </ListItem>
      <ListItem key="task-tag">
        <form autoComplete="on">
          <FormControl>
            <InputLabel htmlFor="">Тег</InputLabel>
            <Select
              value={taskTag}
              onChange={(e)=> setTaskTag(e.target.value)}
              inputProps={{
                name: 'tag-select',
                id: 'tag-select',
              }}
            >
              <MenuItem value="Тег0">Тег0</MenuItem>
              <MenuItem value="Тег1">Тег1</MenuItem>
              <MenuItem value="Тег2">Тег2</MenuItem>
              <MenuItem value="Тег3">Тег3</MenuItem>
            </Select>
          </FormControl>
        </form>
      </ListItem>
      <ListItem key="save-cancel">
        <Button className={classes.saveButton} onClick={()=>handleSubmit()} variant="contained" color="primary">Сохранить</Button>
        <Button variant="contained" color="secondary" onClick={()=>setDrawerDisplaying(false)}>
          Отмена
        </Button>
      </ListItem>
  </List>
  );

  return (
    <Drawer open={drawerDisplaying} onClose={()=>setDrawerDisplaying(false)}>
      <div tabIndex={0} role="button">
        <Typography className={classes.h6} variant="h6" color="inherit">Новая задача</Typography>
        <Divider />
        {sideList}
      </div>
    </Drawer>
  )
}

export default withStyles(styles)(Sidebar);