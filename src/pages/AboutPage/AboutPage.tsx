import React from 'react'
import './AboutPage.scss'

export interface IAboutPageProps {}

const AboutPage: React.FunctionComponent<IAboutPageProps> = (props) => {
    return (
      <div className="about-page">
        <h1>About page</h1>
      </div>
    )
}
export default AboutPage