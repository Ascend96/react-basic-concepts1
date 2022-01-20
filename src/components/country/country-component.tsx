/* React */
import React, {useState} from 'react';

/* Styles */
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import PlusOneIcon from '@mui/icons-material/PlusOne';
import {Button, Card, CardActions, CardContent, Grid, Typography} from "@mui/material";

export const CountryComponent = () => {
    
// -----------------------------------
//  React Hooks
// -----------------------------------  

    const [medalCount, setMedalCount] = useState(0)
    const [countryName, setCountryName] = useState('United States')
    

// -----------------------------------
//  Event Handlers
// -----------------------------------    

    const onAddMedalButtonClicked = (): void => {
        setMedalCount(medalCount + 1);
    }


    const card = (
        <>
            <CardContent style={{margin: 'auto', width: '300px'}}>
                <Typography>
                    {countryName}
                </Typography>
                <Typography>
                    Gold Medal Count: {medalCount}
                </Typography>
            </CardContent>
            <CardActions>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Button style={{marginTop: '10px',}} onClick={() => setMedalCount(0)} variant="outlined"><RestartAltIcon/> Reset Medals</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button style={{marginTop: '10px',}} onClick={onAddMedalButtonClicked} variant="outlined"><PlusOneIcon/> Add Medal</Button>
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
