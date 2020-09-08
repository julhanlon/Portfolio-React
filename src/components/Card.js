import React from 'react'
import "./Card.css"
// import PropTypes from 'prop-types'
const cardStyle = {
  maxWidth: '700px',
  marginBottom: "30px"
  
}

const imageStyle = {
  width: "400px"
}

const Card = (props) => {
    return (
      <div className = "container mt-5 mb-1">
<div className="card mb-3" style={cardStyle}>
  <div className="row no-gutters" >
  <div className="col-md-8">
      <div className="card-body clearfix">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}.</p>
      </div>
    </div>
    <div className="col-md-4">
      <img src={props.image} style = {imageStyle} className="card-img" alt="not working"/>
    </div>
 
  </div>
</div>
      </div>

    
    )
}


export default Card