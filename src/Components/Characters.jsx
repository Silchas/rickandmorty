
import { useState, useEffect } from "react";
// import {Link} from "react-router-dom"

const Rick =() =>{
    const [character, setCharacter]= useState([])
    const [count, setCount]= useState(1)

    const increase =()=>{
        setCount(count+1)
    }

    const decrease =()=>{
        setCount(count-1)
    }
    useEffect(()=>{
        const fetchData=async()=>{
            const response= await fetch(`https://rickandmortyapi.com/api/character/?page=${count}`)
            const data= await response.json()
            const info= data.results
            setCharacter(info)
        }
        fetchData()
    },[count])

    return(
    <div>
        <h1>Rick and Morty</h1>
        <button onClick={decrease}>Previous</button>
        <button onClick={increase}>Next</button>

        {character.map((character)=>{
            return(
            <div key={character.id}>
                <img src={character.image} alt=""/>
                <h2>{character.name}</h2>
            </div> 
            )
        })}
    </div>
    )
}

export default Rick