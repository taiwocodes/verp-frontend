import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  DashboardOutlined,
  UsergroupAddOutlined,
  WechatOutlined,
  FileTextOutlined,
  SettingOutlined
} from '@ant-design/icons';
import '../styles/menu.css'
import Logo from './logo';


function SidePanel(){
    return (
        <>
        <div className='menu-panel'>
        <Logo/>
        <div className='menu'>
          <NavLink to='/dashboard' className='menu-link'><DashboardOutlined style={{paddingRight:'15px'}}/>Dashboard</NavLink>
          <NavLink to='/classroom' className='menu-link'><UsergroupAddOutlined style={{paddingRight:'15px'}}/>Classroom</NavLink>
          <NavLink to='/discussions' className='menu-link'><WechatOutlined style={{paddingRight:'15px'}}/>Discussions</NavLink>
          <NavLink to='/resources' className='menu-link'><FileTextOutlined style={{paddingRight:'15px'}}/>Resources</NavLink>
          <NavLink to='/settings' className='menu-link'><SettingOutlined style={{paddingRight:'15px'}}/>Settings</NavLink>
        </div>
      </div>
    </>
    )
}
export default SidePanel;