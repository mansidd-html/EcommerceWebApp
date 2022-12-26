import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import { Analytics, Assessment, Email, Feedback, Inventory2, LineStyle, ManageAccounts, Message, Paid, Person, Report, Timeline, TrendingUp } from '@mui/icons-material'
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebarWrapper'>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Dashboard</h3>
                    <ul className='sidebarList'>
                        <Link to='/' className='link'>
                            <li className='sidebarListItem active'>
                                <LineStyle className='sidebarIcons' />
                                Home
                            </li>
                        </Link>
                        <li className='sidebarListItem'>
                            <Timeline className='sidebarIcons' />
                            Analytics
                        </li>
                        <li className='sidebarListItem'>
                            <TrendingUp className='sidebarIcons' />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Quick Menu</h3>
                    <ul className='sidebarList'>
                        <Link to='/users' className='link'>
                            <li className='sidebarListItem'>
                                <Person className='sidebarIcons' />
                                Users
                            </li>
                        </Link>
                        <Link to='/products' className='link'>
                            <li className='sidebarListItem'>
                                <Inventory2 className='sidebarIcons' />
                                Products
                            </li>
                        </Link>
                        <li className='sidebarListItem'>
                            <Paid className='sidebarIcons' />
                            Transactions
                        </li>
                        <li className='sidebarListItem'>
                            <Assessment className='sidebarIcons' />
                            Reports
                        </li>
                    </ul>
                </div>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Notification</h3>
                    <ul className='sidebarList'>
                        <li className='sidebarListItem'>
                            <Email className='sidebarIcons' />
                            Mail
                        </li>
                        <li className='sidebarListItem'>
                            <Feedback className='sidebarIcons' />
                            Feedback
                        </li>
                        <li className='sidebarListItem'>
                            <Message className='sidebarIcons' />
                            Messages
                        </li>
                    </ul>
                </div>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Staff</h3>
                    <ul className='sidebarList'>
                        <li className='sidebarListItem'>
                            <ManageAccounts className='sidebarIcons' />
                            Manage
                        </li>
                        <li className='sidebarListItem'>
                            <Analytics className='sidebarIcons' />
                            Analytics
                        </li>
                        <li className='sidebarListItem'>
                            <Report className='sidebarIcons' />
                            Report
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar