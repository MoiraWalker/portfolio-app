import React from 'react'
import { useRoutes } from 'react-router-dom'
import {
    HomePage, AboutPage
} from '../pages/index'

export interface IRouterProps {}

export const AppRouter: React.FunctionComponent<IRouterProps> = (props) => {
    const routes = useRoutes([
        { path: "/", element: <HomePage/> },
        { path: "/about", element: <AboutPage/> },
      ]);
    return routes
}

