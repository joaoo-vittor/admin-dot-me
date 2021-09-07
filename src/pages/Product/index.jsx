import './style.css';
import { Link } from 'react-router-dom';
import { Chart } from '../../components/Chart';
import { productData } from '../../dummyData';
import { Publish } from '@material-ui/icons';

export const Product = () => {
  return (
    <div className="product">
      <div className="product-title-container">
        <h1 className="product-title">Product</h1>
        <Link to="/new_product">
          <button className="product-add-button">Create</button>
        </Link>
      </div>
      <div className="product-top">
        <div className="product-top-left">
          <Chart 
            data={productData} 
            dataKeyLine="Sales"
            dataKeyXAxis="name"
            title="Sales Performance"
          />
        </div>
        <div className="product-top-right">
          <div className="product-info-top">
            <img 
              src="https://m.media-amazon.com/images/I/7120GgUKj3L._AC_SL1500_.jpg" 
              alt="" 
              className="product-info-img"
            />
            <span className="product-name">Apple Airpods</span>
          </div>
          <div className="product-info-bottom">
            <div className="product-info-item">
              <span className="product-info-key">id:</span>
              <span className="product-info-value">123</span>
            </div>
            <div className="product-info-item">
              <span className="product-info-key">sales:</span>
              <span className="product-info-value">423</span>
            </div>
            <div className="product-info-item">
              <span className="product-info-key">active:</span>
              <span className="product-info-value">yes</span>
            </div>
            <div className="product-info-item">
              <span className="product-info-key">in stock:</span>
              <span className="product-info-value">12</span>
            </div>
          </div>
        </div>
      </div>
      <div className="product-bottom">
        <form className="product-form">
          <div className="product-form-left">
            <label>Product Name</label>
            <input type="text" placeholder="Apple Airpods"/>
            <label>In stock</label>
            <select name="inStock" id="id_stock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="id_active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="product-form-right">
            <div className="product-upload">
              <img 
                src="https://m.media-amazon.com/images/I/7120GgUKj3L._AC_SL1500_.jpg" 
                alt="" className="product-upload-img" 
              />
              <label htmlFor="file">
                <Publish className="product-upload-icon"/>
              </label>
              <input type="file" id="file" style={{ display: 'none' }}/>
            </div>
            <button className="product-button">Update</button>
          </div>
        </form>
      </div>
    </div>
  )
}

