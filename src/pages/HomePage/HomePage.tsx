import React from 'react'
import './HomePage.scss'

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = () => {
    return (
      <div className='home-page'>
        <h1>Homepage</h1>
      </div>
    )
}
export default HomePage