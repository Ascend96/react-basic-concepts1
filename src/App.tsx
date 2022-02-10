import React, {useState} from 'react';
import './App.css';
import CountryComponent from "./components/country/country-component";
import {Button, Grid, IconButton, TextField} from "@mui/material";
import PlusOneIcon from '@mui/icons-material/PlusOne';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import {Badge} from "@mui/icons-material";
import {AddCountryInputComponent} from "./components/add-country-input/add-country-input-component";


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
    
// -----------------------------------
//  Main Component Body
// ----------------------------------- 
    return (
        <div className="App">
            <div className="titleContainer" style={{backgroundColor: '#e1c8ec', height: '90px', border: '3px solid #e4b9ea'}}>
                <h2 style={{margin: 'auto'}}>Country Olympic Medals</h2>
            </div>
            <Grid container spacing={2}>
            {countryState.map(x => (
                <Grid item xs={4}>
                <CountryComponent name={x.name} key={x.id}/>
                </Grid>
            ))}
            </Grid>
            <AddCountryInputComponent countries={countryState} setCountries={setCountryState} />
        </div>
    );
}

export default App;
