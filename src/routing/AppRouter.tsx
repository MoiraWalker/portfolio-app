import React from 'react'
import { BrowserRouter, BrowserRouter as Routes, Route } from 'react-router-dom'
import {
    HomePage, AboutPage
} from '../pages/index'

export interface IRouterProps {}

export const AppRouter: React.FunctionComponent<IRouterProps> = (props) => {
    return (
        <BrowserRouter>z
            <Routes>
                <Route>
                    <Route path="/" ><HomePage/></Route> 
                    <Route path='/about'> <AboutPage/></Route> 
                </Route>   
            </Routes>
        </BrowserRouter>
    )
}

