import React from 'react';
const MovieCard = (props) => {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div>
                        <h1 className='title'> {props.title}</h1>
                        <img src={props.poster} className='img'></img>
                        <h2 className='des'> {props.description} </h2>
                        <h1> {props.rate}</h1>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default MovieCard;