import React, {Dispatch, SetStateAction, useState} from 'react'
import {Button, Grid} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

export const MedalComponent = ({type, initialMedalCount, handleMedalCount}: MedalComponentProps) => {


// -----------------------------------
//  React Hooks
// -----------------------------------  

    const [medalCount, setMedalCount] = useState(initialMedalCount)

// -----------------------------------
//  Event Handlers
// -----------------------------------  
    
    const onRemoveMedalClicked = () => {
        setMedalCount(medalCount - 1);
    }
    
    const onAddMedalClicked = () => {
        setMedalCount(medalCount + 1);
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
}
                               
                               

                               
                               

