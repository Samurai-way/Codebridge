import {Box, TextField, Typography} from '@mui/material';
import React from 'react';

export const Input = () => {
    return (
        <Box sx={{marginLeft: '75px', marginTop: '50px'}}>
            <Typography>Filter by keywords</Typography>
            <TextField sx={{width: '600px'}}
                       id="standard-basic"
                       label="The most successful IT companies in 2020"
                       variant="standard"/>
            <Typography sx={{marginTop: '50px'}}>Results: 6</Typography>
        </Box>
    );
};

