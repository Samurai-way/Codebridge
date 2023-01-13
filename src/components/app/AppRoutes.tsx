import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {ArticlePage} from "../article/ArticlePage";
import {Header} from "../header/Header";

export enum Path {
    homepage = '/',
    articlePage = '/articlePage'
}


export const AppRoutes = () => {
    return (
        <Routes>
            <Route path={Path.homepage} element={<Header/>}/>
            <Route path={Path.articlePage + '/:id'} element={<ArticlePage/>}/>
            {/*<Route path={Path.other} element={<div>error</div>}/>*/}
        </Routes>
    );
};

