import React from 'react'
import '../styles/footer.css'
import Logo from './logo'

function Footer() {
  return (
      <>
    <div className='footer-body'>
        <div style={{margin: '5%'}}>
        <Logo/>
        <p>Get the resources you need to break the bias</p>
        </div>

    <div className='info'>
        <div>
        <h3 className='info-head'>Quick Links</h3>
        <a href="" className='link'>How it works</a> <br/>
        <a href="" className='link'>Features</a> <br/>
        <a href="" className='link'>Community</a>    
        </div>

        <div>
        <h3 className='info-head'>Resources</h3>
        <a href="" className='link'>Blog</a> <br/>
        <a href="" className='link'>Medium</a>  
        </div>

        <div>
        <h3 className='info-head'>Contact</h3>
        <p>Lagos, Nigeria</p>  
        <p>info@verp.com</p>  
        </div>
    </div>

        <div className='bottom'>
        <span>©verp. All rights reserved.</span>
        <span>Terms and Condtions</span>
        <span>Privacy Policy</span>
        </div>

    </div>
      </>
  )
}

export default Footer