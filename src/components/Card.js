import React from 'react'
// import PropTypes from 'prop-types'
const cardStyle = {
  maxWidth: '540px',
  
}


const Card = (props) => {
    return (
      <div className = "container">
<div className="card mb-3" style={cardStyle}>
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src={props.image} className="card-img" alt="not working"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}.</p>
      </div>
    </div>
  </div>
</div>
      </div>

    
    )
}


export default Card