import './style.css';

export const NewUser = () => {
  return (
    <div className="new-user">
      <h1 className="new-user-title">New User</h1>
      <form className="new-user-form">
        <div className="new-user-item">
          <label>Username</label>
          <input type="text" placeholder="john" />
        </div>
        <div className="new-user-item">
          <label>Full Name</label>
          <input type="text" placeholder="john smith" />
        </div>
        <div className="new-user-item">
          <label>Email</label>
          <input type="email" placeholder="johnSmith@gmail.com" />
        </div>
        <div className="new-user-item">
          <label>Password</label>
          <input type="password" placeholder="johnSmith@gmail.com" />
        </div>
        <div className="new-user-item">
          <label>Phone</label>
          <input type="password" placeholder="+55 999 000 111" />
        </div>
        <div className="new-user-item">
          <label>Address</label>
          <input type="password" placeholder="Campina Grande - PB" />
        </div>
        <div className="new-user-item">
          <label>Gender</label>
          <div className="new-user-gender">
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label htmlFor="other">Other</label>
          </div>
        </div>
        <div className="new-user-item">
          <label>Active</label>
          <select name="active" id="active" className="new-user-select">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="new-user-button">Create</button>
      </form>
    </div>
  )
}



