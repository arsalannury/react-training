import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { HoverMode } from 'react-tsparticles';

export const useHeaderStyle = makeStyles({
  container_header : {
      margin: '0  !important',
      padding: '0  !important',
      maxWidth: 'unset !important',
  },
  box_header:{
    backgroundColor:'#fff !important',
    boxShadow: '0 0 10px blue',
  },
  navbar_icon_header:{
    color:'#888'
  },
  search_icon_header:{
    color:'#888',
    cursor:'pointer',
  },
  p_title:{
    fontSize:'25px !important',
    fontWeight:'bold !important',
    color:'#1976d2',
  },
  search_input:{
    width : '200px'
  }
})