import { useParams } from 'react-router-dom'
import './styles.css'

const SinglePupper = (props) => {
    const { id } = useParams();
    console.log(props.pupperProps)
    console.log(props.pupperProps[id])
    return (
        <div className='pup-container'>
            <img style={{
                    width: "45em",
                    height: "60em"
                }}
            src={props.pupperProps[id].imageUrl}/>
            <p>Name: {props.pupperProps[id].name}</p>
            <p>Breed: {props.pupperProps[id].breed}</p>
            <p>Status: {props.pupperProps[id].status}</p>
            <p>Team: {props.pupperProps[id].teamId}</p>
            <p>Cohort ID: {props.pupperProps[id].cohortId}</p>
        </div>
    )
}

export default SinglePupper;