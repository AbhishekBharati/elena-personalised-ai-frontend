import React, { useState } from "react";
import './homepage.css'
import Features from "../../components/Features/Features";
import ExpenseForm from "../../components/ExpenseForm/ExpenseForm";
import Appbar from "../../components/Appbar/Appbar";
import ExpenseDashboardButton from "../../components/ExpenseDashboardButton/ExpenseButton";
import ExpenseDashboard from "../../components/ExpenseDashboard/ExpenseDashboard";

const Homepage = () => {
    const [activeFeature, setActiveFeature] = useState(null);
    
    const handleFeatureSelect = (feature) => {
        setActiveFeature(feature);
    };

    return (
        <>
        {activeFeature === 'calculator' && (
        <div className="fullScreenForm">
            <ExpenseForm onUpdate={handleFeatureSelect}/>
        </div>
       )}
        {activeFeature === 'expenseDashboard' && (
            <div className="expenseDashboardFullscreen">
                <ExpenseDashboard onUpdate={handleFeatureSelect} />
            </div>
        )}
       <div className={activeFeature ? 'blurBackground' : ''}>
       <div className="homepage">
            <div>
            <Appbar />
            {/* <ExpenseDashboard /> */}
            </div>
            <div className="tools">
                <ExpenseDashboardButton feature = {"expenseDashboard"} onUpdate = {handleFeatureSelect} />
            </div>
            <div className="features">
            <Features title = {"Add    Expense"} onUpdate={handleFeatureSelect} feature = {"calculator"} />
            <Features onUpdate={handleFeatureSelect} feature={null}/>
            <Features onUpdate={handleFeatureSelect} feature={null}/>
            <Features onUpdate={handleFeatureSelect} feature={null}/>
            <Features onUpdate={handleFeatureSelect} feature={null}/>
            <Features onUpdate={handleFeatureSelect} feature={null}/>
            </div>        
       </div>
       </div> 
       </>
    )
}

export default Homepage;