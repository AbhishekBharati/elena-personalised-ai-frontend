import { makeStyles } from "@mui/styles";
import { Button, Card } from "@mui/material";
import React, { useState } from "react";
import './features.css';

const useStyles = makeStyles({
    root : {
        backgroundColor : 'blue',
        width : '250px',
        height : '150px',
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'center',
        margin : '8px',
        transition : 'transform 10s ease', // For smooth transition
        transformOrigin : 'bottom center', // Ensures that the element scales from bottom
        boxShadow: '0px 10px 15px rgba(0,0,0,0.2)',
        '&:hover' : {
            transform : 'scale3d(1.3, 1.3, 1) translateY(-15%)',
            boxShadow: '0px 10px 15px rgba(0,0,0,0.2)',
            zIndex : '2'
        }
    },
});

const Features = ({title, feature, onUpdate}) => {
    const classes = useStyles();
    
    const sendDataToParent = (feature) => {
        onUpdate(feature);
    }

    return (
        <> 
           <Button className={classes.root} onClick={() => sendDataToParent(feature)} style={{backgroundColor : '#1c1c26', color : 'white', margin : '15px',  borderRadius : '25px'}} >
                <h2>{title}</h2>
            </Button> 
        </>
    )
}

export default Features