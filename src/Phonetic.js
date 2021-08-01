import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetic.css";


export default function Phonetic(props){
    return (
        <div className="Phonetic">
           <h4 className="text"> {props.phonetic.text}</h4>
           <ReactAudioPlayer src={props.phonetic.audio} controls volume={0.6} />
        </div>
    );
}