import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

// const TopicList = (props) => {
// 	return (
// 		<div className='container'>
// 			<h1>Topic List</h1>
// 			<Link to={`${props.match.url}/13`}>Topic 13 </Link>
// 			<br />
// 			<Link to={`${props.match.url}/16`}>Topic 16 </Link>
// 			<br />
// 			<Link to={`${props.match.url}/22`}>Topic 22 </Link>
// 		</div>
// 	);
// };

const hats = () => {
	return (
		<div>
			<h1>Hats Page</h1>
		</div>
	);
};

function App() {
	return (
		<div>
			<Route exact path='/' component={HomePage}></Route>
			<Route exact path='/hats' component={hats}></Route>
		</div>
	);
}

export default App;
