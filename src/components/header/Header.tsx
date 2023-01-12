import React from 'react';
import {Input} from "../input/Input";
import {Box} from "@mui/material";
import {Cards} from "../card/Card";

export const Header = () => {
    return (
        <Box>
            <Input/>
            <Cards/>
        </Box>
    );
};
