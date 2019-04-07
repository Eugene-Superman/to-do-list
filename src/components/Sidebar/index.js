import React, { useState } from 'react';
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

function Sidebar(props) {
  const [selectedPriority, setPriority] = useState("Срочная важная задача");
  const [taskStatus, setStatus] = useState("Выполняется");
  const [taskTag, setTaskTag] = useState("тег0");

  const sideList = (
    <List>
      <ListItem key="task-name">
        <TextField label="Название задачи" />
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

      </ListItem>
  </List>
  );

  const {drawerDisplaying, setDrawerDisplaying} = props;

  return (
    <Drawer open={drawerDisplaying} onClose={()=>setDrawerDisplaying(false)}>
      <div
        tabIndex={0}
        role="button"
        onClick={()=>setDrawerDisplaying(true)}
        onKeyDown={()=>setDrawerDisplaying(true)}
      >
        <Typography variant="h6" color="inherit">Новая задача</Typography>
        <Divider />
        {sideList}
      </div>
    </Drawer>
  )

}

export default Sidebar;