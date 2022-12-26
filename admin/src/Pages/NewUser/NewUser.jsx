import React from 'react'
import './NewUser.css'
const NewUser = () => {
  return (
    <div className='newUser'>
      <h1 className='newUserTitle'>News User</h1>
      <form className='newUserForm'>
        <div className='newUserItem'>
          <label>Username</label>
          <input type='text' placeholder='john' />
        </div>
        <div className='newUserItem'>
          <label>Fullname</label>
          <input type='text' placeholder='john Alia' />
        </div>
        <div className='newUserItem'>
          <label>Email</label>
          <input type='email' placeholder='john@' />
        </div>
        <div className='newUserItem'>
          <label>Password</label>
          <input type='password' />
        </div>
        <div className='newUserItem'>
          <label>Phone</label>
          <input type='text' placeholder='1212 123123 123' />
        </div>
        <div className='newUserItem'>
          <label>Address</label>
          <input type='text' placeholder='NewYork Usa' />
        </div>
        <div className='newUserItem'>
          <label>Gender</label>
          <div className='newUserGender'>
            <input type='radio' name='gender' id='male' value='male' />
            <label htmlFor='male'>Male</label>
            <input type='radio' name='gender' id='female' value='female' />
            <label htmlFor='female'>Female</label>
            <input type='radio' name='gender' id='other' value='other' />
            <label htmlFor='other'>Other</label>
          </div>
        </div>
        <div className='newUserItem'>
          <label>Active</label>
          <select className='newUserSelect' name='active' id='active'>
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
          </select>
        </div>
        <div className='newUserItem'>
          <button className='newUserBtn'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default NewUser