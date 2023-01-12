import {Box, Paper, Typography} from '@mui/material';
import React from 'react';
import {useAppSelector} from "../../redux/store";

export const Cards = () => {

    const cards = useAppSelector(state => state.cards.cards)


    return (
        <Box sx={{maxWidth: '1290px', height: '700px', display: 'flex', marginTop: '50px'}}>
            {cards.map(e => {
                return <Paper elevation={3} sx={{width: '400px', height: '217px'}}>
                    <img style={{width: '400px', height: '217px'}} src={e.imageUrl}/>
                    <Typography sx={{marginTop: '24px'}}>{e.publishedAt.slice(0, 10).split('-').reverse().join('.')}</Typography>
                    <Typography sx={{marginTop: '24px'}}>{e.title}</Typography>
                    <Typography sx={{marginTop: '24px'}}>{e.summary}</Typography>
                </Paper>
            })}
        </Box>
    );
};

