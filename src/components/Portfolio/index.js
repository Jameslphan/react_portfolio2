import React from 'react';
import './index.scss';
import portfolioData from '../../data/portfolio.json';

const Portfolio = () => {

    const renderPortfolio = (portfolio) => {
        console.log(portfolio);
        return (
            <div className='images-container'>
                {
                    portfolio.map((port, idx) => {
                        console.log(port);
                        return (
                            <div className='image-box' key={idx}>
                                <img 
                                    src={port.cover} 
                                    className='portfolio-image' 
                                    alt='portfolio' />
                                    <div className='content'>
                                        <p className='title'><span className='make-red'>&lt;</span><span className='make-green'>{port.title}</span><span className='make-red'>&gt;</span></p>
                                        <h4 className='description'>{port.description}</h4>
                                        <button className='btn' onClick={() => window.open(port.url)}>View</button>
                                    </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }

    return (
        <div>
            <div className='container portfolio-page'>
                <h1 className='page-title'>Portfolio</h1>
                <div>{renderPortfolio(portfolioData.portfolio)}</div>
            </div>
        </div>
    );
}

export default Portfolio;