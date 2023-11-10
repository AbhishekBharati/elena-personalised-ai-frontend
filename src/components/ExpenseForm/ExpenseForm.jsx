
import './ExpenseForm.css'
import { Button, Card, TextField } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import React from "react";


const ExpenseForm = ({onUpdate}) => {
  
    const sendDataToParent = (feature) => {
      onUpdate(null);
    }
    return (
        <div className= "fullScreenForm">
            <Card className='ExpenseForm' style={{backgroundColor : ' #1c1c26', borderRadius : '40px'}}>
                <Button onClick={sendDataToParent} sx={{position:'absolute', top: '0', right :'0', padding : '10px'}}>
                  <CloseIcon />
                </Button>
                <TextField label="Expenditure Product" InputLabelProps={{ style : {color : 'white'}}} variant="outlined" sx={{
                    input : {
                        color : 'white', 
                    },
                    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'white',
                      },
                    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'orange',
                      },
                      // Focused border color
                      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'blue',
                      },
                      // Input text color
                      '& .MuiInputBase-input': {
                        color: 'white', // or any other color
                      }
                }}/>
                <TextField label="Expenditure Amount" InputLabelProps={{ style : {color : 'white'}}}
                sx={{
                    margin : '10px',                    
                    height : '500 px',
                    input : {
                    color : 'white', 
                },
                '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white',
                  },
                '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'orange',
                  },
                  // Focused border color
                  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'blue',
                  },
                  // Input text color
                  '& .MuiInputBase-input': {
                    color: 'white', // or any other color
                  }
            }}
                 variant="outlined"/>
            <Button variant='contained' >Add</Button>
            </Card>
            </div>

    )
};

export default ExpenseForm