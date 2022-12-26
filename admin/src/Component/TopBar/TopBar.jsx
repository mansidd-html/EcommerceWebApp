import React from 'react'
import './TopBar.css'
import {NotificationsNone,Language,Settings} from '@mui/icons-material';
const TopBar = () => {
    return (
        <div className='topbar'>
            <div className='topbarWrapper'>
                <div className='topbarLeft'>
                    <span className='logo'>Safari Admin</span>
                </div>
                <div className='topbarRight'>
                    <div className='topBarIconConatiner'>
                        <NotificationsNone />
                        <span className='topIconBadge'>2</span>
                    </div>
                    <div className='topBarIconConatiner'>
                        <Language />
                        <span className='topIconBadge'>2</span>
                    </div>
                    <div className='topBarIconConatiner'>
                        <Settings />
                    </div>
                    <img src='https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg' className='topAvatar'/>
                </div>
            </div>
        </div>
    )
}

export default TopBar