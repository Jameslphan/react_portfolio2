import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import HomeImage from '../../assets/images/Japan.png';


const Home = () => {
    return (
        <>
            <div className='container home-page'>
                <div className='text-zone'>
                    <h1><span className="textRed">Greetings</span>, 
                        <br/> I'm <span className="textBlue">James</span> Phan, 
                        <br/> full-stack web <span className="textYellow">developer</span>.
                    </h1>
                    <h2>I'm a Full-Stack Develop (MERN) | Coffee Java Expert</h2>
                    <Link to="/Contact" className='flat-button'>CONTACT ME</Link>
                </div>
                <div className='img-container'> 
                    <img src={ HomeImage } alt='Kimono Me'/>
                </div>
            </div>
        </>
    )
}

export default Home;