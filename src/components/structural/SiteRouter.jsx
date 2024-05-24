import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Projects from './pages/Projects';
import Homepage from '../Homepage';

function SiteRouter(){
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homepage />}>
                <Route path="Projects" element={<Projects/>}></Route>
            </Route>
        </Routes>
        </BrowserRouter>
}

export default SiteRouter;