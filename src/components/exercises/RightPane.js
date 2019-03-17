import React from 'react'
import { Grid, Paper } from '@material-ui/core'

const RightPane = ({ styles }) => {
  return (
    <Grid item sm>
      <Paper style={styles.paper}>Left Pane</Paper>
    </Grid>
  )
}

export default RightPane
