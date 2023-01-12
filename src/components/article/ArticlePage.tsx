import React from 'react';
import {Box, Button, Paper} from "@mui/material";
import img from './../../assets/Arrow - Left.png'

export const ArticlePage = () => {
    return (
        <Box sx={{width: '1440px'}}>
            <Paper sx={{width: '1290px', height: '1001px', margin: '0 auto'}}>
                hello
            </Paper>
            <Button sx={{color: 'black'}}>
                Back to homepage
                <img style={{marginLeft: '5px'}} src={img}/>
            </Button>
        </Box>
    );
};
