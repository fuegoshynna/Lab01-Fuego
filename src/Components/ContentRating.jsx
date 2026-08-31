
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      dislikes: 0,
      handlerlike:()=>{
        this.setState((prevState)=>({
          likes: prevState.likes + 1
        }));

    },
    handlerdislike:()=>{
      this.setState((prevState)=>({
        dislikes: prevState.dislikes + 1
      }));
    },
  }

}

  render() {
    return (
     <>
     <div className="content-rating">
      <p>
      Technology continues to change the way people work, learn, and communicate every day. <br>
      </br>Simple digital tools can make tasks faster and more convenient, while also creating new <br>
      </br> opportunities for creativity and collaboration. As technology develops, it is important to use <br>
      </br> these tools responsibly and understand how they can affect everyday life.
      </p>
      <div className="rating_buttons">
      <button className="like_button" onClick={this.state.handlerlike}>
        like ({this.state.likes})
      </button>

      <button className="dislike_button" onClick={this.state.handlerdislike}>
        dislike ({this.state.dislikes})
      </button>

      </div>
     </div>
     </>
    );
  }
}

export default ContentRating;
