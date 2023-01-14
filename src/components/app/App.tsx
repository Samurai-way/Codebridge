import {Box} from '@mui/material';
import React, {useEffect} from 'react';
import '../../App.css';
import {useAppDispatch} from "../../redux/store";
import {getCardsTC} from "../../redux/cardsReducer";
import {AppRoutes} from "./AppRoutes";

function App() {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getCardsTC())
    }, [])

    return (
        <Box sx={{width: '1440px'}}>
            <AppRoutes/>
        </Box>
    );
}

export default App;
