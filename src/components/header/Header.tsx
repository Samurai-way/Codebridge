import React from 'react';
import {Input} from "../input/Input";
import {Box} from "@mui/material";
import {Cards} from "../card/Card";

export const Header = () => {
    return (
        <Box sx={{width: '1440px', height: '1408px'}}>
            <Input/>
            <Cards/>
        </Box>
    );
};
