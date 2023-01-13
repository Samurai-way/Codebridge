import {Box} from '@mui/material';
import React, {useEffect} from 'react';
import '../../App.css';
import {Header} from "../header/Header";
import {useAppDispatch} from "../../redux/store";
import {getCardsTC} from "../../redux/cardsReducer";
import {AppRoutes} from "./AppRoutes";
import {ArticlePage} from "../article/ArticlePage";

function App() {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getCardsTC())
    }, [])

    return (
        <Box sx={{width: '1440px'}}>
            {/*<Header/>*/}
            {/*<ArticlePage/>*/}
            <AppRoutes/>
        </Box>
    );
}

export default App;
