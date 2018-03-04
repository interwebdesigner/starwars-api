import React from 'react';

const Card = ({name, gender, id, height, mass, hair_color, skin_color, eye_color, birth_year}) => {
	return (
		<div className='tc bg-white dib br3 pa3 ma2 grow bw2 shadow-5'>
			{/*<img alt='actors' src={`https://robohash.org/${id}?200x200`} />*/}
			<div>
				<h2>{name}</h2>
				<ul className="list">
					<li><strong>Height: </strong>{height}</li>
					<li><strong>Mass: </strong>{mass}</li>
					<li><strong>Hair Colour: </strong>{hair_color}</li>
					<li><strong>Skin Colour: </strong>{skin_color}</li>
					<li><strong>Eye Colour: </strong>{eye_color}</li>
					<li><strong>Gender: </strong>{gender}</li>
					<li><strong>Birth Year: </strong>{birth_year}</li>
				</ul>
			</div>
		</div>
	);
}

export default Card;