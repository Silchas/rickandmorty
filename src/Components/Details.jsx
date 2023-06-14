
import {Link, useLocation} from "react-router-dom"

const Character =()=>{
    const character= useLocation().state
    return(
        <div>
            <h1>{character.name}</h1>
            <img src={character.image}></img>
            <h3>{character.gender}</h3>
            <p>{character.status}</p>
            <p>{character.species}</p>
            <p>{character.type}</p>
            <Link to='/'>GO back</Link>
        </div>
    )
}

export default Character