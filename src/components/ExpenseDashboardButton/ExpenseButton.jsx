import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import './ExpenseButton.scss'
import React from "react";

const useStyles = makeStyles({
    root : {
        width : '250px',
        height : '150px',
        transition : 'transform 10s ease',
        transformOrigin : 'center',
        boxShadow: '0px 10px 15px rgba(0,0,0,0.2)',
        zIndex : 1,
        '&:hover' : {
            transform : 'scale3d(1.2,1.2,1)',
            boxShadow: '0px 10px 15px rgba(0,0,0,0.2)',
            zIndex : 2
        }
    }
})

const ExpenseDashboardButton = ({onUpdate, feature}) => {
    const classes = useStyles();
    const sendDataToParent = (feature) => {
        onUpdate(feature);
    }
    return (
        <>
         <Button 
         onClick={() => sendDataToParent(feature)}
         className={classes.root} sx={{backgroundColor : '#1c1c26', color : 'white', margin : '15px', borderRadius : '50px'}} >   
            <div>
            Expense <br /> Dashboard 
            </div>
         <div className="loader">
            <span>Hey</span>
         </div>
         </Button>
        </>
    )
}

export default ExpenseDashboardButton;