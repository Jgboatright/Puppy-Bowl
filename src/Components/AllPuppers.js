import { Link } from "react-router-dom"
import { useState } from "react";
import './styles.css'

const AllPuppers = (props) => {
    const { pupperProps } = props;
    console.log(props);
    const [searchQuery, setSearchQuery] = useState("");

    let searchedPupper = pupperProps.filter((singlePupElement) => {
        let lowercasePup = singlePupElement.name.toLowerCase();
        console.log(lowercasePup)

        return lowercasePup.includes(searchQuery)
    })
    return (
        <div>
            <h1> All puppies are listed below: </h1>

            <input type="text" placeholder="Pupper name here...."
                onChange={(event) => {
                    console.log(event.target.value)
                    setSearchQuery(event.target.value)
                }}
            >

            </input>
            <div className="grid-container">
            {
                searchedPupper.length ? searchedPupper.map((singlePupElement, idx) =>{
                    return (
                                <div className="pup-containers" key={idx}>
                                    <p className="pup-words">Name: {singlePupElement.name}</p>
                                    <p className="pup-words">#{singlePupElement.id}</p>
                                    <img className="pup-image" style={{
                                        width: "20em",
                                        height: "25em",
                                    }}
                                        src={singlePupElement.imageUrl}/>
                                    <Link className="pup-words" to={'/puppers/' + idx}>
                                        <h3>More Information</h3>
                                    </Link>
                                    <br />
                                </div>
                    )
                }) : <div>Loading pupper data....</div>
            }
            </div>
        </div>
        
    )
}

export default AllPuppers;

