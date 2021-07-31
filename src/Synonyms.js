import React from "react";

export default function Synonyms(props){
    if (props.synonyms) {
        return (
            <div className="Synonyms" >
                <div className="row">
                    <div className="col-auto font-weight-bold">
                        <strong>Synonyms:</strong></div>
                     {props.synonyms.map(function(synonym, index){
                     return   <div  className="col-auto text-nowrap synonym" key={index}>{synonym}</div>
                })}
                </div>
            </div>
        );
    }else{
        return null;
    }
}