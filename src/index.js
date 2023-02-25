import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { AllPuppers, SinglePupper } from "./Components";
import Homepage from "./Components/Homepage";

const App = () => {
    
    const [puppers, setPuppers] = useState([]);
    
    useEffect(() => {
        const fetchPuppers = async () => {
            try {
                console.log("ASYNC is running! Fetching puppers....")

                const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2301-ftb-mt-web-ft/players");

                const translateData = await response.json();
                console.log(translateData);

                const actualPupData = translateData.data.players
                console.log(actualPupData);

                setPuppers(actualPupData);

            } catch (error) {
                console.log(error);
            }
        }
        fetchPuppers();
    }, [])

    return(
        <BrowserRouter>
            <section>
                <Homepage />
            </section>

            <Routes>
                <Route path="./" element={<Homepage />} />
                <Route path="/puppers" element={<AllPuppers pupperProps={puppers}/>} />
                <Route path="/puppers/:id" element={<SinglePupper pupperProps={puppers}/>} />
            </Routes>
        </BrowserRouter>
    )
}



const appElement = document.getElementById("app")
const root = createRoot(appElement);
root.render(<App />)