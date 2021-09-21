import React, { Component } from 'react';
// import moment from 'moment';
import './Message.css';


export default class Message extends Component {
  state={
    curTime : new Date().toLocaleString(),
  }
  render() {
    const {
      data,
      isMine,
    } = this.props;

    return (
      <div>

      <div className={[
        'message',
        `${isMine ? 'mine' : ''}`
      ].join(' ')}>
         
        <div className="bubble-container">
       
        <small>{(!isMine) && data.author.name}</small><br/>
        <small>{(!isMine) && this.state.curTime}</small>
          <div className="bubble">
            { data.message }
          </div>
         
        </div>
        
        
      </div>
      </div>
    );
  }
}
