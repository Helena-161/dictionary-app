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
                <div className="pexels-link">
                    <a href="https://www.pexels.com" title="Photos provided by Pexels.com">Photos provided by {" "}
                        <img src="https://images.pexels.com/lib/api/pexels.png" alt="Pexels.com logo" height="30px" /></a>
                </div>
            </section>
    }else{
        return null;
    } 
}