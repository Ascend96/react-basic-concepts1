import {Box, Button, Fab, Grid, Modal, TextField} from "@mui/material";
import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import PlusOneIcon from "@mui/icons-material/PlusOne";
import SearchIcon from '@mui/icons-material/Search';
import CountryService from "../../services/country.service";

export const AddCountryInputComponent = ({countries, setCountries, onCountryAdded}: AddCountryInputComponentProps) => {

// -----------------------------------
//  Styles
// ----------------------------------- 
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
    };

    const fabStyle = {
        position: 'absolute',
        bottom: 16,
        right: 16,
    };

// -----------------------------------
//  React State
// -----------------------------------
    const [countryName, setCountryName] = useState('')
    const [countryGold, setCountryGold] = useState(0);
    const [countrySilver, setCountrySilver] = useState(0);
    const [countryBronze, setCountryBronze] = useState(0);
    const [show, setShow] = useState(false);

// -----------------------------------
//  React Hooks
// ----------------------------------- 
    
    const handleShow = () => {
        setShow(true);
    }
    
    const handleClose = () => {
        setShow(false);
    }

    const handleOnChange = (e: any) => {
        setCountryName(e.target.value)
    }
    
    useEffect(() => {
        
    }, )

    const handleAddCountry = () => {
        let newCountry = {name: countryName, gold: countryGold, silver: countrySilver, bronze: countryBronze}
        if(newCountry.name.trim().length === 0){
            console.log('please add a character')
            return;
        }
        if(countries.find(x => x.name === newCountry.name)){
            console.log('country already exists')
            return;
        }
        console.log(newCountry)
        CountryService.addCountry(newCountry).then(resp => {
            if(resp.status === 200){
                onCountryAdded(true);
            } 
            
        }).catch(e => console.log(e))
        setShow(false);
    }
    
    const handleSearch = () => {
        CountryService.getCountry(1).then(resp => {
            console.log(`Button is not currently functional but will be used for search, currently it returns the country name with the ID of 1: ${resp.data.name}`)
        })
    }
    
// -----------------------------------
//  Component Rendering Functions
// ----------------------------------- 
    
    const floatingActionButton = () =>
    {
        return (
            <Fab sx={{...fabStyle}} onClick={handleShow}>
                <AddIcon />
            </Fab>
        )
    }

    const addCountryName = (
        <span>
            <TextField value={countryName} className="countryInput" placeholder="Enter Country Name" onChange={handleOnChange}/>
        </span>
    )

    const addCountryGoldMedals = (
        <span>
            <TextField label="Gold Medals" type={"number"} value={countryGold} className="countryInput" placeholder="Enter # of Gold Medals" onChange={(e: any) => setCountryGold(e.target.value)}/>
        </span>
    )

    const addCountrySilverMedals = (
        <span>
            <TextField label="Silver Medals" type={"number"} value={countrySilver} className="countryInput" placeholder="Enter # of Silver Medals" onChange={(e: any) => setCountrySilver(e.target.value)}/>
        </span>
    )
    const addCountryBronzeMedals = (
        <span>
            <TextField label="Bronze Medals" type={"number"} value={countryBronze} className="countryInput" placeholder="Enter # of Bronze Medals" onChange={(e: any) => setCountryBronze(e.target.value)}/>
        </span>
    )

// -----------------------------------
//  Main Component Body
// ----------------------------------- 
    
    return (
        <>
        <Modal open={show} onClose={handleClose}>
            <Box sx={{...style, width: 400}}>
                <h2 id="child-modal-title">Add a Country</h2>
                <br/>
                <div id="child-modal-description">
                    {addCountryName}
                </div>
                <br/>
                <div>
                    {addCountryGoldMedals}
                </div>
                <br/>
                <div>
                    {addCountrySilverMedals}
                </div>
                <br/>
                <div>
                    {addCountryBronzeMedals}
                </div>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Button onClick={handleClose}>Close</Button>
                    </Grid>
                    <Grid item xs={8}>
                        <Button disabled={!countryName.trim()} className="countryInputBtn" style={{border: '1px solid black', height: '56px', backgroundColor: 'white', float: 'right'}} onClick={handleAddCountry}>Add Country<PlusOneIcon/></Button>
                    </Grid>
                </Grid>
                
            </Box>
        </Modal>
            <Fab sx={{...fabStyle, bottom: 86}} onClick={handleSearch}>
                <SearchIcon />
            </Fab>
            {floatingActionButton()}
            </>
    )
}

// -----------------------------------
//  Interfaces
// ----------------------------------- 

interface AddCountryInputComponentProps {
    countries: any;
    setCountries: Function;
    onCountryAdded: Function;
}