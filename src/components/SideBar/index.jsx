import './style.css';
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { Link } from 'react-router-dom';

export const SideBar = () => {
  return (
    <div className="side-bar">
      <div className="side-bar-wrapper">
        <div className="side-bar-menu">
          <h3 className="side-bar-title">Dashboard</h3>
          <ul className="side-bar-list">
            <Link to="/" className="side-bar-link">
              <li className="side-bar-list-item active">
                <LineStyle className="side-bar-icons"/>
                Home
              </li>
            </Link>
            <li className="side-bar-list-item">
              <Timeline className="side-bar-icons"/>
              Analytics
            </li>
            <li className="side-bar-list-item">
              <TrendingUp className="side-bar-icons"/>
              Sales
            </li>
          </ul>
        </div>
        <div className="side-bar-menu">
          <h3 className="side-bar-title">Quick Menu</h3>
          <ul className="side-bar-list">
            <Link to="/users" className="side-bar-link">
              <li className="side-bar-list-item">
                  <PermIdentity className="side-bar-icons"/>
                  Users
              </li>
            </Link>
            <Link to="/products" className="side-bar-link">
              <li className="side-bar-list-item">
                <Storefront className="side-bar-icons"/>
                Products
              </li>
            </Link>
            <li className="side-bar-list-item">
              <AttachMoney className="side-bar-icons"/>
              Transactions
            </li>
            <li className="side-bar-list-item">
              <BarChart className="side-bar-icons"/>
              Reports
            </li>
          </ul>
        </div>
        <div className="side-bar-menu">
          <h3 className="side-bar-title">Notifications</h3>
          <ul className="side-bar-list">
            <li className="side-bar-list-item">
              <MailOutline className="side-bar-icons"/>
              Mail
            </li>
            <li className="side-bar-list-item">
              <DynamicFeed className="side-bar-icons"/>
              Feedback
            </li>
            <li className="side-bar-list-item">
              <ChatBubbleOutline className="side-bar-icons"/>
              Messages
            </li>
          </ul>
        </div>
        <div className="side-bar-menu">
          <h3 className="side-bar-title">Staff</h3>
          <ul className="side-bar-list">
            <li className="side-bar-list-item">
              <WorkOutline className="side-bar-icons"/>
              Manage
            </li>
            <li className="side-bar-list-item">
              <Timeline className="side-bar-icons"/>
              Analytics
            </li>
            <li className="side-bar-list-item">
              <Report className="side-bar-icons"/>
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

