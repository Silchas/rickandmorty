import Navbar from "./NavBar"
import {Link, useLocation} from "react-router-dom"

const Character =()=>{
    const character = useLocation().state
    return(
        <div>
            <Navbar />
        <div className="mx-9 mt-2">
            <img src={character.image}></img>
            <h1>{character.name}</h1>
            <h3>{character.gender}</h3>
            <p>{character.status}</p>
            <p>{character.species}</p>
            <p>{character.type}</p>
        </div>
        <Link className="bg-transparent hover:bg-gray-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-9" to='/'>Back</Link>
        </div>
    )
}

export default Character