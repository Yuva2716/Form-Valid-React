import React from 'react'
import './Popup.css'

class Popup extends React.Component{
  render() {
    return(
      <div className='Popup'>
        <div className="Popup-inner">
          <button className='close' onClick={this.props.onClick}>{"\u2718"}</button>
          <br />
          <br />
          <center>
            <span className='tick'>{"\u2714"}</span>
          </center>
          <h2 className='Success'>You Have <br />
          Successfully Signed Up!</h2>
        </div>
      </div>
    )
  }
}

export default Popup
