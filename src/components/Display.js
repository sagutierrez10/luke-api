import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

const Display = () => {
    const {category, id} = useParams();

    const [info, setInfo] = useState({})

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${category}/${id}`)
            .then(res=>{
                console.log("axios call", res)
                setInfo(res.data)
            })
            .catch(err=>console.log(err))
    },[category,id])

    return (
        <div>
            {category=="people"?
                <>    
                    <h3>{info.name} </h3>
                    <h2>Height: {info.height}</h2>
                    <h2>Mass: {info.mass}</h2>
                    <h2>Hair Color: {info.hair_color}</h2>
                    <h2>Skin Color: {info.skin_color}</h2>
                </>:
            category=="planets"?
                <>
                    <h3>{info.name} </h3>
                    <h2>Climate: {info.climate}</h2>
                    <h2>Terrain: {info.terrain}</h2>
                    <h2>Surface Water: {info.surface_water}</h2>
                    <h2>Population: {info.population}</h2>
                </>:
            category=="films"?
                <>
                    <h3>{info.title}</h3>
                    <h2>Director: {info.director}</h2>
                    <h2>Producer: {info.producer}</h2>
                    <h2>Date released: {info.release_date}</h2>
                </>:
            category=="species"?
            <>
                <h3>{info.name}</h3>
                <h2>Classification: {info.classification}</h2>
                <h2>Designation: {info.designation}</h2>
                <h2>Average lifespan: {info.average_lifespan}</h2>
            </>:
                <>
                    <h3>Info unavailable</h3>
                    <img style={{width:"85%"}} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c3613136-6e8f-456a-995f-139c6c518595/dao7hka-1fd778ff-a22d-453d-9f38-e90d6bf4d1e3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2MzNjEzMTM2LTZlOGYtNDU2YS05OTVmLTEzOWM2YzUxODU5NVwvZGFvN2hrYS0xZmQ3NzhmZi1hMjJkLTQ1M2QtOWYzOC1lOTBkNmJmNGQxZTMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.n4usjCceXGrfru2zhiUr2ekhh87M-k2QfklteH5jPw0"alt="obi wan kenobi" />
                </>        
            }
        </div>
    );
};
export default Display;