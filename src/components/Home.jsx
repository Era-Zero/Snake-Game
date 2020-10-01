import React from 'react';
//Components
import './Components.css'
import Header from './Header'
import Footer from './Footer'

const Home = () => {
    //Landing game of the website
    return(
        <div className="container , home">
            <Header />
            <div className="container , space bg-light">
                <h1 className="display-2 text-center">It's quiet too quiet ...</h1>
                <p className="lead text-center">Welcome to the landing page.</p>
            </div>
            <Footer />
        </div>
    )
}

export default Home