import React from 'react'
import './Navigation.scss'

export interface INavigationProps {}

const Navigation: React.FunctionComponent<INavigationProps> = (props) => {
    return (
        <div className="navigation">
            <div className='logo'>MW</div>
        </div>
    )
}
export default Navigation