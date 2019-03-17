import React from 'react'
import { Grid } from '@material-ui/core'
import LeftPane from './LeftPane'
import RightPane from './RightPane'

const styles = {
  paper: {
    padding: 20,
    margin: '10 0',
  },
}

const Exercises = props => {
  return (
    <Grid container>
      <LeftPane styles={styles} />
      <RightPane styles={styles} />
    </Grid>
  )
}

export default Exercises
