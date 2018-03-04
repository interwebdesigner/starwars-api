import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.state = {
			actors: [],
			searchfield: ''
		}
	}

	async componentDidMount() {
	  const resp = await fetch('https://swapi.co/api/people/')
	  const data = await resp.json();
	  const results = await this.setState({actors: data.results});
	  // console.log(data.results);
	}

	// componentDidMount() {
	// 	fetch('https://swapi.co/api/people/')
	// 		.then(response => response.json())
	// 		.then(users => this.setState({robots: users}));
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