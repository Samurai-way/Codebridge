import {Box} from '@mui/material';
import React, {useEffect} from 'react';
import '../../App.css';
import {Header} from "../header/Header";
import {useAppDispatch} from "../../redux/store";
import {getCardsTC} from "../../redux/cardsReducer";

function App() {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getCardsTC())
    }, [])

    return (
        <Box sx={{width: '1440px', height: '1408px'}}>
            <Header/>
        </Box>
    );
}

export default App;
