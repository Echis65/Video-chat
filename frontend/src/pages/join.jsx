import React, { useState } from "react";
import "./join.css"
import { TextField, Button, Typography} from '@material-ui/core'

export default function JoinRoom() {
  const [room, setRoom] = useState(null);

  const onSubmit = () => {
    window.location.assign(`/video/${room}`);
  };

  return (
    <div className="join">
      <Typography variant="h6">Create or join existing room</Typography>
      <div className="detail">
      <TextField className="texfield" variant="outlined" onChange={(e) => setRoom(e.target.value)} fullWidth/>
      <Button className="button" variant="contained" color="primary" size="medium"  onClick={onSubmit} >Submit</Button>
      </div>
    </div>
  );
}
