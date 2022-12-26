import React from 'react'
import './User.css'
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@mui/icons-material'
import { Link } from 'react-router-dom'
const User = () => {
    return (
        <div className='user'>
            <div className='userTitleContainer'>
                <h1 className='userTitle'>Edit User</h1>
                <Link to='/newUser'>
                    <button className='userAddBtn'>Create</button>
                </Link>
            </div>
            <div className='userContainer'>
                <div className='userShow'>
                    <div className='userShowTop'>
                        <img className='userShowImg' src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg' alt='' />
                        <div className='userShowTopTitle'>
                            <span className='userShowUsername'>Anna Williams</span>
                            <span className='userShowUserTitle'>Doctor</span>
                        </div>
                    </div>
                    <div className='userShowBottom'>
                        <span className='userShowTitle'>Account Details</span>
                        <div className='userShowinfo'>
                            <PermIdentity className='userSHowIcon' />
                            <span className='userShowinfoTitle'>annaback78</span>
                        </div>
                        <div className='userShowinfo'>
                            <CalendarToday className='userSHowIcon' />
                            <span className='userShowinfoTitle'>10.03.2000</span>
                        </div>
                        <span className='userShowTitle'>Contact Details</span>
                        <div className='userShowinfo'>
                            <PhoneAndroid className='userSHowIcon' />
                            <span className='userShowinfoTitle'>+1 232 120 12</span>
                        </div>
                        <div className='userShowinfo'>
                            <MailOutline className='userSHowIcon' />
                            <span className='userShowinfoTitle'>annaback78@mail.com</span>
                        </div>
                        <div className='userShowinfo'>
                            <LocationSearching className='userSHowIcon' />
                            <span className='userShowinfoTitle'>USA</span>
                        </div>
                    </div>
                </div>
                <div className='userUpdate'>
                    <span className='userUpdateTitle'>Edit</span>
                    <form className='userUpdateForm'>
                        <div className='userUpdateLeft'>
                            <div className='userUpdateItem'>
                                <label>Username</label>
                                <input type='text' placeholder='johny34' className='userUpdateInput' />
                            </div>
                            <div className='userUpdateItem'>
                                <label>FullName</label>
                                <input type='text' placeholder='johny' className='userUpdateInput' />
                            </div>
                            <div className='userUpdateItem'>
                                <label>Email</label>
                                <input type='text' placeholder='johny@34' className='userUpdateInput' />
                            </div>
                            <div className='userUpdateItem'>
                                <label>Phone</label>
                                <input type='text' placeholder='+1 233 456 12' className='userUpdateInput' />
                            </div>
                            <div className='userUpdateItem'>
                                <label>Address</label>
                                <input type='text' placeholder='street 2 albana' className='userUpdateInput' />
                            </div>

                        </div>
                        <div className='userUpdateRight'>
                            <div className='userUpdateUpload'>
                                <img className='userUpdateImg' src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg' alt='' />
                                <label htmlFor='file'><Publish className='userUpdateIcon' /></label>
                                <input type='file' id='file' style={{ display: "none" }} />
                            </div>
                            <button className='userUpdateBtn'>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User