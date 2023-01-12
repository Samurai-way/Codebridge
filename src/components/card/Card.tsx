import React, {useEffect, useState} from 'react';
import {Card} from "@mui/material";
import axios from "axios";

export const Cards = () => {

    const [state, setState]=useState([])

    useEffect(()=>{
        const res = axios.get('https://api.spaceflightnewsapi.net/v3/articles?_limit=6')
            .then(res => {
                setState(res.data)
            })
    },[])

    console.log(state)

    return (
        <div>

        </div>
    );
};

