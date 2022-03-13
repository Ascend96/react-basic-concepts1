import React, {Dispatch, SetStateAction, useEffect, useState} from 'react'
import {Button, Grid} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import CountryService from "../../services/country.service";

export const MedalComponent = ({countryId, type, initialMedalCount, handleMedalCount}: MedalComponentProps) => {


// -----------------------------------
//  React Hooks
// -----------------------------------  

    const [medalCount, setMedalCount] = useState(initialMedalCount)

// -----------------------------------
//  Event Handlers
// -----------------------------------  
    
    const onRemoveMedalClicked = () => {
        const jsonPatch = [{op: "replace", path: type, value: medalCount - 1}];
        console.log(`country Id: ${countryId} type: ${type} medalCount: ${medalCount}`)
        console.log(`json path for ${type}: ${JSON.stringify(jsonPatch)}`);

        CountryService.updateCountry(countryId, jsonPatch).then(_ => {
            console.log(`Country ${countryId} Successfully updated`)
            setMedalCount(medalCount - 1);
        }).catch(e => {
            console.log(e);
        })
        
    }
    
    const onAddMedalClicked = () => {
        const jsonPatch = [{op: "replace", path: type, value: medalCount + 1}];
        console.log(`country Id: ${countryId} type: ${type} medalCount: ${medalCount}`)
        console.log(`json path for ${type}: ${JSON.stringify(jsonPatch)}`);

        CountryService.updateCountry(countryId, jsonPatch).then(_ => {
            console.log(`Country ${countryId} Successfully updated`)
            setMedalCount(medalCount + 1)
        }).catch(e => {
            console.log(e);
        })
    }
    
        handleMedalCount(medalCount);
// -----------------------------------
//  Main Component Body
// ----------------------------------- 
    
    return (
        <>
            <Grid style={{margin: '10px'}} container spacing={1}>
                <Grid item xs={6}>
                    <div style={{textAlign: 'right'}}>{type} Medals: {medalCount}</div>
                </Grid>
                <Grid item xs={3}>
                    <Button endIcon={<AddIcon/>} size="small" style={{margin: 'auto'}} onClick={() => onAddMedalClicked()} variant="outlined"/>
                </Grid>
                <Grid item xs={3}>
                    <Button disabled={medalCount === 0} endIcon={<RemoveIcon/>} size="small" style={{margin: 'auto  '}} onClick={() => onRemoveMedalClicked()} variant="outlined"/>
                </Grid>
            </Grid>
        </>
    )
}

export default MedalComponent;

// -----------------------------------
//  Interfaces
// -----------------------------------  

interface MedalComponentProps {
    type: 'Bronze' | 'Silver' | 'Gold';
    initialMedalCount: number;
    handleMedalCount: Dispatch<SetStateAction<number>>;
    countryId: number;
}
                               
                               

                               
                               

