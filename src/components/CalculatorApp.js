import { Box,  Button,  Grid,  Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import CalButton from './CalButton'
import { Parser } from 'expr-eval'

const CalculatorApp = () => {
    const[input , setInput] = useState('')

    const calculate = () =>{
    try{
      const parser = new Parser();
      const expression  = parser.parse(input);
      setInput(expression.evaluate().toString());
    }catch(err){
      alert(err)
    }
    }
    
    const enterValue = (e) =>{
        setInput(input+e)
    }
    const eraseLast =() =>{
      let copy='';
      let len = input.length; 
      for(let i = 0 ; i < len-1 ; i++){
        copy  += input.charAt(i)
      }
      setInput(copy)

    }


  return (
    <>
      <Box sx={{
        border:'solid 1px black',
        maxWidth: 500,
        borderRadius:2,
        backgroundColor:`#424242`
      }} mt={5} py={2}>
        
        <Box sx={{
            display:'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            height:50,
            padding:2,
            border: 'solid 2px white',
            borderRadius:2,
            
        }} m={2}>
            <Typography variant='h6' color='white'>{input}</Typography>
        </Box>

        <Stack direction='column' spacing={2} m={2}>
            <Stack direction='row' spacing={1} display='flex' justifyContent='center'>
                <CalButton  value={'MC'} clickButton={()=>setInput('')}/>
                <CalButton  value={'U'} clickButton={eraseLast}/>
                <CalButton  value={'/'} clickButton={()=>enterValue('/')} />
                <CalButton  clickButton={()=>enterValue('*')} value={'X'}/>
            </Stack>
            <Stack direction='row' spacing={1} display='flex' justifyContent='center'>
                <CalButton clickButton={()=>enterValue(7)} value={7}/>
                <CalButton clickButton={()=>enterValue(8)} value={8}/>
                <CalButton clickButton={()=>enterValue(9)} value={9}/>
                <CalButton clickButton={()=>enterValue('-')} value={'-'}/>
            </Stack>
            <Stack direction='row' spacing={1} display='flex' justifyContent='center'>
                <CalButton clickButton={()=>enterValue(4)} value={4}/>
                <CalButton clickButton={()=>enterValue(5)} value={5}/>
                <CalButton clickButton={()=>enterValue(6)} value={6}/>
                <CalButton clickButton={()=>enterValue('+')} value={'+'}/>
            </Stack>

            <Stack direction='row' spacing={1} display='flex' justifyContent='center'>
              <Stack direction='column' spacing={1}display='flex' justifyContent='center'>
                <Stack direction='row' spacing={1}display='flex' justifyContent='center' >
                  <CalButton clickButton={()=>enterValue(1)} value={1}/>
                  <CalButton clickButton={()=>enterValue(2)} value={2}/>
                </Stack>
                <Grid container >
                  <Grid item xs={12} display='flex' justifyContent='center'  mt={.5}>
                    <CalButton clickButton={()=>enterValue(0)} value={0}/>
                  </Grid>
                </Grid>
              </Stack>
              <Stack direction='row' spacing={1} display='flex' justifyContent='center'>
                <Stack direction='column' spacing={1} display='flex' justifyContent='center'>
                  <CalButton clickButton={()=>enterValue(3)} value={3}/>
                  <CalButton clickButton={()=>enterValue('.')} value={'.'}/>
                </Stack>
                <Grid container>
                  <Grid item xs={12} display='flex' justifyContent='center'>
                    <Button variant='outlined' onClick={calculate}>=</Button>
                  </Grid>
                </Grid>
              </Stack>
            </Stack>





        </Stack>


      </Box>
    </>
  )
}

export default CalculatorApp
