import Todo from '../assets/todos.png';
import Weather from '../assets/likeweather.png';
import Quiz from '../assets/quiz.png';
import Crud from '../assets/firestore-crud.png';
import Mern from '../assets/mern-crud.png';
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import TextTransition, { presets } from 'react-text-transition';
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';
import './App.css';

function App() {
	const TEXTS = ['Javascript', 'MERN', 'Jest', 'React'];
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const timer = setTimeout(() => setIndex(index + 1), 1000);
		return () => clearTimeout(timer);
	});

	const form = useRef();
	const SERVICE_ID = 'service_770x28j';
	const TEMPLATE_ID = 'template_0mqosdd';
	const PUBLIC_KEY = 'Rzjz-nO2itznzvXam';

	const handleSubmit = (e) => {
		e.preventDefault();
		emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
			(result) => {
				console.log(result.text);
				alert('Email message sent');
			},
			(error) => {
				console.log(error.text);
				alert(error.text);
			}
		);
	};

	return (
		<div className="App">
			<div className="main">
				<div className="nav">
					<p style={{ fontSize: '26px' }}>Bill Rogers</p>
					<p style={{ fontSize: '26px' }}>
						<a href="#main">Projects</a>
					</p>
					<p style={{ fontSize: '26px' }}>
						<a href="#about">Projects</a>
					</p>
					<p style={{ fontSize: '26px' }}>
						<a href="#info">Contacts</a>
					</p>
				</div>
				<div className="intro">
					<h1>
						<TextTransition springConfig={presets.wobbly}>
							{TEXTS[index % TEXTS.length]}
						</TextTransition>
					</h1>
				</div>
				<div>
					<h1 className="abouth">Projects</h1>
				</div>
				<div id="about">
					<figure>
						<img
							src={Weather}
							alt="#"
							width="200"
							height="190"
							className="proj-img"
						/>
						<figcaption>
							<a href="https://billyrg131.github.io/likeweather/">
								React Weather App
							</a>
						</figcaption>
					</figure>
					<figure>
						<img
							src={Todo}
							alt="#"
							width="200"
							height="190"
							className="proj-img"
						/>
						<figcaption>
							<a href="https://billyrg131.github.io/react-todos1/">
								React Todo App
							</a>
						</figcaption>
					</figure>
					<figure>
						<img
							src={Quiz}
							alt="#"
							width="200"
							height="190"
							className="proj-img"
						/>
						<figcaption>
							<a href="https://billyrg131.github.io/react-quiz2/">React Quiz</a>
						</figcaption>
					</figure>
					<figure>
						<img
							src={Crud}
							alt="#"
							width="200"
							height="190"
							className="proj-img"
						/>
						<figcaption>
							<a href="https://billyrg131.github.io/firestore-crud/">
								Firebase Firestore CRUD
							</a>
						</figcaption>
					</figure>
					<figure>
						<img
							src={Mern}
							alt="#"
							width="200"
							height="190"
							className="proj-img"
						/>
						<figcaption>
							<a href="https://mern-frontend-v7yo.onrender.com/">MERN CRUD</a>
						</figcaption>
					</figure>
				</div>
				<h1 className="infoh">Contacts</h1>
				<div id="info">
					<div className="icon-div">
						<h1 id="contact1-hd">Follow me on these socials:</h1>
						<div className="icon-link">
							<p>
								<a href="https://github.com/billyrg131">
									<FaGithub />
									Github
								</a>
							</p>
						</div>
						<div className="icon-link">
							<p>
								<a href="https://www.facebook.com/bill.rogers.92123015">
									<FaFacebook />
									Facebook
								</a>
							</p>
						</div>
						<div className="icon-link">
							<p>
								<a href="https://www.linkedin.com/in/bill-rogers-a68536234/">
									<FaLinkedin />
									LinkedIn
								</a>
							</p>
						</div>
					</div>

					<div className="contact-form">
						<p>Write me a message !</p>
						<form onSubmit={handleSubmit} ref={form}>
							<div>
								<label>Name</label>
							</div>
							<div>
								<input type="text" name="user_name" placeholder="Name..." />
							</div>
							<div>
								<label>Email</label>
							</div>
							<div>
								<input type="email" name="user_email" placeholder="Email..." />
							</div>
							<div>
								<label>Message</label>
							</div>
							<div>
								<textarea name="message" placeholder="Type message here..." />
							</div>
							<div>
								<input type="submit" value="Send" />
							</div>
						</form>
					</div>
				</div>
				<div className="footer">
					<footer>Portfolio website created by Bill Rogers &copy; 2024</footer>
				</div>
			</div>
		</div>
	);
}

export default App;
