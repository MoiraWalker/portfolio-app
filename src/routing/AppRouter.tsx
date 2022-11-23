import React from 'react'
import { BrowserRouter, BrowserRouter as Routes, Route } from 'react-router-dom'
import {
    HomePage, AboutPage
} from '../pages/index'

export interface IRouterProps {}

export const AppRouter: React.FunctionComponent<IRouterProps> = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" component={HomePage} />
                <Route path='/about' component={AboutPage} />
            </Routes>
        </BrowserRouter>
    )
}

