
import './ExpenseForm.css'
import { Button, Card, TextField } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from "react";
import { addExpenses } from '../../api/expense';



const ExpenseForm = ({onUpdate}) => {
  
    const [addExpense, setAddExpense] = useState({
      item : '',
      amount : ''
    });
  
    const handleInputChange = (e) => {
      const {name , value} = e.target;
      setAddExpense({
        ...addExpense,
        [name] : value
      });
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      try {
        addExpenses(addExpense)
        .then(() => {
          alert('Expenses Added.');
        })
      } catch (err) {
        console.error(err);
      }
    }
  
    const sendDataToParent = (feature) => {
      onUpdate(null);
    }
    return (
        <div className= "fullScreenForm">
            <Card className='ExpenseForm' style={{backgroundColor : ' #1c1c26', borderRadius : '40px'}}>
                <Button onClick={sendDataToParent} sx={{position:'absolute', top: '0', right :'0', padding : '10px'}}>
                  <CloseIcon />
                </Button>
                <TextField 
                  value={addExpense.item}
                  name='item'
                  onChange={handleInputChange}
                  label="Expenditure Product" 
                  InputLabelProps={{ style : {color : 'white'}}} 
                  variant="outlined" 
                  sx={{
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
                <TextField
                  value={addExpense.amount}
                  name='amount'
                  onChange={handleInputChange}
                   label="Expenditure Amount" InputLabelProps={{ style : {color : 'white'}}}
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
            <Button 
            onClick={handleSubmit}
            variant='contained' >Add</Button>
            </Card>
            </div>

    )
};

export default ExpenseForm