import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

// Application card
// Should be draggable

const AppCard = (props) => {
  const onSubmit = (event) => {
    event.preventDefault(event);
    // Send form data to database
  };
  return (
    <div className="list-item">
      <form onSubmit={onSubmit}>
        <div className="form">
          <label className="company">Company</label>
          <input type="text" id="company" placeholder="Google" />
        </div>
        <div className="form">
          <label className="position">Position</label>
          <input type="text" id="position" placeholder="Software Engineer" />
        </div>
        <div className="form">
          <label className="contact">Contact</label>
          <input type="text" id="contact" placeholder="Burak" />
        </div>
        <div className="form">
          <label className="notes">Notes</label>
          <textarea id="notes" placeholder="Passed phone interview" />
        </div>
        <div className="form">
          <label className="status">Status</label>
          <select>
            <option>Wishlist</option>
            <option>Applied</option>
            <option>Phone Interview</option>
            <option>Onsite</option>
          </select>
        </div>
        <div className="form">
          <label className="applied-at">Date Applied</label>
          <input type="date" id="applied_at" />
        </div>
        <div className="form">
          <button className="submit-button" type="submit">
            Add App
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppCard;
