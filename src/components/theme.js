import { createTheme } from "@mui/material";


const theme = createTheme({
    typography:{
        allVariants:'white'
    },
    components: {
        MuiGrid: {
            styleOverrides: {
                item: {
                    display: 'flex',
                    justifyContent:'center',
                    alignItems: 'center',
                    
                }
            }
        },
        MuiButton:  {
            styleOverrides: {
                contained: {
                    maxWidth:200,
                    maxHeight: 300,
                    fontSize:25,
                    ":hover":{
                                
                    }
                },
                outlined:{
                    height:120,
                    backgroundColor:'#c62828',
                    color:'white',
                    fontSize:40,
                    ":hover":{
                        backgroundColor:'red',
                        color:'white'
                    }
                }
            }
        }
    }
})

export default theme