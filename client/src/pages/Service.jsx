import React from 'react';
import { useAuth } from '../store/auth';
import { NavLink } from "react-router-dom"; 
import { useNavigate } from "react-router-dom";

export const Service = () => { 
    const { services } = useAuth(); 
    console.log(services);
    
    return (
        <section className="section-services">
            <div className="container">
                <h1 className="main-heading">Services </h1>
            </div>
            <div className="container grid grid-three-cols">
                {services.map((curElem, index) => {
                    return (
                        <div className="card" key={index}>
                            <div className="card-img">
                                <img src={curElem.image} alt={curElem.movie} width="200"/>
                            </div>
                            <div className="card-details">
                                <div className="grid grid-two-cols">
                                
                                    <p>{curElem.provider}</p>
                                    <p>{curElem.price_min} - {curElem.price_max}</p>
                                </div>
                                <h2>{curElem.movie}</h2>
                                <center><p>{curElem.service}</p></center>
                                
                            </div>
                            <button className="btn">View Now</button>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Service;
