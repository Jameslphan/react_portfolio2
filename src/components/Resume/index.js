import './index.scss';
import ResumePlaceholder from '../../assets/images/Seahawksguysnight.jpeg'

const Resume = () => {
    return(
        <div>
            <div className='container resume-page'>
                <h1 className='page-title'>My Resume:</h1>
                <div className='resumeButton'>
                    <h4>&lt;Click---&gt;</h4>
                    <a href={ ResumePlaceholder } download={ ResumePlaceholder }>
                        <button type='submit'>
                            Download
                        </button>
                    </a>
                    <h4>&lt;---Button&gt;</h4>
                </div> 
            </div>
            
        </div>
    )
}

export default Resume;