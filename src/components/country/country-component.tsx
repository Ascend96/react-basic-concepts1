/* React */
import React, {useEffect, useState} from 'react';

/* Styles */
import {Card, CardContent, Container, Grid, Typography} from "@mui/material";
import MedalComponent from "../medal/medal-component";
import CountryService from "../../services/country.service";

export const CountryComponent = (props: any) => {
// -----------------------------------
//  React Hooks
// -----------------------------------  
    /* State */
    const [totalMedalCount, setTotalMedalCount] = useState(0)
    const [goldMedalCount, setGoldMedalCount] = useState(0)
    const [silverMedalCount, setSilverMedalCount] = useState(0)
    const [bronzeMedalCount, setBronzeMedalCount] = useState(0)
    
    /* Effects */
    useEffect(() => {
        setTotalMedalCount(bronzeMedalCount + silverMedalCount + goldMedalCount)
    }, [bronzeMedalCount, silverMedalCount, goldMedalCount])
    
    const removeCountry = () => {
        console.log('id:', props.id)
        CountryService.deleteCountry(props.id).then(resp => {
            if(resp.status === 200) {
                CountryService.getAllCountries().then(r => {
                    props.setCountries(r.data)
                })
            }
            
        }).catch(e => console.log(e))
    }
    
    
// -----------------------------------
//  Component Rendering Functions
// -----------------------------------
    const card = (
        <>
            <CardContent style={{margin: 'auto', width: '300px', textAlign: "left"}}>
                <Typography>
                    {props.name}: {totalMedalCount}
                </Typography>
                <hr/>
                <Typography>
                    <MedalComponent countryId={props.id} type={'Gold'} initialMedalCount={props.gold} handleMedalCount={setGoldMedalCount}/>
                </Typography>
                <Typography>
                    <MedalComponent countryId={props.id} type={'Silver'} initialMedalCount={props.silver} handleMedalCount={setSilverMedalCount}/>
                </Typography>
                <Typography>
                    <MedalComponent countryId={props.id} type={'Bronze'} initialMedalCount={props.bronze} handleMedalCount={setBronzeMedalCount}/>
                </Typography>
            </CardContent>
        </>
    );

// -----------------------------------
//  Main Component Body
// -----------------------------------
    return (
        <Container maxWidth="sm">
            <button onClick={removeCountry}>X</button>
            <Card variant="outlined" style={{maxWidth: '400px', margin: 'auto', backgroundColor: 'beige', marginTop: '10px'}}>
                {card}
            </Card>
        </Container>
       
    )

}

export default CountryComponent;
