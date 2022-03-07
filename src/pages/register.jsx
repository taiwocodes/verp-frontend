import React from 'react';
import { Form, Input, Checkbox } from 'antd';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/logo';
import reg_image from '../images/lady_with_phone.png';
import '../styles/form.css';

function Register() {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate('/login');
	}
	return (
		<>
			<div className='side-panel'>
				<div style={{ margin: '5%' }}>
					<Logo />
					<p style={{ color: '#ffff', paddingTop: '50px' }}>
						You are a few clicks away from creating your account
					</p>
				</div>
				<img src={reg_image} alt='' />
			</div>

			<div className='form-body'>
				<Form action=''>
					<h1 style={{ fontSize: '40px', paddingBottom: '40px' }}>Register</h1>
					<div>
						<span style={{ fontSize: '32px' }}>
							Get the resources you need to <br />
							break the bias
						</span>
						<p>
							Get access and leverage on thousands of curated resources to
							<br /> break in to tech with support from community of like-minds{' '}
						</p>
					</div>

                    {/* INPUT SECTION */}
					<div className='input-section'>
					<div style={{display: 'flex', gap: '50px'}}>
						<div>
							<Form.Item name='firstname' rules={[
								{ required: true, message: 'Please input your first name!' },]}>
								<Input placeholder='First Name'className='input-box'/>
							</Form.Item>
						</div>
						<div>
							<Form.Item name='lastname' rules={[
								{ required: true, message: 'Please input your last name!' },]}>
								<Input placeholder='Last Name'className='input-box'/>
							</Form.Item>
						</div>
					</div>

					<div style={{display: 'flex', gap: '50px'}}>
						<div>
							<Form.Item name='phone_no' rules={[
								{ required: true, message: 'Please input your phone number!' },]}>
								<Input placeholder='Phone No'className='input-box'/>
							</Form.Item>
						</div>
						<div>
							<Form.Item name='address' rules={[
								{ required: true, message: 'Please input your address!' },]}>
								<Input placeholder='Address'className='input-box'/>
							</Form.Item>
						</div>
						</div>

						<div style={{display: 'flex', gap: '50px'}}>
						<div>
							<Form.Item name='pin' rules={[
								{ required: true, message: 'Please input your pin!' },]}>
								<Input.Password placeholder='Create pin' className='input-box'/>
							</Form.Item>
						</div>
						<div>
							<Form.Item
								name='confirm_pin'
								rules={[
									{ required: true, message: 'Please input your pin again!' },]}>
								<Input.Password placeholder='Confirm pin' className='input-box'/>
							</Form.Item>
						</div>
						</div>
					</div>

                    <Form.Item name="remember" valuePropName="checked" style={{fontWeight: 'bold'}}>
                    <Checkbox>I have read and agree to the Terms and Privacy Policy.</Checkbox>
                    </Form.Item>
                    <button className='done' onClick={handleClick}>Sign Up</button> <br/>
                    <div className='lower-p'>
                    <span>Already have an account?</span>
                    <a href='/login'>Sign In</a>
                    </div>
				</Form>
			</div>
		</>
	);
}

export default Register;
