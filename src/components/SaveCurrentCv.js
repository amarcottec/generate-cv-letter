import React from "react";
import { useState, useEffect } from "react";

const SaveCurrentCv = ({savedData}) => {

   saveData(savedData);
    useEffect(() => {
        loadData();
    }, []);

    const saveData = (newData) => {
        //convert to JASON format
        const jasonString = JSON.stringify(newData);
        // save the jason string into localstorage
        localStorage.setItem('currentCvSaved', jasonData);
    };

    const loadData = () =>{
        // get the jason string from local storage 
        const jasonString = localStorage.getItem('currentCvSaved');
        if(jasonString){
            // convert jasonData to Jason object
            const jasonData = JSON.parse(jasonString);
            savedData(jasonData);
        }
    }


}

export default SaveCurrentCv;