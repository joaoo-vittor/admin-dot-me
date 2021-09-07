import './style.css';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
import { Link } from 'react-router-dom';

export const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-wrapper">
        <div className="top-left">
          <Link to="/" className="top-bar-link">
            <span className="logo">Admin.me</span>
          </Link>
        </div>
        <div className="top-right">
          <div className="top-bar-icon-container">
            <NotificationsNone />
            <span className="top-icon-bag">2</span>
          </div>
          <div className="top-bar-icon-container">
            <Language />
            <span className="top-icon-bag">2</span>
          </div>
          <div className="top-bar-icon-container">
            <Settings />
          </div>
          <img src="https://avatars.githubusercontent.com/u/56928594?s=400&u=50d019a78e60c862ae18cdd8375d197167930785&v=4" alt="" className="top-avatar" />
        </div>
      </div>
    </div>
  )
}

