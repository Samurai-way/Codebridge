import {Box, Button, Paper, Typography} from '@mui/material';
import React from 'react';
import {useAppSelector} from "../../redux/store";
import img from "../../assets/Arrow - Right.png";

const styleTypography = {
    marginTop: '24px',
    marginLeft: '25px'
}

const styleBox = {
    width: '1290px',
    height: '700px',
    gap: '45px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: '50px auto'
}

export const Cards = () => {

    const cards = useAppSelector(state => state.cards.cards)


    return (
        <Box sx={styleBox}>
            {cards.map(e => {
                return <Paper elevation={3} sx={{maxWidth: '400px'}}>
                    <img style={{width: '400px', height: '217px'}} src={e.imageUrl}/>
                    <Typography
                        sx={styleTypography}>{e.publishedAt.slice(0, 10).split('-').reverse().join('.')}</Typography>
                    <Typography sx={styleTypography}>{e.title}</Typography>
                    <Typography sx={styleTypography}>{e.summary}</Typography>
                    <Button sx={{color: 'black', marginTop: '20px', marginLeft: '20px'}}>
                        Read more
                        <img style={{marginLeft: '5px'}} src={img}/>
                    </Button>
                </Paper>
            })}
        </Box>
    );
};

