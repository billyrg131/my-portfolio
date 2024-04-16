import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'react-router';
import Portfolio from './components/portfolio';
import './App.css';

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Portfolio />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
