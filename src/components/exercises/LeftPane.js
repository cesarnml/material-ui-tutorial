import React from 'react'
import { Grid, Paper } from '@material-ui/core'

const LeftPane = ({ styles }) => {
  return (
    <Grid item sm>
      <Paper style={styles.paper}>Left Pane</Paper>
    </Grid>
  )
}

export default LeftPane
