import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {Box, Button, Paper, Typography} from "@mui/material";
import img from '../../assets/Arrow - Left.png';
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

        <Box sx={{width: '1440px', marginLeft: '50px'}}>
            <Paper sx={{width: '1440px', margin: '0 auto'}}>
                <img style={{width: '1440px', height: '245px'}} src={card.imageUrl}/>
                <Paper sx={{margin: '0px auto'}}>
                    <Typography sx={{margin: '35px auto', display: 'flex', justifyContent: 'center'}}>
                        {card.title}
                    </Typography>
                    <Box sx={{width: '1140px', margin: '0 auto'}}>
                        <Typography sx={{margin: '50px auto', display: 'flex', justifyContent: 'center'}}>
                            {card.summary}
                        </Typography>
                    </Box>
                </Paper>
            </Paper>
            <Button sx={{color: 'black'}} onClick={onClickBackHandler}>
                Back to homepage
                <img style={{marginLeft: '5px'}} src={img}/>
            </Button>
        </Box>
    );
};
