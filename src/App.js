import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';

// const urls = [
// 		'https://swapi.co/api/people/?page=1',
// 		'https://swapi.co/api/people/?page=2',
// 		'https://swapi.co/api/people/?page=3',
// 		'https://swapi.co/api/people/?page=4',
// 		'https://swapi.co/api/people/?page=5'
// 	]

class App extends Component {
	constructor() {
		super()
		this.state = {
			actors: [],
			searchfield: ''
		}
	}

	async componentDidMount() {
		let allData = [];
		let currentPage = 1;
		let i = 0;

		while(currentPage < 9) {
			currentPage++;
			const response = await fetch(`https://swapi.co/api/people/?page=${currentPage}`)
			const data = await response.json();
			for (i = 0; i < data.results.length; i++) {
				allData.push(data.results[i]);
			}
		}
		await this.setState({actors: allData});
	}


	// async componentDidMount() {
	//   const resp = await fetch('https://swapi.co/api/people/?page=1')
	//   const data = await resp.json();
	//   const results = await this.setState({actors: data.results});
	// }

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
	}

	render() {
		const filteredActors = this.state.actors.filter(actor => {
			return actor.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		if (this.state.actors.length === 0) {
			return (
				<div className='tc'>
					<h1 className='f1'>Loading...</h1>
				</div>
			);
		} else {
			return (
				<div className='tc'>
					<h1 className='f1'>STARWARS API</h1>
					<h2>--Actors--</h2>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<CardList actors={filteredActors}/>
					</Scroll>
				</div>
			);
		}
	}
}

export default App;