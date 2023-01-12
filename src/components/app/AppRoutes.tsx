import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

export enum Path {
    homepage = '/homepage',
    articlePage = '/articlePage'
}


export const AppRoutes = () => {
    return (
        <Routes>
            <Route path={Path.homepage} element={<Navigate to={Path.homepage}/>}/>
            <Route path={Path.articlePage + '/:id'} element={<Navigate to={Path.articlePage}/>}/>
        </Routes>
    );
};

