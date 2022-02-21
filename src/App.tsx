import React, {useEffect, useState} from 'react';
import './App.css';
import CountryComponent from "./components/country/country-component";
import {Grid} from "@mui/material";
import {AddCountryInputComponent} from "./components/add-country-input/add-country-input-component";
import CountryService from "./services/country.service";


function App() {
    
// -----------------------------------
//  React Hooks
// ----------------------------------- 
    
    const [countryState, setCountryState] = useState([]);

    useEffect(() => {
        CountryService.getAllCountries().then(resp => {
            setCountryState(resp.data);
            console.log(resp.data)
        });
    }, [])

    
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
                <CountryComponent setCountries={setCountryState} id={x.id} gold={x.gold} silver={x.silver} bronze={x.bronze} name={x.name} key={x.id}/>
                </Grid>
            ))}
            </Grid>
            <AddCountryInputComponent countries={countryState} setCountries={setCountryState} />
        </div>
    );
}

export default App;
