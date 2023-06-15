
import { useState, useEffect } from "react";
import {Link} from "react-router-dom"

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
            <div className="flex bottom-0 left-0">
        <button className="bg-transparent hover:bg-gray-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-6" onClick={decrease}>Previous</button>
        <button className="bg-transparent hover:bg-gray-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-2" onClick={increase}>Next</button>
        </div>
            <div className="flex flex-row flex-wrap justify-end my-2 space-x-4">
                {character.map((character)=>{
                    return(
                    <Link to={`/{character.id}`} state={character} key={character.id}>
                        <img src={character.image} alt=""/>
                        <h2>{character.name}</h2>
                    </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Rick