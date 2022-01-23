/* React */
import React, {useState} from 'react';

/* Styles */
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import {Button, Card, CardActions, CardContent, Grid, Typography} from "@mui/material";

export const CountryComponent = (props: any) => {
    
// -----------------------------------
//  React Hooks
// -----------------------------------  

    const [medalCount, setMedalCount] = useState(0)
    

// -----------------------------------
//  Event Handlers
// -----------------------------------    

    const onAddMedalButtonClicked = (): void => {
        setMedalCount(medalCount + 1);
    }

    const onMinusMedalButtonClicked = (): void => {
        if(medalCount === 0){
            setMedalCount(0)
            return;
        } 
        setMedalCount(medalCount - 1);
    }


    const card = (
        <>
            <CardContent style={{margin: 'auto', width: '300px'}}>
                <Typography>
                    {props.name}
                </Typography>
                <Typography>
                    Gold Medal Count: {medalCount}
                </Typography>
            </CardContent>
            <CardActions>
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <Button endIcon={<RestartAltIcon/>} size="small" style={{marginTop: '10px',}} onClick={() => setMedalCount(0)} variant="outlined"> Clear</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button endIcon={<AddIcon/>} size="small" style={{marginTop: '10px',}} onClick={onAddMedalButtonClicked} variant="outlined"/>
                    </Grid>
                    <Grid item xs={3}>
                        <Button endIcon={<RemoveIcon/>} size="small" style={{marginTop: '10px',}} onClick={onMinusMedalButtonClicked} variant="outlined"/>
                    </Grid>
                </Grid>
            </CardActions>
        </>
    );

// -----------------------------------
//  Main Component Body
// -----------------------------------
    return (
        <div className="countryContainer">
            <Card variant="outlined" style={{maxWidth: '300px', margin: 'auto', backgroundColor: 'beige', marginTop: '10px'}}>
                {card}
            </Card>
        </div>
    )

}

export default CountryComponent;
