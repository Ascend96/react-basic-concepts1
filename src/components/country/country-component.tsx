/* React */
import React, {useEffect, useState} from 'react';

/* Styles */
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import {Button, Card, CardActions, CardContent, Container, Grid, Typography} from "@mui/material";
import MedalComponent from "../medal/medal-component";

export const CountryComponent = (props: any) => {
    
// -----------------------------------
//  React Hooks
// -----------------------------------  

    const [totalMedalCount, setTotalMedalCount] = useState(0)
    
    const [goldMedalCount, setGoldMedalCount] = useState(0)
    const [silverMedalCount, setSilverMedalCount] = useState(0)
    const [bronzeMedalCount, setBronzeMedalCount] = useState(0)
    
    useEffect(() => {
        setTotalMedalCount(bronzeMedalCount + silverMedalCount + goldMedalCount)
    }, [bronzeMedalCount, silverMedalCount, goldMedalCount])
    
    

// -----------------------------------
//  Event Handlers
// -----------------------------------    
    


    const card = (
        <>
            <CardContent style={{margin: 'auto', width: '300px', textAlign: "left"}}>
                <Typography>
                    {props.name}: {totalMedalCount}
                </Typography>
                <hr/>
                <Typography>
                    <MedalComponent type={'Gold'} initialMedalCount={0} handleMedalCount={setGoldMedalCount}/>
                </Typography>
                <Typography>
                    <MedalComponent type={'Silver'} initialMedalCount={0} handleMedalCount={setSilverMedalCount}/>
                </Typography>
                <Typography>
                    <MedalComponent type={'Bronze'} initialMedalCount={0} handleMedalCount={setBronzeMedalCount}/>
                </Typography>
            </CardContent>
        </>
    );

// -----------------------------------
//  Main Component Body
// -----------------------------------
    return (
        <Container maxWidth="sm">
            <Card variant="outlined" style={{maxWidth: '400px', margin: 'auto', backgroundColor: 'beige', marginTop: '10px'}}>
                {card}
            </Card>
        </Container>
       
    )

}

export default CountryComponent;
