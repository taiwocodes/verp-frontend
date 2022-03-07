import React from 'react'
import SidePanel from '../components/menu'
import '../styles/dashboard.css'


function Dashboard() {
  return (
      <>
      <SidePanel/>
    <div style={{float: 'right'}}>
        <div className='search'>
            <input type='search' placeholder=''/>
        </div>
    </div>
      </>
  )
}

export default Dashboard