import './style.css';
import { 
  PermIdentity,         
  CalendarToday,
  PhoneAndroid,
  MailOutline,
  LocationCity,
  Publish } from '@material-ui/icons';
import { Link } from 'react-router-dom';

export const User = () => {
  return (
    <div className="user">
      <div className="user-title-container">
        <h1 className="user-title">Edit User</h1>
        <Link to="/new_user">
          <button className="user-add-button">Create</button>
        </Link>
      </div>
      <div className="user-container">
        <div className="user-show">
          <div className="user-show-top">
            <img src="https://avatars.githubusercontent.com/u/1486366?v=4" 
              alt="" className="user-show-img" />
            <div className="user-show-top-title">
              <span className="user-show-username">Safak</span>
              <span className="user-show-user-title">Software Enginner</span>
            </div>
          </div>
          <div className="user-show-button">
            <span className="user-show-title">Account Details</span>
            <div className="user-show-info">
              <PermIdentity className="user-show-icon"/>
              <span className="user-show-info-title">@safak</span>
            </div>
            <div className="user-show-info">
              <CalendarToday className="user-show-icon"/>
              <span className="user-show-info-title">10.12.1999</span>
            </div>
            <span className="user-show-title">Contact Details</span>
            <div className="user-show-info">
              <PhoneAndroid className="user-show-icon"/>
              <span className="user-show-info-title">+55 999 965 326</span>
            </div>
            <div className="user-show-info">
              <MailOutline className="user-show-icon"/>
              <span className="user-show-info-title">safak@email.com</span>
            </div>
            <div className="user-show-info">
              <LocationCity className="user-show-icon"/>
              <span className="user-show-info-title">Toronto | CAD</span>
            </div>
          </div>
        </div>
        <div className="user-update">
          <span className="user-update-title">Edit</span>
          <form className="user-update-form">
            <div className="user-update-left">
              <div className="user-update-item">
                <label>Username</label>
                <input 
                  type="text"
                  placeholder="@safak" 
                  className="user-update-input" />
              </div>
              <div className="user-update-item">
                <label>Full Name</label>
                <input 
                  type="text"
                  placeholder="safak" 
                  className="user-update-input" />
              </div>
              <div className="user-update-item">
                <label>Email</label>
                <input 
                  type="text"
                  placeholder="safak@email.com" 
                  className="user-update-input" />
              </div>
              <div className="user-update-item">
                <label>Phone</label>
                <input 
                  type="text"
                  placeholder="+55 999 965 326" 
                  className="user-update-input" />
              </div>
              <div className="user-update-item">
                <label>Address</label>
                <input 
                  type="text"
                  placeholder="Toronto | CAD" 
                  className="user-update-input" />
              </div>
            </div>
            <div className="user-update-right">
              <div className="user-update-upload">
                <img 
                  src="https://avatars.githubusercontent.com/u/1486366?v=4" 
                  alt="" 
                  className="user-update-img"/>
                <label htmlFor="file">
                  <Publish className="user-update-icon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }}/>
              </div>
              <button className="user-update-button">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}


