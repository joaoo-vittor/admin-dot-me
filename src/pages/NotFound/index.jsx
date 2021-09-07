import './style.css';

export const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found-container">
        <h1 className="not-found-title">
          Page Not Found
        </h1>
        <img 
          src="assets/page_not_found.svg" 
          alt="page not found" 
          className="not-found-img" />
      </div>
    </div>
  )
}

