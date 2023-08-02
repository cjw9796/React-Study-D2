import './App.css';
import styles from './Module.app.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

/**
 * from 다음에 폴더를 가져올 때 ./ 는 현재 폴더 위치를 나타낸다. 
 * html : class 
 * react : className 
 * 
 * CSS는 따로 .css 형태를 만들어서 className으로 태그 이름을 지정해주고 스타일을 적용할 수 있다.  
 * @returns 
 */


function App() {
  return (
    <div>
      <br />
      <TextField
        id="outlined-read-only-input"
        label="Read Only"
        defaultValue="Hello World"
        InputProps={{
          readOnly: true,
        }}
      />

      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
      >
        <IconButton sx={{ p: '10px' }} aria-label="menu">
          <MenuIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search nany Maps"
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
          <DirectionsIcon />
        <Avatar alt="Sany" src="/static/images/avatar/1.jpg" />
        <Avatar alt="Sany" src="C:\Users\user1\Downloads\android.png" />
        
        </IconButton>
      </Paper>
      
    </div>

  );
}


export default App;
