import React from 'react';
import { Form, Input, Checkbox } from 'antd';
import Logo from '../components/logo';
import welcome from '../images/welcome.png';
import { useNavigate } from 'react-router-dom';
import '../styles/form.css';

function Login() {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate('/dashboard');
	}
	return (
		<>
			<div className='side-panel'>
				<div style={{ margin: '5%' }}>
					<Logo />
					<p style={{ color: '#ffff', paddingTop: '50px' }}>
						A few clicks to get into your dashboard
					</p>
				</div>
				<img src={welcome} alt='' />
			</div>

            <div className='form-body'>
				<Form action=''>
					<h1 style={{ fontSize: '40px', paddingBottom: '40px' }}>Welcome Back!</h1>
					<div>
						<span style={{ fontSize: '20px' }}>
							Please, enter your details
						</span>
					</div>

                    {/* INPUT SECTION */}
					<div className='input-section'>
						<div>
							<Form.Item name='phone_no' rules={[
									{ required: true, message: 'Please input your phone number!' },]}>
								<Input type='number' placeholder='Phone No'className='input-box for-login'/>
							</Form.Item>
						</div>
						
						<div>
							<Form.Item name='pin' rules={[
									{ required: true, message: 'Please input your pin!' },]} >
								<Input.Password type='password' placeholder='Pin' className='input-box for-login'/>
							</Form.Item>
						</div>
					
					</div>
                    <Form.Item name="remember" valuePropName="checked" style={{fontWeight: 'bold'}}>
                    <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <button className='done' onClick={handleClick}>Sign In</button> 

                    <div className='lower-p'>
                    <span>Don't have an account?</span>
                    <a href='/register'>Sign Up</a>
                    </div>
				</Form>
			</div>
		</>
	);
}

export default Login;
