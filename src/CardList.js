import React from 'react';
import Card from './Card';

const CardList = ({actors}) => {
	return (
		<div>
		{
			actors.map((actor, i) => {
				return (
					<Card 
						key={actors[i].name}
						id={actors[i].name}
						name={actors[i].name}
						height={actors[i].height}
						mass={actors[i].mass}
						hair_color={actors[i].hair_color}
						skin_color={actors[i].skin_color}
						eye_color={actors[i].eye_color}
						gender={actors[i].gender}
						birth_year={actors[i].birth_year}
					/>
				);
			})
		}
		</div>
	);
}

export default CardList;