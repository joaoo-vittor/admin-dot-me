import './style.css';
import { Visibility } from '@material-ui/icons';

export const WidgetSm = () => {
  return (
    <div className="widget-sm">
      <span className="widget-sm-title">New Join Members</span>
      <ul className="widget-sm-list">
        <li className="widget-sm-list-item">
          <img src="https://avatars.githubusercontent.com/u/56928594?v=4" 
            alt="user" className="widget-sm-img" />
          <div className="widget-sm-user">
            <span className="widget-sm-user-name">João Vitor</span>
            <span className="widget-sm-user-title">Back-End Developer</span>
          </div>
          <button className="widget-sm-button">
            <Visibility className="widget-sm-icon"/>
            Display
          </button>
        </li>
        <li className="widget-sm-list-item">
          <img src="https://avatars.githubusercontent.com/u/56928594?v=4" 
            alt="user" className="widget-sm-img" />
          <div className="widget-sm-user">
            <span className="widget-sm-user-name">João Vitor</span>
            <span className="widget-sm-user-title">Software Enginner </span>
          </div>
          <button className="widget-sm-button">
            <Visibility className="widget-sm-icon"/>
            Display
          </button>
        </li>
        <li className="widget-sm-list-item">
          <img src="https://avatars.githubusercontent.com/u/56928594?v=4" 
            alt="user" className="widget-sm-img" />
          <div className="widget-sm-user">
            <span className="widget-sm-user-name">João Vitor</span>
            <span className="widget-sm-user-title">Front-End Developer</span>
          </div>
          <button className="widget-sm-button">
            <Visibility className="widget-sm-icon"/>
            Display
          </button>
        </li>
      </ul>
    </div>
  )
}


