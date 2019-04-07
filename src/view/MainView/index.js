import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Sidebar from '../../components/Sidebar';

function MainView(props) {
  const [drawerDisplaying, setDrawerDisplaying] = useState(false);

  return (
    <div>
      <Button variant="contained" color="primary" onClick={()=>setDrawerDisplaying(true)}>Добавить задачу</Button>
      <Sidebar drawerDisplaying={drawerDisplaying} setDrawerDisplaying={setDrawerDisplaying}/>
    </div>
  )
}

export default MainView;