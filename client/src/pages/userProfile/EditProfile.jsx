import React from 'react'

function EditProfile() {
  return (
    <>
      <div className="edit-profile-container">
      <p className='user-question'>Edit Your Profile</p>
      <form action="" className="edit-profile">
        <label>Name</label>
      <input type="text" placeholder='Enter your Name' required/>
      <label>Profile Picture</label>
      <input type="file" placeholder='Enter your email' required/>
          <label>Email</label>
          <input type="email" placeholder='Enter your email' required/>
          <label>Phone no.</label>
          <input type="tel" placeholder='Enter your phone no.' required/>
          <label>Address</label>
          <input type="text" placeholder='Enter your address' required/>
          <label>Gender</label>
          <div className="radio-input">
          <label> <input type='radio' required/> Male</label>
          <label> <input type='radio' required/> Female</label>
          <label> <input type='radio' required/> Other</label></div>
        <button type='Submit'>Save</button>
      </form>
      </div>
    </>
  )
}

export default EditProfile;