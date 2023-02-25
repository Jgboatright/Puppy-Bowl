import { Link } from 'react-router-dom';
import './styles.css'

const Homepage = () => {
    return (
        <div>
            <h1>Puppy Bowl!</h1>
            <img src="https://www.al.com/resizer/Op6tX8D7TZGOlzXNslaQKeR1wLk=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/ULLTACKUHRDZ3PTRIMJKELST64.jpeg"></img>
            <div className='roster-btn'>
                <Link to="/puppers">
                    <h2>Roster:</h2>
                </Link>
            </div>
        </div>
        

    )
}

export default Homepage