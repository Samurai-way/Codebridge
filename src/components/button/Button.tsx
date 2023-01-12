import React from 'react';
import {Button} from "@mui/material";
import img from '../../assets/Arrow - Right.png'

export const But = () => {
    return (
        <Button sx={{color: 'black', marginTop: '20px'}}>
            Read more
            <img style={{marginLeft: '5px'}} src={img}/>
        </Button>
    );
};
