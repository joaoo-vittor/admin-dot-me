import './style.css';

export const WidgetLg = () => {
  const Button = ({ type }) => (
    <button className={`widget-lg-button ${type}`}>{ type }</button>
  )

  return (
    <div className="widget-lg">
      <h3 className="widget-lg-title">Latest transactions</h3>
      <table className="widget-lg-table">
        <tr className="widget-lg-tr">
          <th className="widget-lg-th">Costumer</th>
          <th className="widget-lg-th">Date</th>
          <th className="widget-lg-th">Amount</th>
          <th className="widget-lg-th">Status</th>
        </tr>
        <tr className="widget-lg-tr">
          <td className="widget-lg-user">
            <img src="https://avatars.githubusercontent.com/u/56928594?v=4" 
            alt="" className="widget-lg-img" />
            <span className="widget-lg-name">João Vitor</span>
          </td>
          <td className="widget-lg-date">2 Jun 2021</td>
          <td className="widget-lg-amount">$122.32</td>
          <td className="widget-lg-status">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widget-lg-tr">
          <td className="widget-lg-user">
            <img src="https://avatars.githubusercontent.com/u/56928594?v=4" 
            alt="" className="widget-lg-img" />
            <span className="widget-lg-name">João Vitor</span>
          </td>
          <td className="widget-lg-date">2 Jun 2021</td>
          <td className="widget-lg-amount">$122.32</td>
          <td className="widget-lg-status">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widget-lg-tr">
          <td className="widget-lg-user">
            <img src="https://avatars.githubusercontent.com/u/56928594?v=4" 
            alt="" className="widget-lg-img" />
            <span className="widget-lg-name">João Vitor</span>
          </td>
          <td className="widget-lg-date">2 Jun 2021</td>
          <td className="widget-lg-amount">$122.32</td>
          <td className="widget-lg-status">
            <Button type="Pending" />
          </td>
        </tr>
      </table>
    </div>
  )
}


