import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Pages/Main/Main';
import IngredientSearch from './Pages/IngredientSearch/IngredientSearch';

const Views = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={ Main() }></Route>
                <Route path='/ingredientsearch' element={ IngredientSearch() } ></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Views;