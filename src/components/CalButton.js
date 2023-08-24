import { Button } from '@mui/material'
import React from 'react'

const CalButton = ({value , clickButton}) => {
  return (
    <Button 
        variant='contained' 
        fullWidth 
        value={value}
        onClick={clickButton}
        
    >
        {value}

    </Button>
  )
}

export default CalButton
