import React from 'react'
import SidePanel from '../components/menu'
import '../styles/dashboard.css'
import dash from '../images/dash.png'
import dash2 from '../images/dash2.png'
import woman6 from '../images/woman6.png'



function Dashboard() {
  return (
      <>
      <SidePanel/>
    <div style={{float: 'right'}}>
        <img src={woman6} alt='' style={{margin:'2%', width:'7%', float:'right'}}/>
        <div className='dashboard'>

            <span>Hello Angela, Welcome back.</span>
            <h1>Your Dashboard Today</h1>
            <span>Your unfinished videos</span> <br/>
            <img src={dash} alt='' style={{marginTop: '5%', marginRight:'3%'}}/>
            <img src={dash2} alt='' style={{marginTop: '5%'}}/>

        </div>
    </div>
      </>
  )
}

export default Dashboard