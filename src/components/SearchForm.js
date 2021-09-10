import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useHistory} from "react-router-dom";

const SearchForm = () => {

    const [categories, setCategories]= useState([])

    const [formInfo, setFormInfo]= useState({
        category:"people",
        id:""
    })

    const history= useHistory();

    useEffect(()=>{
        axios.get("https://swapi.dev/api/")
        .then(res=>{
            console.log("res looks like -->", res)
            console.log(Object.keys(res.data))
            setCategories(Object.keys(res.data))
        })
        .catch(err=> console.log(err))
    },[])

    const changeHandler= (e)=>{
        console.log("changing input")
        console.log(e.target.value)
        setFormInfo({
            ...formInfo,
            [e.target.name]:e.target.value
        })
    }

    const submitHandler=(e)=>{
        e.preventDefault();
        console.log("submitted")
        console.log(formInfo)
        history.push(`/${formInfo.category}/${formInfo.id}`)
        // axios.get(`https://swapi.dev/api/${formInfo.category}/${formInfo.id}`)
        //     .then(res=>{
        //         console.log("axios call", res)
        //     })
        //     .catch()
    }

    return (
        <div>
            <form onSubmit={submitHandler} className="form-inline row g-3 align-items-center" action="">
                <div className="col-auto">
                    <select onChange={changeHandler} name="category" id="" className="form-select"> 
                        {
                            categories.map((cat,i)=>{
                                return <option key={i} value={cat}>{cat}</option>
                            })
                        }
                    </select>
                </div>
                <div className="col-auto">
                    <input onChange={changeHandler} type="number" name="id" id="" className="form-control"/>
                </div>
                <div className="col-auto">
                    <input className="btn btn-success" type="submit" value="Search"/>
                </div>
            </form>
        </div>
    );
};

export default SearchForm;