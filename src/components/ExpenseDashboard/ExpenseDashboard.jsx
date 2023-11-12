import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import {styled} from "@mui/material/styles";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PieChart from "./PieChart/PieChart";
import LineChart from "./LineChart/LineChart";
import { getExpensesByDate } from "../../api/expense";
import './ExpenseDashboard.scss';
import { Box, Button } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';


const StyledBottomNavigation = styled(BottomNavigation)({
    backgroundColor: '#1c1c26',
    height: '80px',
    width : '300px',
    margin : '20px',
    borderRadius : '20px',
});

const StyledBottomNavigationAction = styled(BottomNavigationAction)({
    color: '#1976D2',
    margin : '10px',
    border : '1px',
    borderRadius : '10px'

});

const ExpenseDashboard = ({onUpdate}) => {
    const [value, setValue] = useState('linechart')
    const [expenseData, setExpenseData] = useState([]);
    const [showLineChart, setShowLineChart] = useState(false); // To show animation features of linechart
    
    useEffect(() => {
        try {
            getExpensesByDate()
            .then((data) => {
                setExpenseData(data)
            })
        } catch (err) {
            console.error(err);
            alert('Something went wrong');
        }
    }, [])
    
    useEffect(() => {
        if (value === 'linechart') {
            setShowLineChart(false); // Hide the LineChart initially
            setTimeout(() => setShowLineChart(true), 10); // Then show the line Chart Gradually
        }
    }, [value])
    
    return (
        <>
            <Button onClick={() => {onUpdate(null)}} sx={{position:'absolute', margin : '20px' , top: '0', right :'0', padding : '10px'}} >
                <CloseIcon />                
            </Button>
            <div className="expenseDashboardNavigation">
            <Box>
            <StyledBottomNavigation 
                showLabels
                value={value}
                onChange={(event ,newValue) => {
                    setValue(newValue)
                }}
            >
                <StyledBottomNavigationAction 
                    label = "Line Chart"
                    value= "linechart"
                />
                <StyledBottomNavigationAction 
                    label = "Pie Chart"
                    value="piechart"
                />
            </StyledBottomNavigation>
            </Box>
            </div>
            {/* <PieChart /> */}
            {value === 'linechart' && showLineChart && (
                <div className={`chart ${showLineChart ? 'chart-animate' : ''}`}>
                <LineChart data={expenseData}/>
                </div>
            )}
        </>
    )
}

export default ExpenseDashboard;