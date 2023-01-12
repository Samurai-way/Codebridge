import {Box, TextField, Typography} from '@mui/material';
import React from 'react';
import {useAppSelector} from "../../redux/store";

export const Input = () => {

    const result = useAppSelector(state => state.cards.cards)
    const count = result.length

    return (
        <Box sx={{marginLeft: '75px', marginTop: '50px'}}>
            <Typography>Filter by keywords</Typography>
            <TextField sx={{width: '600px'}}
                       id="standard-basic"
                       label="The most successful IT companies in 2020"
                       variant="standard"/>
            <Typography sx={{marginTop: '50px'}}>Results: {count}</Typography>
        </Box>
    );
};

