import React, { useState } from "react";
import './homepage.css'
import Features from "../../components/Features/Features";
import ExpenseForm from "../../components/ExpenseForm/ExpenseForm";

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
       <div className={activeFeature ? 'blurBackground' : ''}>
       <div className="homepage">
            <div className="features">
            <Features title = {"Expense Calculator"} onUpdate={handleFeatureSelect} feature = {"calculator"} />
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