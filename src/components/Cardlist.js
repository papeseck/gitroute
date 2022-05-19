import React from 'react';
import { data } from './assets/Data';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';


const Cardlist = () => {

	return (
		<>
			{
				data.map((index) => (
					<div className='container'>
						<Link to={`/Description/${index.id}`}>
							<MovieCard poster={index.poster}
							/>
						</Link>
						<MovieCard
							title={index.title}
							description={index.description}
							rate={index.rate}
						/>



					</div>


				))}
		</>
	);
}

export default Cardlist;