import React from "react";
import "./Photos.css";

export default function Photos(props){
    if (props.photos){       
        return <section className="Photos">
            <div className="row gy-4">
            {props.photos.map(function(photos, index){
                return (
                    <div className="col-md-3 col-sm-4 px-3" key={index}>
                    <a href={photos.src.original} rel="noreferrer" target="_blank">
                    <img src={photos.src.landscape} 
                    className="img-fluid" alt={photos.photographer}/>
                    </a>
                    </div>
                )
            })}
                </div>
            </section>
    }else{
        return null;
    } 
}