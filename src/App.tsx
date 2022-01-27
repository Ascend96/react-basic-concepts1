import React, {useState} from 'react';
import './App.css';
import CountryComponent from "./components/country/country-component";
import {Button, IconButton, TextField} from "@mui/material";
import PlusOneIcon from '@mui/icons-material/PlusOne';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import {Badge} from "@mui/icons-material";


function App() {

    let countries = [
        {id: 1, name: 'United States', goldMedalCount: 0},
        {id: 2, name: 'Japan', goldMedalCount: 0},
        {id: 3, name: 'United Kingdom', goldMedalCount: 0}
    ]

// -----------------------------------
//  React Hooks
// ----------------------------------- 
    
    const [countryState, setCountryState] = useState(countries)
    
    const [countryName, setCountryName] = useState('')
    
    const handleAddCountry = () => {
        let newCountry = {id: countryState.length + 1, name: countryName, goldMedalCount: 0}
        if(newCountry.name.trim().length === 0){
            console.log('please add a character')
            return;
        }
        if(countryState.find(x => x.name === newCountry.name)){
            console.log('country already exists')
            return;
        }
        setCountryState(countries => countries.concat(newCountry))
        setCountryName('')
    }
    
    const handleOnChange = (e: any) => {
        setCountryName(e.target.value)
    }
    
    
    const addCountryComponent = (
        <div className="addCountryContainer">
            <TextField value={countryName} className="countryInput" placeholder="Enter Country Name" onChange={handleOnChange}/>
            <Button className="countryInputBtn" style={{border: '1px solid black', height: '56px', backgroundColor: 'white'}} onClick={handleAddCountry}>Add Country<PlusOneIcon/></Button>
        </div>
    )


    return (
        <div className="App">
            <div className="titleContainer" style={{backgroundColor: '#e1c8ec', height: '90px', border: '3px solid #e4b9ea'}}>
                <h2 style={{margin: 'auto'}}>Country Olympic Medals</h2>
            </div>
            {addCountryComponent}
            {countryState.map(x => (
                <CountryComponent name={x.name} key={x.id}/>
            ))}
            
        </div>
    );
}

export default App;
