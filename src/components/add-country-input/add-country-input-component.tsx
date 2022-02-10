import {Box, Button, Fab, Grid, Modal, TextField} from "@mui/material";
import React, {Dispatch, SetStateAction, useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import PlusOneIcon from "@mui/icons-material/PlusOne";

export const AddCountryInputComponent = ({countries, setCountries}: AddCountryInputComponentProps) => {

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
//  React Hooks
// -----------------------------------
    const [countryName, setCountryName] = useState('')
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

    const handleAddCountry = () => {
        let newCountry = {id: countries.length + 1, name: countryName, goldMedalCount: 0}
        if(newCountry.name.trim().length === 0){
            console.log('please add a character')
            return;
        }
        if(countries.find(x => x.name === newCountry.name)){
            console.log('country already exists')
            return;
        }
        setCountries(countries => countries.concat(newCountry))
        setCountryName('')
        setShow(false);
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

    const addCountryComponent = (
        <span>
            <TextField value={countryName} className="countryInput" placeholder="Enter Country Name" onChange={handleOnChange}/>
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
                <p id="child-modal-description">
                    {addCountryComponent}
                </p>
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
            {floatingActionButton()}
            </>
    )
}

// -----------------------------------
//  Interfaces
// ----------------------------------- 

interface AddCountryInputComponentProps {
    countries: {id: number, name: string, goldMedalCount: number}[];
    setCountries: Dispatch<SetStateAction<{id: number, name: string, goldMedalCount: number}[]>>;
}