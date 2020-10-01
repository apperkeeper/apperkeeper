import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

// New application card
const AppCard = (props) => {
  return (
    <form>
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
    </form>
  );
};

export default AppCard;
