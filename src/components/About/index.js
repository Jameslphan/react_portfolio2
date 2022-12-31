import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGithub, faHtml5, faNodeJs, faReact, faSquareJs } from '@fortawesome/free-brands-svg-icons';

const About = () => {
    return (
        <div>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>About me</h1>
                    <p>“There is no certainty, only opportunity.” - V for Vendetta</p>
                    <p>“A good plan today is better than a perfect plan tomorrow.” - Wag the Dog</p>
                    <p>"I Say Never Be Complete. I Say Stop Being Perfect. I Say Let's Evolve. Let The Chips Fall Where They May." - Fight Club</p>
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={ faSquareJs } color='#EFD81D' />                       
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={ faHtml5 } color='#F06529' />                      
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={ faCss3 } color='#28A4D9' />                     
                        </div>
                        <div className='face4'>
                        <FontAwesomeIcon icon={ faReact } color='#5ED4F4' />                       
                        </div>
                        <div className='face5'>
                        <FontAwesomeIcon icon={ faNodeJs } color='green' />                      
                        </div>
                        <div className='face6'>
                        <FontAwesomeIcon icon={ faGithub } color='#EC4D28' />                       
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default About;