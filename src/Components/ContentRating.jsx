import React from 'react';
import './ContentRating.css';

function ContentRating({ onOpenModal }) {
  return (
    <div className="main-page">
      <div className="main-box">
        <h1>Content Rating</h1>

        <h2>
          Condition: <span>Pending</span>
        </h2>

        <button onClick={onOpenModal}>
          Click to View Modal
        </button>
      </div>
    </div>
  );
}

export default ContentRating;