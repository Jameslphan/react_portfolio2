import React from 'react';
import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import reactLogo from '../../assets/images/logo192.png';
import { faUserSecret, faAddressCard, faChessRook, faSuitcase, faFile } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    return(
        <div className='nav-bar' >
            <Link className='logo' to='/'>
                <img src={reactLogo} alt="logo" />
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/" >
                    <FontAwesomeIcon icon={ faChessRook } color="#4d4d4e" />                   
                </NavLink>

                <NavLink exact="true" activeclassname="active" className="about-link" to="/about" >
                    <FontAwesomeIcon icon={ faUserSecret } color="#4d4d4e" />                   
                </NavLink>

                <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio" >
                    <FontAwesomeIcon icon={ faSuitcase} color="#4d4d4e" />                   
                </NavLink>

                <NavLink exact="true" activeclassname="active" className="resume-link" to="/resume" >
                    <FontAwesomeIcon icon={ faFile} color="#4d4d4e" />                   
                </NavLink>

                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" >
                    <FontAwesomeIcon icon={ faAddressCard } color="#4d4d4e" />                   
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/james-phan-8aa75866/">
                        <FontAwesomeIcon icon={ faLinkedin } color="#4d4d4e" />
                    </a>
                </li>

                <li>
                    <a target="_blank" rel="noreferrer" href="https://github.com/Jameslphan">
                        <FontAwesomeIcon icon={ faGithub } color="#4d4d4e" />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;