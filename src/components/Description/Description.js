import React from "react";
import MovieCard from "../MovieCard";
import { useParams , Link } from "react-router-dom";
import { data } from "../assets/Data";


export default function Description() {

  const {id}= useParams();
  const trailler= data[id];
  //console.log(trailler)
  

  return (
    <div>
      <div className="description">
        <Link to="/" className="home"> home</Link>
        <h1>{trailler.title}</h1>
        <Link to='https://www.youtube.com/watch?v=SlXuWH8clMU'>{trailler.poster}</Link>
          
        
      </div>
    </div>
  );
}
