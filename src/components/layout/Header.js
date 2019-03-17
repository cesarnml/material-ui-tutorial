import React from 'react'
import { AppBar, Typography, Toolbar } from '@material-ui/core'

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="headline" color="inherit">
          Exercise Database
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
