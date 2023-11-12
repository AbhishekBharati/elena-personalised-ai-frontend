import axios from "axios";
import { BASE_URL } from "../utils/url";

// Function to send the expense data to the backend :-
export const addExpenses = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/expense/addItem`, data);
        return response
    } catch(err){
        console.log(err);
        throw err;
    }
}

export const getExpensesByDate = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/expense/totalExpensesByDate`);
        return response.data;
    } catch (err) {
        console.log(err);
        throw err;
    }
}