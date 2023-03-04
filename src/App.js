import React from 'react';
import './App.css';
class App extends React.Component {
	constructor() {
		super();
		this.state = {items: ['Арген', 'Максат', 'Жанылай']};
	}

  render() {
		const list = this.state.items.map((item, index) => {
			return <li key={index}>{item}</li>;
		});


		return <ul>
			{list}
		</ul>
	}
}
export default App;
