import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/logo';
import image3 from '../images/concern.png';
import image4 from '../images/kiss.png';
import image5 from '../images/love_eyes.png';
import image6 from '../images/woman1.png';
import image7 from '../images/woman2.png';
import image8 from '../images/woman4.png';
import image9 from '../images/woman5.png';
import image10 from '../images/woman3.png';
import image11 from '../images/party_face.png';
import image12 from '../images/love_face.png';
import image13 from '../images/woman6.png';
import Footer from '../components/footer';
import '../styles/landing.css';

function Landing() {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate('/register');
	};
	return (
		<>
			<div className='body'>
				<div className='intro'>
					<Logo />
					<div className='top-nav'>
						<a id='navlink' href=''>
							How it works
						</a>
						<a id='navlink' href=''>
							Features
						</a>
						<a id='navlink' href=''>
							Community
						</a>
					</div>
					<div className='onboard'>
						<a id='login' href='/login'>
							Login
						</a>
						<span> </span>
						<button className='onboard-btn' onClick={handleClick}>Sign Up</button>
					</div>
				</div>

				<div style={{ padding: '4%' }}>
					<h1 className='intro-text' style={{ color: '#ffff' }}>
						Get the resources you <br /> need to break the bias
					</h1>
					<p style={{paddingBottom: '20px'}}>
						Get access and leverage on thousands of curated resources to break
						into <br />
						tech with support from community of like-minds{' '}
					</p>
					<button className='onboard-btn' onClick={handleClick}>Get started</button>
				</div>
				{/* <div className='image-in-arc'>
					<img src={image2} alt='girl' id='girl' />
				</div> */}
			</div>
			<div className='white-part'>
                <div className='middle-section-heading'>
				<h2>How it works?
                    <img src={image3} alt='concern' id='concern' style={{width: '4%', paddingTop: ''}}/>
                </h2>
                </div>

				<div className='cards'>
					<div className='card'>
						<div className='card-content'>
							<span className='card-number one'>1</span>
							<h3>Create an account</h3>
							<p>Get started by creating an account on our website</p>
						</div>
					</div>
					<div className='card'>
						<div className='card-content'>
							<span className='card-number two'>2</span>
							<h3>Join the conversation</h3>
							<p>
								Login in to your dashboard to join the conversations that is
								going on
							</p>
						</div>
					</div>
					<div className='card'>
						<div className='card-content'>
							<span className='card-number three'>3</span>
							<h3>Leverage on the system</h3>
							<p>Leverage on the system to support your journey in to tech</p>
						</div>
					</div>
				</div>

                <div className='features'>
                    <div className="list">
                        <li className='list-list inner-f'><span className='card-number one'>1</span>Classroom</li>
                        <li className='list-list'><span className='card-number two'>2</span>Discussion</li>
                        <li className='list-list inner-f'><span className='card-number three'>3</span>Resources</li>
                    </div>
                    <div className="bar"></div>
                    <div className='features-right'>
                        <h2>Our Features</h2>
                        <p>Our features are carefully organised to <br/> make getting in to tech easier for you <br/> even if you do not have prior experience </p>
					    <button className='onboard-btn' onClick={handleClick}>Get started</button>
                    </div>
                </div>

                <div className="join-convo">
                    <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                    <img src={image4} alt='kiss-face'/>
                    <span style={{fontSize: '30px', fontWeight: '700'}}>Join  the converstion on how to leverage<br/> technology  through verp </span>
                    <img src={image5} alt='love-eyes'/>
                    </div>

                    <div style={{display: 'flex', justifyContent: 'space-around'}}>
                    <img src={image6} alt=''/>  <img src={image7} alt=''/> 
                    <p>It is free for lifetime, no credit card required </p>
                    <img src={image8} alt=''/> <img src={image9} alt=''/>
                    </div>

					    <button className='onboard-btn' onClick={handleClick}>Get started</button>    <br/>
                    <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                        <img src={image10} alt=''/> <img src={image11} alt=''/>
                        <img src={image12} alt=''/> <img src={image13} alt=''/>
                    </div>
                </div>
			</div>

            <div>
                <Footer/>
            </div>
		</>
	);
}

export default Landing;
