import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {Box, Button, Paper} from "@mui/material";
import img from './../../assets/Arrow - Right.png'
import {useNavigate, useParams} from "react-router-dom";
import {getCardTC} from "../../redux/cardsReducer";

export const ArticlePage = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const card = useAppSelector(state => state.cards.card)

    useEffect(() => {
        id && dispatch(getCardTC(id))
    }, [])
    const onClickBackHandler = () => {
        navigate('/')
    }
    return (

        <Box sx={{width: '1440px'}}>

            <Paper sx={{width: '1290px', height: '1001px', margin: '0 auto'}}>
                <img style={{width: '200px', height: '100px'}} src={card.imageUrl}/>
            </Paper>

            <Button sx={{color: 'black'}} onClick={onClickBackHandler}>
                Back to homepage
                <img style={{marginLeft: '5px'}} src={img}/>
            </Button>
        </Box>
    );
};
