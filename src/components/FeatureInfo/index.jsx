import './style.css';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';

export const FeatureInfo = () => {
  return (
    <div className="featured">
      <div className="featured-item">
        <span className="featured-title">Revanue</span>
        <div className="featured-money-container">
          <span className="feature-money">$2,415</span>
          <span className="feature-money-rate">
            -11.4 <ArrowDownward className="featured-icon negative"/>
          </span>
        </div>
        <div className="featured-sub">Compare to last month</div>
      </div>
      <div className="featured-item">
        <span className="featured-title">Sales</span>
        <div className="featured-money-container">
          <span className="feature-money">$2,415</span>
          <span className="feature-money-rate">
            -11.4 <ArrowDownward className="featured-icon negative"/>
          </span>
        </div>
        <div className="featured-sub">Compare to last month</div>
      </div>
      <div className="featured-item">
        <span className="featured-title">Cost</span>
        <div className="featured-money-container">
          <span className="feature-money">$2,415</span>
          <span className="feature-money-rate">
            +11.4 <ArrowUpward className="featured-icon"/>
          </span>
        </div>
        <div className="featured-sub">Compare to last month</div>
      </div>
    </div>
  )
}
